import React from 'react';
import {
  Paper,
  CardContent,
  CardMedia,
  Typography,
  makeStyles
} from '@material-ui/core';
import Item from '../item';

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 640,
    margin: 'auto'
  },
  media: {
    height: 320
  }
}));

type ItemComponentProps = {
  item: Item;
};

const ItemComponent = ({ item }: ItemComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <CardMedia
        className={classes.media}
        image={item.photo}
        title={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {item.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.defails}
        </Typography>
      </CardContent>
    </Paper>
  );
};

export default ItemComponent;
