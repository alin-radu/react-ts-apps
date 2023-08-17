import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import { Product } from '../../data-models';

export interface ProductCardProps {
  product: Product;
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
});

export const ProductCard = ({ product }: ProductCardProps) => {
  const { title, description } = product;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() =>
            console.log(
              '%c-> developmentConsole: Added to Cart===> ',
              'color:#77dcfd'
            )
          }
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};
