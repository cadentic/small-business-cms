import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { skills } from "../../../resources/json/skills";

const useStyles = makeStyles({
  root: {},
  suggested: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
const Step2 = props => {
  const { validateStep, model, changeModel } = props;
  const classes = useStyles();
  useEffect(() => {
    validateStep(model.skills.length > 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model.skills.length]);

  const addSkill = skill => {
    changeModel({
      skills: model.skills.concat(skill)
    });
    console.log("STEP 1 - Handle Change", model);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Autocomplete
          multiple
          options={skills}
          name="skills"
          getOptionLabel={option => option.name}
          filterSelectedOptions
          value={model.skills}
          onChange={(e, value) => {
            changeModel({
              skills: value
            });
          }}
          renderInput={params => (
            <TextField
              {...params}
              required
              variant="outlined"
              label="Desired Skills"
              margin="normal"
              name="skill"
              fullWidth
            />
          )}
        />
        {skills.filter(skill => {
          return (
            skill.popular &&
            model.skills.findIndex(choice => choice.name === skill.name) === -1
          );
        }).length > 0 && (
          <Box className={classes.suggested}>
            <Typography>Popular Skills:</Typography>
            {skills
              .filter(skill => {
                return (
                  skill.popular &&
                  model.skills.findIndex(
                    choice => choice.name === skill.name
                  ) === -1
                );
              })
              .map((skill, index) => {
                if (index < 4) {
                  return (
                    <Button
                      key={index}
                      color="primary"
                      className={classes.button}
                      onClick={() => addSkill(skill)}
                    >
                      {skill.name}
                    </Button>
                  );
                }
                return null;
              })}
          </Box>
        )}
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Step2;
