export default async function handler(req, res) {
    if (req.query.secret !== process.env.REVALIDATION_SECRET) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  
    try {
      await res.revalidate('/your-page-path');
      return res.json({ revalidated: true });
    } catch (err) {
      return res.status(500).send('Error revalidating');
    }
  }