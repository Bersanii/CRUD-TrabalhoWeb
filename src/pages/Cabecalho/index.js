// cSpell:Ignore Cabecalho, secoes, servicos, secao
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ApartmentIcon from '@material-ui/icons/Apartment'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Link  from '@material-ui/core/Link'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme)=> ({
    toolbarTitle: {
        flex: 1
    },
    toolbarSecundaria:{
        justifyContent: 'space-between'
    },
    toolbarLink: {
        padding: theme.spacing(1)
    }
}))

const Cabecalho = () => {
const titulo = 'HardTech'
const secoes = [
    {titulo: 'Produtos', url: '/produtos'},
    {titulo: 'Serviços', url: '/servicos'},
    {titulo: 'SAC', url: '/sac'},
    {titulo: 'FAQ', url: '/faq'},
    {titulo: 'Área reservada', url: '/login'},
]
const classes = useStyles()
const history = useHistory()
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <ApartmentIcon />
                    <Typography
                        component="h1"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        {titulo}
                    </Typography>
                    { localStorage.getItem("logado") !== btoa(process.env.REACT_APP_USER)
                    ? <Button variant="contained"
                            color="secondary"
                            size="small"
                            onClick={() => {
                                history.push('/login')
                            }}>
                                Login
                    </Button>
                    : <Button variant="contained"
                              color="primary"
                              size="small"
                              onClick={() => {
                                  localStorage.removeItem("logado")
                                  history.push('/login')
                              }}
                              >Logout </Button>
                    }
                </Toolbar>
            </AppBar>
            {localStorage.getItem("logado") !== btoa(process.env.REACT_APP_USER) &&
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecundaria}>
                {secoes.map((secao) => (
                    <Link
                    color="secondary"
                    variant="body2"
                    noWrap
                    key={secao.titulo}
                    href={secao.url}
                    className={classes.toolbarLink}
                    >
                        {secao.titulo}
                    </Link>
                ))}
            </Toolbar>
           }
        </>
    )
}

export default Cabecalho