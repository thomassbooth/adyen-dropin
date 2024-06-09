import { Client, Types } from '@adyen/api-library';

//grab our env variables we want
const { ADYEN_API_KEY, NEXT_PUBLIC_ENVIRONMENT } = process.env;

const config = {
    apiKey: ADYEN_API_KEY,
    environment: NEXT_PUBLIC_ENVIRONMENT, // Change to 'LIVE' for production
  };

//checks the global values if s3 exists if it doesnt then makes a new client
const client =
  globalThis.AdyenClient ||
  new Client(config);

if (process.env.NODE_ENV !== "production") globalThis.AdyenClient = client;

export default client;
