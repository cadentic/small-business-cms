import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SignatureCanvas from "react-signature-canvas";
import ComputerIcon from "@material-ui/icons/Computer";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  root: {},
  signature: {
    border: "1px solid #000000",
    borderRadius: 3,
    width: "100%",
    height: 200
  },
  card: {
    display: "flex",
    alignItems: "center"
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid #bec2c4",
    marginRight: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  skills: {
    marginTop: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  reset: {
    marginBottom: theme.spacing(1)
  }
}));

const Step4 = props => {
  const { validateStep, model, changeModel, activeStep, steps } = props;
  const [canvas, setCanvas] = React.useState(null);
  const classes = useStyles();
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
        <Card>
          <CardActionArea
            onClick={() => {
              changeModel({
                pricingModel: "fixed"
              });
            }}
          >
            <CardContent className={classes.card}>
              <Box className={classes.iconContainer}>
                <ComputerIcon fontSize="large" />
                <Typography component="p">Project</Typography>
                <Typography component="p">
                  {steps[2].model.currency &&
                  steps[2].model.pricingModel === "fixed"
                    ? `${steps[2].model.currency.symbol_native} ${steps[2].model.minimumBudget} - ${steps[2].model.currency.symbol_native} ${steps[2].model.maximumBudget}`
                    : `${
                        steps[2].model.currency
                          ? steps[2].model.currency.symbol_native
                          : ""
                      } ${steps[2].model.pricePerHour}/h`}
                </Typography>
              </Box>
              <Box>
                <Typography gutterBottom variant="h6" component="h2">
                  {steps[0].model.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {steps[0].model.description}
                </Typography>
                <Box className={classes.skills}>
                  {steps[1].model.skills.map((skill, item) => (
                    <Chip label={skill.name} variant="outlined" />
                  ))}
                </Box>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12}>
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
      </Grid>
    </Grid>
  );
};

export default Step4;
