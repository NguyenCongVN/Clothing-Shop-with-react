import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceFromStripe = price * 100;
  const publishableKey =
    "pk_test_51HBF90LQXu2XsX9yZCZjZx0XT4vZj4ekZtNmtuONojzArSCsn8LDulBJNH2EuaNirZYcYUqMoKTwi56tu3ZecsTK00UuPeP15k";

  const onToken = () => {
    alert("Successfully");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing LTD."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}$`}
      amount={priceFromStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
