import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  smaller: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function ImageAvatars(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" className={classes[props.size] || classes.small}  />
      {/* <Avatar alt="Remy Sharp" className={classes.small} src="/static/images/avatar/1.jpg" /> */}
    </div>
  );
}