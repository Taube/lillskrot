
const filePath = path.join(__dirname, `./${doc.language}.json`);
fs.writeFileSync(filePath, JSON.stringify(translations, null, 2));

await uploadToS3(filePath, 'your-s3-bucket-name', `${doc.language}.json`);



