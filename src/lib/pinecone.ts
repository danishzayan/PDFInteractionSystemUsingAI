// import { PineconeClient } from '@pinecone-database/pinecone'

// export const getPineconeClient = async () => {
//   const client = new PineconeClient()

//   await client.init({
//     apiKey: process.env.PINECONE_API_KEY!,
//     environment: 'us-east-1',
//   })

//   return client
// }


import { PineconeClient, PineconeConfiguration } from '@pinecone-database/pinecone';
export const getPineconeClient = async () => {
  const apiKey = process.env.PINECONE_API_KEY!;
  const indexHost = process.env.INDEX_HOST!;

  // Construct the PineconeConfiguration with the correct properties
  const config: PineconeConfiguration = {
    apiKey,
    endpoint: `https://${indexHost}`, // Use 'endpoint' or another supported property
    environment: 'us-east-1', // This should match your serverless deployment region
  };

  // Create a new PineconeClient instance with the specified configuration
  const client = new PineconeClient();

  // Initialize the client with the configuration
  await client.init(config);
  return client;
};









// import { PineconeClient, PineconeConfiguration } from '@pinecone-database/pinecone';

// export const getPineconeClient = async () => {
//   const apiKey = process.env.PINECONE_API_KEY!;
//   const indexHost = process.env.INDEX_HOST!;

//   // Construct the PineconeConfiguration with the correct properties
//   const config: PineconeConfiguration = {
//     apiKey: apiKey,
//     endpoint: `https://${indexHost}`, // Ensure indexHost is a valid string
//     environment: 'us-east-1', // This should match your serverless deployment region
//   };

//   // Create a new PineconeClient instance with the specified configuration
//   const client = new PineconeClient();

//   // Initialize the client with the configuration
//   await client.init(config);

//   // Define parameters for creating the serverless index
//   const indexName = 'serverless-index';
//   const dimension = 1536;
//   const metric = 'cosine';
//   const serverlessSpec = {
//     cloud: 'aws',
//     region: 'us-east-1'
//   };

//   // Create the serverless index using the PineconeClient
//   await client.createIndex({
//     name: indexName,
//     dimension: dimension,
//     metric: metric,
//     spec: {
//       serverless: serverlessSpec
//     }
//   });

//   return client;
// };

