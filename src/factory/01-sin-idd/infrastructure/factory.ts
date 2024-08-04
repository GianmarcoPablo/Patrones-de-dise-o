import { ImageUploader } from "../domain/imageUploader";

export class CloudinaryUploader implements ImageUploader {
    async uploadImage(imagePath: string): Promise<string> {
        console.log(`Uploading ${imagePath} to Cloudinary`);
        return "cloudinary_url";
    }
}

export class S3Uploader implements ImageUploader {
    async uploadImage(imagePath: string): Promise<string> {
        console.log(`Uploading ${imagePath} to S3`);
        return "s3_url";
    }
}

export class ImageUploaderFactory {
    static createUploader(provider: string): ImageUploader {
        switch (provider) {
            case 'cloudinary':
                return new CloudinaryUploader();
            case 's3':
                return new S3Uploader();
            default:
                throw new Error('Unknown image uploader provider');
        }
    }
}