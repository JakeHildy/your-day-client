import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import IconGallery from "./../IconGallery/IconGallery";
import IconUpload from "./../IconUpload/IconUpload";
import IconQRCode from "./../IconQRCode/IconQRCode";

function NavBar() {
  const [selected, setSelected] = useState("gallery");
  const colorSelected = "#eceff1";
  const colorNotSelected = "#b0bec5";

  useEffect(() => {
    setSelected(window.location.pathname);
    console.log(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div className="navbar">
      <Link
        to="/gallery"
        className="navbar__item"
        onClick={() => setSelected("/gallery")}
      >
        <IconGallery
          fill={selected === "/gallery" ? colorSelected : colorNotSelected}
          size="42"
        />
      </Link>
      <Link
        to="/upload"
        className="navbar__item"
        onClick={() => setSelected("/upload")}
      >
        <IconUpload
          fill={selected === "/upload" ? colorSelected : colorNotSelected}
          size="42"
        />
      </Link>
      <Link
        to="/qr-code"
        className="navbar__item"
        onClick={() => setSelected("/qr-code")}
      >
        <IconQRCode
          fill={selected === "/qr-code" ? colorSelected : colorNotSelected}
          size="42"
        />
      </Link>
    </div>
  );
}

export default NavBar;
