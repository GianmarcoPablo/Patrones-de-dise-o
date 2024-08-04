import { ImageUploader } from "../../domain/imageUploader";

export class UploadImage {
    private uploader: ImageUploader;

    constructor(uploader: ImageUploader) {
        this.uploader = uploader;
    }

    async execute(imagePath: string): Promise<string> {
        return this.uploader.uploadImage(imagePath);
    }
}
