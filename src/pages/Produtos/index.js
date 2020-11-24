import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';

import DeleteIcon from '@material-ui/icons/DeleteForeverTwoTone'
import EditIcon from '@material-ui/icons/EditTwoTone'
import SaveIcon from '@material-ui/icons/Save'

const useStyles = makeStyles(theme => ({
    select:{
        marginBottom: theme.spacing(2),
    },
    botao: {
        marginTop: theme.spacing(2),
    },
    
  }))

  
export default function Produtos() {
    const classes = useStyles()
    const valorInicial = { id: '', nome: '', preco: '', qntd: '', desc: ''}
    const [produto, setProduto] = useState(valorInicial)
    const [produtos, setProdutos] = useState([])
    const [editando, setEditando] = useState(false)
    
    useEffect(() => {
        setProdutos(JSON.parse(localStorage.getItem("produtos")) || [])
    }, []);

    useEffect(() => {
        function salvaDados() {
            localStorage.setItem("produtos", JSON.stringify(produtos))
            console.log("Salvei no local storage")
        }
        salvaDados()
    }, [produtos]);
    
    const mudaAtributo = event => {
        const { name, value } = event.target
        setProduto({ ...produto, [name]: value })
    }

    function salvaRegistro(event) {
        event.preventDefault()//Não recarrega o formulário
        if (editando) {
            apagaRegistro(produto.id)
        }
        setProduto({ id: produto.id, nome: produto.tipo, preco: produto.preco, qntd: produto.qntd, desc: produto.desc })
        setProdutos([...produtos, produto])
        setProduto(valorInicial) //limpa os campos
        setEditando(false)
    }

    const apagaRegistro = id => {       
        let index = produtos.map((produto) => produto.id).indexOf(id);
        if (index > -1) {
            produtos.splice(index, 1) //o 1o parâmetro é o índice do array e o segundo o número de itens que serão removidos
            setProdutos(produtos.filter(produto => produto.id !== id))
        }
    }
    
    
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form onSubmit={salvaRegistro}>
                    <Typography
                            component="h1"
                            align="center"
                        >Cadastro de Produtos </Typography>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="number"
                        id="id"
                        label="Código"
                        name="id"
                        autoFocus
                        value={produto.id}
                        disabled={editando}
                        onChange={mudaAtributo}/>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="nome"
                        label="Nome"
                        name="nome"
                        value={produto.nome}
                        onChange={mudaAtributo}/>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="preco"
                                label="Preço"
                                name="preco"
                                value={produto.preco}
                                onChange={mudaAtributo}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            }}/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="qntd"
                                label="Quantidade"
                                name="qntd"
                                value={produto.qntd}
                                onChange={mudaAtributo}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">UN</InputAdornment>,
                            }}/>
                        </Grid>
                    </Grid>
                            
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        multiline
                        rows={10}
                        id="desc"
                        label="Descrição"
                        name="desc"
                        value={produto.desc}
                        onChange={mudaAtributo}/>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.botao}>

                            <SaveIcon /> Salvar
                        </Button>


                    </form>
                </Grid>

                <Grid item xs={12} md={6}>
                    
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Código</TableCell>
                                    <TableCell>Nome</TableCell>
                                    <TableCell>Preço</TableCell>
                                    <TableCell>Quantidade</TableCell>
                                    <TableCell>Descrição</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {produtos.map((p) => (
                                    <TableRow key={p.id}>
                                        <TableCell>{p.id}</TableCell>
                                        <TableCell>{p.nome}</TableCell>
                                        <TableCell>R$ {p.preco}</TableCell>
                                        <TableCell>{p.qntd}</TableCell>
                                        <TableCell>{p.desc}</TableCell>
                                        <TableCell>
                                            <Button startIcon={<DeleteIcon />}
                                                onClick={() => apagaRegistro(p.id)}
                                                variant="outlined" color="secondary">Apagar</Button>
                                            <Button startIcon={<EditIcon />}
                                                onClick={() => {
                                                    setProduto(p)
                                                    setEditando(true)
                                                }}
                                                variant="outlined" color="primary">Editar</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {produtos.length === 0 &&
                                <Typography 
                                    component="h3"
                                    align="center">Não existe nenhum produto cadastrado!</Typography>
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
            </Grid>
        </div>
    )
}