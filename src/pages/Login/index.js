// cSpell:Ignore usuario, botao
import React, { useState, useEffect } from 'react'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from '@material-ui/core/styles'
/* ícones */
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
//import { SettingsSystemDaydreamOutlined } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme=> ({
    paper: {
        margin: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar:{
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    acessar: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(10)
    }
}))


export default function Login(){
    const history = useHistory() // redireciona a página
    const [email, setEmail] = useState('') 
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState(false)
    const [mensagemErro, setMensagemErro] = useState('')
    const [lembrarUsuario, setLembrarUsuario] = useState(false)
    const [botaoDesabilitado, setBotaoDesabilitado] = useState(true)

    useEffect(()=> {
        if(email.trim() && senha.trim()){
            setBotaoDesabilitado(false)
        } else{
            setBotaoDesabilitado(true)
        }
    },[email, senha])

    function alteraLembrar(){
        setLembrarUsuario(!lembrarUsuario)
    }

    function validaLogin(event){
        event.preventDefault() //evitar recarregar a tela
        if(email === process.env.REACT_APP_USER &&
           senha === process.env.REACT_APP_PASSWORD){
               localStorage.setItem("logado", btoa(email))
               history.push('/dashboard')
           } else {
               setErro(true)
               setMensagemErro('Usuário ou senha inválidos!')
           }
    }

    const classes = useStyles()
    return(
        <Container component="main" maxWidth="xs">
            <Paper elevation={2}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h2">
                        Área Reservada
                    </Typography>
                    <form onSubmit={validaLogin}>
                        <TextField
                            variant="outlined" 
                            fullWidth
                            required  
                            id="email"
                            label="Endereço de e-mail" 
                            autoComplete="email"
                            autoFocus 
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            error={erro}
                            margin="normal"
                            />
                            <TextField
                             variant="outlined" 
                             fullWidth
                             required 
                             id="senha"
                             label="Senha" 
                             autoComplete="current-password"
                             value={senha}
                             onChange={e => setSenha(e.target.value)}
                             error={erro}
                             helperText={mensagemErro} 
                             type="password"
                             margin="normal"
                             />
                             <FormControlLabel
                               control={
                                   <Switch
                                    checked={lembrarUsuario}
                                    onChange={alteraLembrar}
                                    name="lembrar"
                                    disabled={false}
                                    />
                               }
                               label="Lembrar o usuário"
                               />
                               <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.acessar}
                                disabled={botaoDesabilitado}
                                > <LockOutlinedIcon/> Acessar</Button>
                    </form>
                </div>
            </Paper>
        </Container>
    )
}