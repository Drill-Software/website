import { connectToDatabase } from '../../utils/db';
import { LogSnag } from '@logsnag/node';

export async function POST(request) {
  const body = await request.json();
  const { email } = body;
  if (!email) {
    return Response.json({ message: 'Email is required' }, { status: 400 });
  }
  try {
    const client = await connectToDatabase();
    const db = client.db('prod');
    const collection = db.collection('waitlist');
    await collection.insertOne({ email });

    const logsnag = new LogSnag({
        token: process.env.LOGSNAG,
        project: 'drill',
      })
    await logsnag.track({
      channel: 'waitlist',
      event: 'Waitlist - ' + email,
    });

    return Response.json({ message: 'Email added to waitlist successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to insert email:', error);
    return Response.json({ message: 'Failed to add email to waitlist' }, { status: 500 });
  }
}