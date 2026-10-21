import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const r2Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID!,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY!,
  },
});

export async function generateR2UploadUrl(filename: string, contentType: string) {
  const fileKey = `portfolio/${Date.now()}-${filename}`;

  const command = new PutObjectCommand({
    Bucket: process.env.CLOUDFLARE_BUCKET_NAME!,
    Key: fileKey,
    ContentType: contentType,
  });

  // Generiert eine temporär gültige Upload-URL für den Client (1 Std. gültig)
  const uploadUrl = await getSignedUrl(r2Client, command, { expiresIn: 3600 });

  return { uploadUrl, fileKey };
}