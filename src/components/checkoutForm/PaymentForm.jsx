import { Button, Divider, Typography } from "@material-ui/core";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Review from "./Review";

const PaymentForm = ({
  checkoutToken,
  backStep,
  onCaptureCheckOut,
  nextStep,
  shippingData,
}) => {
  const stripPromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) {
      console.log(error);
    } else {
      console.log("ship", shippingData);
      const orderData = {
        line_items: checkoutToken?.live?.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastNmae,
          email: shippingData.email,
        },

        shipping: {
          name: "primary",
          street: shippingData.address1,
          town_city: shippingData.city,
          country_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      console.log("order", orderData);
      onCaptureCheckOut(checkoutToken.id, orderData);

      nextStep();
    }
  };
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment Method
      </Typography>
      <Elements stripe={stripPromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onClick={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br /> <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={backStep}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay {checkoutToken?.subtotal?.formatted_with_symbol}{" "}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
