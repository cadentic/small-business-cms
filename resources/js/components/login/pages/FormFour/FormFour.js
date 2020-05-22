import React from "react";
import ReactDOM from 'react-dom';
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header/Header";
import Container from "@material-ui/core/Container";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

const useStyles = makeStyles(theme => ({
  root: {},
  container: {
    background: "#FFFFFF",
    minHeight: "100vh",
    position: "absolute",
    top: 234,
    left: "50%",
    transform: "translate(-50%, 0)",
    borderRadius: 2
  },
  finalSubmission: {
    background: "#FCD10E"
  }
}));

const FormFour = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, changeModel] = React.useState([
    { model: { skills: [] }, valid: false },
    { model: { skills: [] }, valid: false },
    { model: { skills: [] }, valid: false },
    { model: { skills: [] }, valid: false }
  ]);

  const handleChanges = async model => {
    await changeModel(
      steps.map((step, index) => {
        if (index !== activeStep) {
          return step;
        }
        return { ...step, model: { ...step.model, ...model } };
      })
    );
  };

  const handleValidation = async valid => {
    await changeModel(
      steps.map((step, index) => {
        if (index !== activeStep) {
          return step;
        }
        return { ...step, valid };
      })
    );
  };

  return (
    <>
      <Header
        title="Post a project"
        content="Describe your project, and find suitable professionals for your needs"
      />
      <Container className={classes.container} maxWidth="md">
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step>
            <StepLabel>Project Description</StepLabel>
            <StepContent>
              <Step1
                model={steps[activeStep].model}
                validStep={steps[activeStep].valid}
                changeModel={model => handleChanges(model)}
                activeStep={activeStep}
                validateStep={valid => handleValidation(valid)}
              />
              <Button disabled onClick={() => {}} className={classes.button}>
                Back
              </Button>
              <Button
                disabled={!steps[activeStep].valid}
                variant="contained"
                color="primary"
                onClick={async () => await setActiveStep(1)}
                className={classes.button}
              >
                Next
              </Button>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Skills Needed</StepLabel>
            <StepContent>
              <Step2
                model={steps[activeStep].model}
                validStep={steps[activeStep].valid}
                changeModel={model => handleChanges(model)}
                validateStep={valid => handleValidation(valid)}
                activeStep={activeStep}
              />
              <Button
                onClick={async () => await setActiveStep(0)}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                disabled={!steps[activeStep].valid}
                color="primary"
                onClick={async () => await setActiveStep(2)}
                className={classes.button}
              >
                Next
              </Button>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Working model</StepLabel>
            <StepContent>
              <Step3
                model={steps[activeStep].model}
                validStep={steps[activeStep].valid}
                changeModel={model => handleChanges(model)}
                validateStep={valid => handleValidation(valid)}
                activeStep={activeStep}
              />
              <Button
                onClick={() => setActiveStep(1)}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                disabled={!steps[activeStep].valid}
                variant="contained"
                color="primary"
                onClick={() => setActiveStep(3)}
                className={classes.button}
              >
                Next
              </Button>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Verification and submission</StepLabel>
            <StepContent>
              <Step4
                steps={steps}
                model={steps[activeStep].model}
                validStep={steps[activeStep].valid}
                changeModel={model => handleChanges(model)}
                validateStep={valid => handleValidation(valid)}
                activeStep={activeStep}
              />
              <Button
                onClick={() => setActiveStep(2)}
                className={classes.button}
              >
                Back
              </Button>
              {steps[activeStep].model.signature && (
                <Button
                  variant="contained"
                  className={classes.finalSubmission}
                  onClick={() => {
                    console.log(steps[0].model.files);
                    let data = {
                      'name': steps[0].model.name,
                      'description': steps[0].model.description,
                      'skills': steps[1].model.skills,
                      'currency': steps[2].model.currency.name,
                      'minimumBudget': steps[2].model.minimumBudget,
                      'maximumBudget': steps[2].model.maximumBudget,
                      'pricePerHour': steps[2].model.pricePerHour,
                      'signature': steps[3].model.signature
                    };
                    axios.post('/employeeproject', data).then(changeModel([
                      { model: { skills: [] }, valid: false },
                      { model: { skills: [] }, valid: false },
                      { model: { skills: [] }, valid: false },
                      { model: { skills: [] }, valid: false }
                    ]));
                    setActiveStep(0);
                  }}
                >
                  Post Project
                </Button>
              )}
            </StepContent>
          </Step>
        </Stepper>
      </Container>
    </>
  );
};

export default FormTwo;

if (document.getElementById('formfour')) {
  ReactDOM.render( < FormFour /> , document.getElementById('formfour'));
}
