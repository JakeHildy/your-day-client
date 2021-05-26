import React, { useState } from "react";
import "./UploadPage.scss";
import TextArea from "./../../components/TextArea/TextArea";
import InputField from "./../../components/InputField/InputField";
import ButtonPrimary from "./../../components/ButtonPrimary/ButtonPrimary";
import FileUpload from "./../../components/FileUpload/FileUpload";

function UploadPage() {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();
    console.log("Handle upload");
  };

  return (
    <main className="upload-page">
      <h1 className="upload-page__title">Upload Picture</h1>
      <FileUpload />
      <form action="" className="upload-page__form" autoComplete="off">
        <InputField
          name="name"
          label="Name *"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
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
