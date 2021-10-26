import React, {useState} from 'react'
import {Grid, Container, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fondo from './assets/img/fondo.png'
import {LockOutlined as LockOutlined} from '@material-ui/core'
import apiBaseUrl from './shared/utils/api';


const useStyles = makeStyles(theme => ({
    root:{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },
    container:{
      opacity: '0.9',
      height: '60%',
      marginTop: theme.spacing(10),
      [theme.breakpoints.down(400 + theme.spacing(2) + 2)]:{
        marginTop: 5,
        width: '100%',
        height: '100%'
      }
    },
    div:{
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar:{
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main
    },
    form:{
      width: '100%',
      marginTop: theme.spacing(1)
    },
    button2:{
      marginTop: theme.spacing(1)
    }
}))

const App = () => {
  const [usuario, setUsuario] = useState ("");
  const [passwd, setPasswd] = useState ("");
  const classes = useStyles()

  const login = async () =>{
    const userData ={
      usuario: usuario,
      passwd: passwd
    }
    console.log(userData)
    try {
      const response = await fetch(`${apiBaseUrl}/App`,{
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json'
          },
      });
      const user = await response.json();
      console.log(usuario);
    }
    catch (e){
      console.log(e)
    }
  }
  return (
    <Grid container component='main' className={classes.root}>
        <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container} >
          <div className={classes.div}>
            <Avatar className={classes.Avatar} />
            <Typography component='h1' variant='h5'>¿Quien Eres?</Typography>
            <form className={classes.form}>
              <TextField
                  fullWidth
                  autoFocus
                  color='primary'
                  margin='normal'
                  variant='outlined'
                  label='Usuario'
                  name='usuario'
                 
              />
              <TextField
                  fullWidth
                  type='password'
                  color='primary'
                  margin='normal'
                  variant='outlined'
                  label='Contraseña'
                  name='passwd'
                  
                  
              />
              <Button
                fullWidth
                variant='contained'
                color='primary'
                >
                  A rockear!
              </Button>
              
              <Button
                fullWidth
                variant='contained'
                color='primary'
                className={classes.button2}
                >
                  yo quiero!
              </Button>
            </form>
          </div>
        </Container>
    </Grid>
  )
}

export default App