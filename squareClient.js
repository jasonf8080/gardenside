import dotenv from 'dotenv';
dotenv.config();
import square from 'square';

import { Client } from 'square/legacy';
 console.log('MY IDENTIFICATION:', process.env.SQUARE_ACCESS_TOKEN)

const Environment = {
  Sandbox: 'sandbox',
  Production: 'production',
};

const squareClient = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

export default squareClient;

// // Test the connection
// (async () => {
//   try {
//     const { customersApi } = squareClient;
//     const response = await customersApi.listCustomers();
//     console.log('✅ Square is working! Found customers:', response.result.customers);
//   } catch (error) {
//     console.error('❌ Square API error:', error);
//   }
// })();
