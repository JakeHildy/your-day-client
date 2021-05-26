import React, { useState } from "react";
import "./FileUpload.scss";

function FileUpload() {
  const [file, setFile] = useState("");

  function handleUpload(e) {
    setFile(e.target.files[0]);
  }

  return (
    <div className="file-upload">
      <input type="file" onChange={handleUpload} />
      <p>File name: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p>
      {file && <ImageThumb image={file} />}
    </div>
  );
}

const ImageThumb = ({ image }) => {
  return (
    <img
      src={URL.createObjectURL(image)}
      alt={image.name}
      className="image-thumb"
    />
  );
};

export default FileUpload;
