import { UploadedFile } from "express-fileupload";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuid } from "uuid";
import { awsRegion, awsBucket } from "./../utils/env";

const s3Client = new S3Client({ region: awsRegion || "eu-west-3" });

export const saveFile = async (file: UploadedFile) => {
  const key = `files/${uuid()}`;

  await s3Client.send(
    new PutObjectCommand({
      Bucket: awsBucket,
      Key: key,
      Body: file.data,
      ContentType: file.mimetype,
      ContentDisposition: `name="${file.name}"`,
    })
  );

  return key;
};

export const getFilePresignedLink = async (key: string) => {
  const command = new GetObjectCommand({
    Bucket: awsBucket,
    Key: key,
  });

  // Url available during 1 hour
  const url = await getSignedUrl(s3Client, command, {
    expiresIn: 60 * 60 * 60,
  });

  return url;
};
