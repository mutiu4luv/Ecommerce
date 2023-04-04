import { StepLabel } from "@material-ui/core";
import { Paper, Step, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import useStyles from "./styles";
import { commerce } from "../../../lib/Commerce";
const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({ cart, order, onCaptureCheckOut, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        setCheckoutToken(token);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);

  // useEffect(() => {
  //   const checkoutToken = async () => {
  //     try {
  //       const token = await commerce.checkout.generateToken(cart.id, {
  //         type: "cart",
  //       });

  //       setCheckoutToken(token);
  //     } catch (error) {}
  //   };
  //   checkoutToken();
  // }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Confirmation = () => <div>confirmation</div>;

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        onCaptureCheckOut={onCaptureCheckOut}
        nextStep={nextStep}
      />
    );
  return (
    <>
      <div className={classes.toolbar} />

      <main className={classes.layout}>
        <Paper className={classes.Paper}>
          <Typography variant="h4" align="center">
            checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.Stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.lenght ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
