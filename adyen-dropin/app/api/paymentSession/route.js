// app/api/paymentSession/route.js

import AdyenClient from '@/lib/adyen-client';
import { CheckoutAPI } from '@adyen/api-library';

export async function POST(req) {
  try {

    const { merchantAccount, amount, reference } = await req.json();

    console.log('merchantAccount', merchantAccount)
    console.log('amount', amount)
    console.log('reference', reference )
    const checkout = new CheckoutAPI(AdyenClient);
    const response = await checkout.PaymentsApi.sessions({
      merchantAccount: 'TslMediaECOM',
      amount: {
        value: 1000,
        currency: "EUR"
      },
      reference: '123456aaasd12aa',
      returnUrl: 'http://localhost:3000/complete',
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
