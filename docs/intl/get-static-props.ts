export async function getStaticProps() {
    const res = await fetch('https://your-s3-bucket-url/en.json');
    const dictionary = await res.json();
  
    return {
      props: { dictionary },
      revalidate: 60, // Revalidate every minute or set it dynamically based on webhooks
    };
  }