import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import AccessTime from "@material-ui/icons/AccessTime";
import GpsFixed from "@material-ui/icons/GpsFixed";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { currencies } from "../../../resources/json/currencies";
const useStyles = makeStyles(theme => ({
  root: {},
  active: {
    border: "1px solid #3495eb"
  },
  card: {
    display: "flex",
    alignItems: "center"
  },
  iconContainer: {
    paddingRight: theme.spacing(1)
  }
}));

const Step3 = props => {
  const { validateStep, model, changeModel, activeStep } = props;
  const classes = useStyles();
  const logicalBudget =
    Number(model.minimumBudget) <= Number(model.maximumBudget);

  useEffect(() => {
    if (activeStep !== 2) {
      return;
    }

    validateStep(
      (model.currency && (model.pricingModel === "fixed" && logicalBudget)) ||
        (model.pricingModel === "hour" && model.pricePerHour)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model]);

  const handleChange = e => {
    changeModel({
      [e.target.name]: e.target.value
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography>How do you want to pay</Typography>
      </Grid>
      <Grid item xs={6}>
        <Card
          className={`${model.pricingModel === "fixed" ? classes.active : ""}`}
        >
          <CardActionArea
            onClick={() => {
              changeModel({
                pricingModel: "fixed"
              });
            }}
          >
            <CardContent className={classes.card}>
              <Box className={classes.iconContainer}>
                <GpsFixed fontSize="large" />
              </Box>
              <Box>
                <Typography gutterBottom variant="h6" component="h2">
                  Pay Fixed Price
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Agree on a price and release payment when the job is done.
                  Best for one-off tasks.
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card
          className={`${model.pricingModel === "hour" ? classes.active : ""}`}
        >
          <CardActionArea
            onClick={() => {
              changeModel({
                pricingModel: "hour"
              });
            }}
          >
            <CardContent className={classes.card}>
              <Box className={classes.iconContainer}>
                <AccessTime fontSize="large" />
              </Box>
              <Box>
                <Typography gutterBottom variant="h6" component="h2">
                  Pay by the hour
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Hire based on a hourly rateand pay for hours billed. Best for
                  ongoing work.
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {model.pricingModel === "fixed" && (
        <>
          <Grid item xs={6}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="currency"
                value={model.currency}
                onChange={handleChange}
              >
                {Object.keys(currencies).map((coin, index) => {
                  return (
                    <MenuItem key={index} value={currencies[coin]}>
                      {currencies[coin].code} - {currencies[coin].name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <TextField
              required
              type="number"
              label="Minimum Budget"
              value={model.minimumBudget}
              name="minimumBudget"
              margin="normal"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {`${model.currency ? model.currency.symbol_native : ""}`}
                  </InputAdornment>
                )
              }}
              error={!model.minimumBudget && model.minimumBudget !== undefined}
              onChange={e => handleChange(e)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              type="number"
              disabled={!model.minimumBudget}
              label="Maximum Budget"
              value={model.maximumBudget}
              name="maximumBudget"
              margin="normal"
              variant="outlined"
              fullWidth
              error={model.maximumBudget && !logicalBudget}
              helperText={
                model.maximumBudget && !logicalBudget
                  ? "Maximum Budget must be higher than minimum Budget"
                  : null
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {`${model.currency ? model.currency.symbol_native : ""}`}
                  </InputAdornment>
                )
              }}
              onChange={e => handleChange(e)}
            />
          </Grid>
        </>
      )}
      {model.pricingModel === "hour" && (
        <>
          <Grid item xs={6}>
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="currency"
                value={model.currency}
                onChange={handleChange}
              >
                {Object.keys(currencies).map((coin, index) => {
                  return (
                    <MenuItem key={index} value={currencies[coin]}>
                      {currencies[coin].code} - {currencies[coin].name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <TextField
              required
              type="number"
              label="Price per Hour"
              value={model.pricePerHour}
              name="pricePerHour"
              margin="normal"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {`${model.currency ? model.currency.symbol_native : ""}`}
                  </InputAdornment>
                )
              }}
              error={!model.pricePerHour && model.pricePerHour !== undefined}
              onChange={e => handleChange(e)}
            />
          </Grid>
        </>
      )}

      <Grid item xs={6}></Grid>
    </Grid>
  );
};

export default Step3;
