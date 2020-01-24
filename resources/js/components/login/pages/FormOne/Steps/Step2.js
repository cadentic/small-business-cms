import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { countries } from "../../../resources/json/countries";
import { postalCodes } from "../../../resources/json/postalCodes";

const useStyles = makeStyles(theme => ({
  root: {},
  select: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  }
}));

const StepTwo = props => {
  const { validateStep, model, changeModel, activeStep } = props;
  const classes = useStyles();

  useEffect(() => {
    if (activeStep !== 1) {
      return;
    }
    validateStep(
      model.firstName &&
        model.lastName &&
        model.street &&
        model.city &&
        model.postalCode &&
        model.country &&
        model.phoneCode &&
        model.phoneNumber &&
        model.phoneNumber.length === 10 &&
        new RegExp(model.postalCodeRegex).test(model.postalCode)
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    model.firstName,
    model.lastName,
    model.street,
    model.city,
    model.postalCode,
    model.country,
    model.phoneCode,
    model.phoneNumber
  ]);

  const handleChange = e => {
    changeModel({
      [e.target.name]: e.target.value
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          required
          type="text"
          label="First Name"
          value={model.firstName}
          name="firstName"
          margin="normal"
          variant="outlined"
          fullWidth
          error={!model.firstName && model.firstName !== undefined}
          onChange={e => handleChange(e)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          type="text"
          label="Last Name"
          value={model.lastName}
          name="lastName"
          margin="normal"
          variant="outlined"
          fullWidth
          error={!model.lastName && model.lastName !== undefined}
          onChange={e => handleChange(e)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          type="text"
          label="Street"
          value={model.street}
          name="street"
          margin="normal"
          variant="outlined"
          fullWidth
          error={!model.street && model.street !== undefined}
          onChange={e => handleChange(e)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          type="text"
          label="City"
          value={model.city}
          name="city"
          margin="normal"
          variant="outlined"
          fullWidth
          error={!model.city && model.city !== undefined}
          onChange={e => handleChange(e)}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl
          required
          fullWidth
          className={classes.select}
          error={!model.country && model.country !== undefined}
        >
          <InputLabel id="country">Country</InputLabel>
          <Select
            labelId="country"
            name="country"
            value={model.country}
            onChange={e => {
              changeModel({
                [e.target.name]: e.target.value,
                postalCodeRegex: e.currentTarget.attributes["data-regex"].value,
                phoneCode:
                  countries.findIndex(
                    country => country.name === e.target.value
                  ) !== -1
                    ? countries[
                        countries.findIndex(
                          country => country.name === e.target.value
                        )
                      ].dial_code
                    : model.phoneCode
              });
            }}
          >
            {postalCodes.map((code, index) => (
              <MenuItem
                key={index}
                value={code.Country}
                className={code.Regex}
                data-regex={code.Regex}
              >
                {code.Country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          disabled={!model.country}
          type="text"
          label="Postal Code"
          value={model.postalCode}
          name="postalCode"
          margin="normal"
          variant="outlined"
          fullWidth
          error={
            (!model.postalCode && model.postalCode !== undefined) ||
            (model.postalCode &&
              !new RegExp(model.postalCodeRegex).test(model.postalCode))
          }
          helperText={
            model.postalCode &&
            !new RegExp(model.postalCodeRegex).test(model.postalCode)
              ? "Wrong format"
              : ""
          }
          onChange={e => handleChange(e)}
        />
      </Grid>

      <Grid item xs={12}>
        <FormControl
          required
          className={classes.select}
          fullWidth
          error={!model.phoneCode && model.phoneCode !== undefined}
        >
          <InputLabel id="country">Dial Code</InputLabel>
          <Select
            native
            labelId="country"
            name="phoneCode"
            value={model.phoneCode || ""}
            onChange={e => handleChange(e)}
          >
            <option value="" disabled></option>
            {countries.map((country, index) => (
              <option value={country.dial_code}>
                {country.name} - {country.dial_code}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          type="number"
          label="Phone Number"
          value={model.phoneNumber}
          name="phoneNumber"
          margin="normal"
          variant="outlined"
          fullWidth
          error={
            (!model.phoneNumber && model.phoneNumber !== undefined) ||
            (model.phoneNumber && model.phoneNumber.length < 10)
          }
          helperText={
            model.phoneNumber && model.phoneNumber.length !== 10
              ? "Too short"
              : null
          }
          onChange={e => handleChange(e)}
        />
      </Grid>
    </Grid>
  );
};

export default StepTwo;
