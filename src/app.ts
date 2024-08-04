import { ImageController } from "./factory/01-sin-idd/presentation/controller";

const imageController = new ImageController('s3');

imageController.handleUploadRequest('image_path').then(url => {
    console.log(url);
});