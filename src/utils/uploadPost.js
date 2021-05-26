import axios from "axios";

export default async function uploadPost(uploadData) {
  const { currentAuthor, currentDescription, currentImage } = uploadData;
  const IMAGE_UPLOAD_EP = `${process.env.REACT_APP_BACKEND_URL}/images`;
  const POST_UPLOAD_EP = `${process.env.REACT_APP_BACKEND_URL}/posts`;
  const data = new FormData();
  data.append("file", currentImage);

  try {
    const imageUploadRes = await axios.post(IMAGE_UPLOAD_EP, data);
    const imageLocation = imageUploadRes.data.message.Location;
    const postUploadRes = await axios.post(POST_UPLOAD_EP, {
      image: imageLocation,
      author: currentAuthor,
      description: currentDescription,
    });
    console.log(postUploadRes);
  } catch (err) {
    console.log(err);
  }
}
