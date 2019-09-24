import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const Login = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        let action = { type: 'LOGIN'};
        props.dispatch(action)
        
    };


    return (
        <div>
   
        <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Авторизация</DialogTitle>
          <DialogContent>
            
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              type="email"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Пароль"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
        
            <Button onClick={handleClose} color="primary">
              Вход
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );

};

export default Login;