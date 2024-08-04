import { UploadImage } from "../application/use-cases/upload-image.use-case";
import { ImageUploaderFactory } from "../infrastructure/factory";

export class ImageController {
    private uploadImage: UploadImage;

    constructor(provider: string) {
        const uploader = ImageUploaderFactory.createUploader(provider);
        this.uploadImage = new UploadImage(uploader);
    }

    async handleUploadRequest(imagePath: string): Promise<string> {
        return this.uploadImage.execute(imagePath);
    }
}