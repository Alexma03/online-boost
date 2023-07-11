import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function saveContact(name, email, message) {
    console.log('Saving contact:', { name, email, message });
    try {
      await client.connect();
      const db = client.db('online-boost');
      const contactsCollection = db.collection('contacts');
  
      const result = await contactsCollection.insertOne({
        name,
        email,
        message,
        createdAt: new Date(),
      });
  
      console.log('Contact saved in database:', result);
      return result.insertedId;
    } catch (error) {
      console.error('Error saving contact:', error);
      throw error;
    } finally {
      await client.close();
    }
  }