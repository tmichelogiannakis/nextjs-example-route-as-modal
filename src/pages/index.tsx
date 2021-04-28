import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  Container,
  Dialog,
  DialogContent,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import ItemComponent from '../components/ItemComponent';
import Item from '../item';
import DUMMY_ITEMS from '../data';
import { useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  listItem: {
    color: 'inherit',
    textDecoration: 'none'
  }
}));

type IndexPageProps = {
  items: Partial<Item>[];
};

const IndexPage: NextPage<IndexPageProps> = ({ items }) => {
  const classes = useStyles();
  const router = useRouter();
  const [item, setItem] = useState<Item | undefined>();

  const handleClose = () => {
    router.replace('/');
  };

  const handleExited = () => {
    setItem(undefined);
  };

  const fetchItem = async (id: string) => {
    const response = await fetch(`/api/items/${id}`);
    const data = await response.json();
    setItem(data);
  };

  useEffect(() => {
    const itemId = router.query.itemId as string;
    if (itemId) {
      fetchItem(itemId);
    }
  }, [router.query.itemId]);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box textAlign="center">
        <List className={classes.root} component="div">
          {items.map(item => (
            <Link
              key={item.id}
              href={`/?itemId=${item.id}`}
              as={`items/${item.id}`}
            >
              <ListItem
                component="a"
                href={`items/${item.id}`}
                className={classes.listItem}
              >
                <ListItemAvatar>
                  <Avatar>
                    <img src={item.icon} alt={item.name} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={item.createdOn} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>

      {item && (
        <Dialog
          open={!!router.query.itemId}
          onClose={handleClose}
          onExited={handleExited}
        >
          <DialogContent>
            <ItemComponent item={item} />
          </DialogContent>
        </Dialog>
      )}
    </Container>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => {
  const items = DUMMY_ITEMS.map(({ id, name, icon, createdOn }) => ({
    id,
    name,
    icon,
    createdOn
  }));

  return {
    props: {
      items
    }
  };
};
