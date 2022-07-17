import AWS from 'aws-sdk';

export const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKey = process.env.AWS_ACCESS_KEY;
const secretKey = process.env.AWS_SECRET_KEY;

export const s3 = new AWS.S3({
  region,
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
});
