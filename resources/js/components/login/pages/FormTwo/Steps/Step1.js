import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FileUpload from "../../../components/FileUpload/FileUpload";

const Step1 = props => {
  const { validateStep, model, changeModel } = props;

  useEffect(() => {
    validateStep(Boolean(model.name && model.description));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model.name, model.description]);

  const handleChange = async e => {
    await changeModel({
      [e.target.name]: e.target.value
    });
    console.log("STEP 1 - Handle Change", model);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          required
          label="Project Name"
          value={model.name}
          name="name"
          margin="normal"
          variant="outlined"
          error={!model.name && model.name !== undefined}
          fullWidth
          onChange={e => handleChange(e)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          label="Project description"
          value={model.description}
          name="description"
          margin="normal"
          variant="outlined"
          multiline
          fullWidth
          rows="5"
          error={!model.description && model.description !== undefined}
          onChange={e => handleChange(e)}
        />
      </Grid>
      <Grid item xs={12}>
        <FileUpload changeModel={data => {}} />
      </Grid>
    </Grid>
  );
};

export default Step1;
