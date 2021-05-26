import React, { useState } from "react";
import "./UploadPage.scss";
import TextArea from "./../../components/TextArea/TextArea";
import InputField from "./../../components/InputField/InputField";

function UploadPage() {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  return (
    <main className="upload-page">
      <h1>Upload Pictures</h1>
      <form action="" className="upload-form" autoComplete="off">
        <InputField
          name="name"
          label="Name"
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
      </form>
    </main>
  );
}

export default UploadPage;
