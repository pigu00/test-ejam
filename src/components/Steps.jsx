import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckIcon from '@mui/icons-material/Check'; 
import { green } from '@mui/material/colors'; 

const steps = [
  'Step 1 : Cart Review',
  'Step 2 : Checkout',
  'Step 3 : Special Offer',
  'Step 4 : Confirmation'
];

export const Steps = () => {
  const [activeStep, setActiveStep] = React.useState(2);

  const handleStepChange = (step) => { 
    setActiveStep(step);
  };

  return (
    <div>
      <h2 className="text-center">Wait! Your order is in progress.</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, deserunt?</p>
      <Box className="stepper" sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} onClick={() => handleStepChange(index)} completed={index < activeStep}>
              <StepLabel
                StepIconComponent={({ completed }) => (
                  <CheckIcon style={{ color: completed ? 'white' : 'inherit', backgroundColor: completed ? green[500] : 'inherit', borderRadius: '50%', padding: '6px' }} />
                )}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
};
