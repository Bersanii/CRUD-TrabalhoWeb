import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 500,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/2582932/pexels-photo-2582932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Seja Bem Vindo!"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            HardTech
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           A empresa Hardtech é especializada em vendas de componentes eletrônicos, temos os melhores hardwares do mercado e tudo pelo melhor preço!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Compartilhar
        </Button>
        <Button size="small" color="primary">
          Saiba Mais
        </Button>
      </CardActions>
    </Card>
  );
}
