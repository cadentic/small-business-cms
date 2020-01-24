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
import StepOne from "./Steps/Step1";
import StepTwo from "./Steps/Step2";
import StepThree from "./Steps/Step3";
import StepFour from "./Steps/Step4";

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

const FormThree = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, changeModel] = React.useState([
    { model: {}, valid: false },
    { model: {}, valid: false },
    { model: {}, valid: false },
    { model: {}, valid: false }
  ]);

  const handleChanges = model => {
    changeModel(
      steps.map((step, index) => {
        if (index !== activeStep) {
          return step;
        }
        return { ...step, model: { ...step.model, ...model } };
      })
    );
  };

  const handleValidation = valid => {
    changeModel(
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
        title="Business Registration Form"
        content="Please fill the form below to register your business"
      />
      <Container className={classes.container} maxWidth="md">
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step>
            <StepLabel>Login Info</StepLabel>
            <StepContent>
              <StepOne
                model={steps[activeStep].model}
                validStep={steps[activeStep].valid}
                activeStep={activeStep}
                changeModel={model => handleChanges(model)}
                validateStep={valid => handleValidation(valid)}
              />
              <Button
                disabled
                onClick={() => setActiveStep(0)}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                disabled={!steps[activeStep].valid}
                variant="contained"
                color="primary"
                onClick={() => setActiveStep(1)}
                className={classes.button}
              >
                Next
              </Button>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Contact Info</StepLabel>
            <StepContent>
              <StepTwo
                model={steps[activeStep].model}
                validStep={steps[activeStep].valid}
                activeStep={activeStep}
                changeModel={model => handleChanges(model)}
                validateStep={valid => handleValidation(valid)}
              />
              <Button
                onClick={() => setActiveStep(0)}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                disabled={!steps[activeStep].valid}
                color="primary"
                onClick={() => setActiveStep(2)}
                className={classes.button}
              >
                Next
              </Button>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>SMS Validation</StepLabel>
            <StepContent>
              <StepThree
                model={steps[activeStep].model}
                validStep={steps[activeStep].valid}
                activeStep={activeStep}
                changeModel={model => handleChanges(model)}
                validateStep={valid => handleValidation(valid)}
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
            <StepLabel>Terms, Conditions &amp; signature</StepLabel>
            <StepContent>
              <StepFour
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
                    changeModel([
                      { model: {}, valid: false },
                      { model: {}, valid: false },
                      { model: {}, valid: false },
                      { model: {}, valid: false }
                    ]);
                    setActiveStep(0);
                  }}
                >
                  Complete Signup
                </Button>
              )}
            </StepContent>
          </Step>
        </Stepper>
      </Container>
    </>
  );
};

export default FormThree;

if (document.getElementById('formthree')) {
  ReactDOM.render( < FormThree /> , document.getElementById('formthree'));
}