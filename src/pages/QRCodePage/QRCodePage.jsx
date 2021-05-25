import React from "react";
import "./QRCodePage.scss";
import QRCode from "./../../assets/qr-codes/local-test.png";

function QRCodePage() {
  return (
    <main className="qr-code-page">
      <img className="qr-code-page__code-img" src={QRCode} alt="QR Code" />
    </main>
  );
}

export default QRCodePage;
