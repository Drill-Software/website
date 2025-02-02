import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let client; // Global variable to hold the client connection

export async function connectToDatabase() {
  if (client) return client; // Return existing connection if already connected

  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  return client;
}

// Optionally, you might want to export functions to close the connection if necessary
export async function closeDatabaseConnection() {
  if (client) {
    await client.close();
    client = null;
  }
}