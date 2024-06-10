// app/api/paymentSession/route.js

import AdyenClient from '@/lib/adyen-client';
import { CheckoutAPI } from '@adyen/api-library';


const { ADYEN_MERCHANT_ACCOUNT } = process.env;
export async function POST(req) {
  try {

    const { merchantAccount, amount, reference } = await req.json();

    const checkout = new CheckoutAPI(AdyenClient);
    const response = await checkout.PaymentsApi.sessions({
      merchantAccount: ADYEN_MERCHANT_ACCOUNT,
      amount,
      reference: reference,
      returnUrl: 'http://localhost:3000/payment/checkout',
      countryCode: 'NL',
    });
    
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating payment session:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
