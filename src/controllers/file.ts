import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { AWS_CONFIGURATION } from '../config/constants';

// configure AWS S3
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: AWS_CONFIGURATION.AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_CONFIGURATION.AWS_SECRET_ACCESS_KEY
});


interface MulterRequest extends Request {
  files: any;
}

export const uploadImage = async (req: Request, res: Response) => {
    const files  = (req as MulterRequest).files;
    const params = {
        Bucket: AWS_CONFIGURATION.AWS_S3_BUCKET_NAME, 
        Key: files.file.name,
        Body: JSON.stringify(files.file.data, null, 2)
    };
    s3.upload(params, function(s3Err: any, data: any) {
        if (s3Err) {
          return res
            .status(HttpStatus.BAD_REQUEST)
            .json({ message: "Can not upload image. Please try again." });
        }
        console.log(`File uploaded successfully at ${data.Location}`)
        return res.json({ message: "Image uploaded successfully!"});
    });
};