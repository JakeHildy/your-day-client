import React, { useState, useContext, useEffect } from "react";
import "./UploadPage.scss";
import TextArea from "./../../components/TextArea/TextArea";
import InputField from "./../../components/InputField/InputField";
import ButtonPrimary from "./../../components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "./../../components/ButtonSecondary/ButtonSecondary";
import FileUpload from "./../../components/FileUpload/FileUpload";
import PageOverlay from "./../../components/PageOverlay/PageOverlay";
import UploadContext from "../../context/uploadContext";
import { uploadPost } from "../../utils/postAPI";

function UploadPage({ history }) {
  const uploadContext = useContext(UploadContext);
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [overlay, setOverlay] = useState(false);

  // Upload Post + Image
  const handleUpload = async (e) => {
    e.preventDefault();
    setOverlay(true);
    await uploadPost(uploadContext.currentUpload);
    setOverlay(false);
    history.push("/gallery");
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    console.log("cancel pressed");
    if (!localStorage.getItem("author")) {
      localStorage.setItem("author", uploadContext.currentUpload.currentAuthor);
    }
    uploadContext.setCurrentUpload({
      currentAuthor: localStorage.getItem("author")
        ? localStorage.getItem("author")
        : "",
      currentDescription: "",
      currentImage: "",
    });
    history.push("/gallery");
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
        <div className="upload-page__buttons">
          <div className="upload-page__buttons--cancel">
            <ButtonSecondary
              label="Cancel"
              handleClick={(e) => handleCancel(e)}
            />
          </div>
          <div className="upload-page__buttons--upload">
            <ButtonPrimary
              label="Upload"
              handleClick={(e) => handleUpload(e)}
            />
          </div>
        </div>
      </form>
      {overlay && <PageOverlay message="Uploading" />}
    </main>
  );
}

export default UploadPage;
