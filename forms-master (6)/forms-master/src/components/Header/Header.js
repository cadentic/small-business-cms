import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    height: 375
  },
  container: {
    marginTop: 24,
    padding: 0
  },
  logo: {
    marginBottom: 24
  },
  title: {
    marginBottom: 24
  },
  content: {
    marginBottom: 24
  }
}));

const Header = props => {
  const classes = useStyles();
  const { title, content } = props;

  return (
    <AppBar position="static" className={classes.root}>
      <Container className={classes.container} maxWidth="md">
        <Typography className={classes.logo} variant="h4">
          Company Logo
        </Typography>
        <Typography className={classes.title} variant="h3">
          {title}
        </Typography>
        <Typography className={classes.content} component="p">
          {content}
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Header;
