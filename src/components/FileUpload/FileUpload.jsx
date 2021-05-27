import React, { useState, useContext, useEffect } from "react";
import UploadContext from "../../context/uploadContext";
import "./FileUpload.scss";

function FileUpload() {
  const uploadContext = useContext(UploadContext);
  const [file, setFile] = useState("");

  function handleUpload(e) {
    setFile(e.target.files[0]);
    uploadContext.setCurrentUpload({
      currentAuthor: uploadContext.currentUpload.currentAuthor,
      currentDescription: uploadContext.currentUpload.currentDescription,
      currentImage: e.target.files[0],
    });
  }

  useEffect(() => {
    setFile(uploadContext.currentUpload.currentImage);
  }, [uploadContext.currentUpload.currentImage]);

  return (
    <div className="file-upload">
      <input
        type="file"
        onChange={handleUpload}
        className="file-upload__input"
      />
      {/* <p>File name: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p> */}
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
