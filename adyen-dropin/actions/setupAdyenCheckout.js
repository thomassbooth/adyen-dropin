import axios from "axios";
import AdyenCheckout from "@adyen/adyen-web";


export async function setupAdyenCheckout(router, amount, emptyCart, additionalConfig = {}) {
  try {
    //setup our session
    const paymentRef = crypto.randomUUID();

    //client call to the server to handle setting up the payment session with Adyen
    const { data: session } = await axios.post("/api/paymentSession", {
      //replace the decimal to set to minor units (find in documentation for correct minor units for each currency)
      amount: { currency: "USD", value: amount.replace('.', '') },
      reference: paymentRef,
    });

    //initialize the checkout using the data back from adyen session
    const configuration = {
      clientKey: 'test_KFLL7FUZTVF5VPT55OQSGC5I2IOUAJPH', // Replace this with your Adyen client key
      locale: "en-US",
      environment: 'test', // Change to 'live' for production
      session: session,
      onPaymentCompleted: (result, component) => {
        console.log("Payment completed:", result);
        router.push(`/payment/complete?paymentRef=${paymentRef}`)
        emptyCart()
      },
      onError: (error, component) => {
        console.log("Payment error", error)
        router.push(`/payment/rejection?paymentRef=${paymentRef}`)
      },
      ...additionalConfig
    };

    return await AdyenCheckout(configuration);
  } catch (error) {
    console.error("Error initializing Adyen Checkout:", error);
  }
}
