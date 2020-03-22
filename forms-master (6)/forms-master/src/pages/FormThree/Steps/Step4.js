import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import SignatureCanvas from "react-signature-canvas";
import Button from "@material-ui/core/Button";
import Document from "../../../components/Document/Document";

const useStyles = makeStyles(theme => ({
  root: {},
  info: {
    padding: theme.spacing(1),
    textAlign: "center"
  },
  signature: {
    border: "1px solid #000000",
    borderRadius: 3,
    width: "100%",
    height: 200
  },
  reset: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    float: "right"
  },
  canvasDisabled: {
    opacity: 0.3,
    pointerEvents: "none"
  }
}));

const StepFour = props => {
  const { validateStep, model, changeModel, activeStep } = props;
  const classes = useStyles();
  const [canvas, setCanvas] = React.useState(null);

  useEffect(() => {
    if (activeStep !== 3) {
      return;
    }
    validateStep(model.signature);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model]);

  const handleChange = e => {
    changeModel({
      signature: canvas.toDataURL()
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.info}>
          <Typography component="p">
            By submitting this form with your signature, you agree with our{" "}
            <Link href="#" target="_blank">
              Terms &amp; Conditions
            </Link>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Document
          scrollEnd={() => {
            if (!model.terms) {
              changeModel({
                terms: true
              });
            }
          }}
        />
        <Link
          href="../../../resources/documents/terms.pdf"
          download
          className={classes.reset}
        >
          Download
        </Link>
      </Grid>
      <Grid item xs={12}>
        {model.terms && (
          <>
            <SignatureCanvas
              ref={ref => {
                setCanvas(ref);
              }}
              canvasProps={{
                className: `${classes.signature}`
              }}
              onEnd={() => {
                handleChange();
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.reset}
              onClick={() => {
                canvas.clear();
                changeModel({ signature: null });
              }}
            >
              Reset Signature
            </Button>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default StepFour;
