import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./UploadPage.scss";
import TextArea from "./../../components/TextArea/TextArea";
import InputField from "./../../components/InputField/InputField";
import ButtonPrimary from "./../../components/ButtonPrimary/ButtonPrimary";
import FileUpload from "./../../components/FileUpload/FileUpload";
import UploadContext from "../../context/uploadContext";

function UploadPage() {
  const uploadContext = useContext(UploadContext);
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    const { currentAuthor, currentDescription, currentImage } =
      uploadContext.currentUpload;
    console.log(currentAuthor, currentDescription, currentImage);

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
  };

  // Run once on load:
  useEffect(() => {
    setAuthor(uploadContext.currentUpload.currentAuthor);
    setDescription(uploadContext.currentUpload.currentDescription);
  }, []);

  // Run when author or description is updated:
  useEffect(() => {
    uploadContext.setCurrentUpload({
      currentAuthor: author,
      currentDescription: description,
      currentImage: uploadContext.currentUpload.currentImage,
    });
  }, [author, description]);

  return (
    <main className="upload-page">
      <h1 className="upload-page__title">Upload Picture</h1>
      <FileUpload />
      <form action="" className="upload-page__form" autoComplete="off">
        <InputField
          name="name"
          label="Name *"
          placeholder="Enter your name..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          error=""
        />
        <TextArea
          name="description"
          label="Description *"
          value={description}
          placeholder="Enter Description..."
          onChange={(e) => setDescription(e.target.value)}
          error=""
        />
        <div className="upload-page__button">
          <ButtonPrimary label="Upload" handleClick={(e) => handleUpload(e)} />
        </div>
      </form>
    </main>
  );
}

export default UploadPage;
