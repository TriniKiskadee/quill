import { Pinecone } from "@pinecone-database/pinecone";

export const client = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
  environment: process.env.PINECONE_ENVIRONMENT!,
});
