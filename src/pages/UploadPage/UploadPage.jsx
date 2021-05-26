import React, { useState } from "react";
import "./UploadPage.scss";
import TextArea from "./../../components/TextArea/TextArea";

function UploadPage() {
  const [description, setDescription] = useState("");

  return (
    <main className="upload-page">
      <h1>Upload Pictures</h1>
      <form action="" className="upload-form">
        <input
          type="text"
          className="upload-form__name"
          placeholder="Enter your name..."
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
