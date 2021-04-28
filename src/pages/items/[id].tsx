import { GetServerSideProps, NextPage } from 'next';
import { Container, makeStyles } from '@material-ui/core';
import ItemComponent from '../../components/ItemComponent';
import Item from '../../item';
import DUMMY_ITEMS from '../../data';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

type ItemPageProps = {
  item: Item;
};

const ItemPage: NextPage<ItemPageProps> = ({ item }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <ItemComponent item={item} />
    </Container>
  );
};

export default ItemPage;

export const getServerSideProps: GetServerSideProps<
  ItemPageProps,
  { id: string }
> = async context => {
  const { params } = context;
  if (params) {
    const { id } = params;
    const item = DUMMY_ITEMS.find(i => i.id === id);
    if (item) {
      return {
        props: {
          item
        }
      };
    }
  }

  return {
    notFound: true
  };
};
