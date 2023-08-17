import { ProductList } from '../../components';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: '16px',
  },
});

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProductList />
    </div>
  );
};
