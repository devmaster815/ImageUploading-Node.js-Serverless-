import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { AWS_CONFIGURATION } from '../config/constants';

var exifParser = require('exif-parser');
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
    // upload file to AWS S3 bucket.
    try {
      const files  = (req as MulterRequest).files;
      const params = {
          Bucket: AWS_CONFIGURATION.AWS_S3_BUCKET_NAME, 
          Key: files.file.name,
          Body: JSON.stringify(files.file.data, null, 2)
      };

      await s3.upload(params);

      // extract metadata from image
      var exifMetaDataParser = exifParser.create(files.file.data);
      var exifMetaData = exifMetaDataParser.parse();
      const metadataParams = {
          Bucket: AWS_CONFIGURATION.AWS_S3_BUCKET_NAME, 
          Key: 'latestUploadedImageMetadata.json',
          Body: JSON.stringify(exifMetaData, null, 2)
      };
      await s3.upload(metadataParams);

      return res.json({ message: "Image uploaded successfully!"});
    } catch(err) {
      return res
              .status(HttpStatus.BAD_REQUEST)
              .json({ message: "Can not upload image. Please try again." });
    }
    
};