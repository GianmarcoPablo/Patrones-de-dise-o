export abstract class ImageUploader {
    abstract uploadImage(imagePath: string): Promise<string>;
}