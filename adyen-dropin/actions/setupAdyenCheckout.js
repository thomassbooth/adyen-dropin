import axios from "axios";
import AdyenCheckout from "@adyen/adyen-web";

export async function setupAdyenCheckout(router) {
  try {
    //setup our session
    const { data: session } = await axios.post("/api/paymentSession", {
      merchantAccount: "TslMediaECOM",
      amount: { currency: "EUR", value: 1000 },
      reference: "123456aaa",
    });

    //initialize the checkout using the data back from adyen session
    const configuration = {
      clientKey: "test_KFLL7FUZTVF5VPT55OQSGC5I2IOUAJPH", // Replace this with your Adyen client key
      locale: "en-US",
      environment: "test", // Change to 'live' for production
      session: session,
      onPaymentCompleted: (result, component) => {
        console.log("Payment completed:", result);
        router.push('/complete')
      },
      onError: (error, component) => {
        console.error("Error:", error);
      },
    };

    return await AdyenCheckout(configuration);
  } catch (error) {
    console.error("Error initializing Adyen Checkout:", error);
  }
}
