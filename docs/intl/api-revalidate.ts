const revalidateURL = 'https://your-nextjs-app.com/api/revalidate';
await fetch(revalidateURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ secret: process.env.REVALIDATION_SECRET }),
});