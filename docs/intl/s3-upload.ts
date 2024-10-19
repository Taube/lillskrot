import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';

// TODO: Replace 'your-region' with the AWS region you're using

const s3Client = new S3Client({ region: 'your-region' });

export const uploadToS3 = async (filePath: string, bucketName: string, key: string) => {
  const fileContent = fs.readFileSync(filePath);
  
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: fileContent,
    ContentType: 'application/json',
  });

  try {
    await s3Client.send(command);
    console.log(`File uploaded successfully to ${bucketName}/${key}`);
  } catch (err) {
    console.error('Error uploading file:', err);
  }
};