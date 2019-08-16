import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import * as T from './types';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const CustomCard = (props: T.IProps) => {
  const classes = useStyles(props);
  return (
    <div style={{ marginTop: 20, padding: 30, maxWidth: 400 }}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Welcome
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Welcome to the {props.whichPage}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}