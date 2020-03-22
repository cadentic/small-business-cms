import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));

export default props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.files.map((file, i) => (
        <Chip label={file.fileName} onDelete={() => props.removeFile(i)} />
      ))}
    </div>
  );
};
