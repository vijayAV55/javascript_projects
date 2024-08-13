import React, { useState } from "react";
import "./QRCodeGenerator.css";

function QRCodeGenerator() {
  const [qrText, setQrText] = useState("");
  const [qrImageUrl, setQrImageUrl] = useState("");

  const generateQR = () => {
    if (qrText.length > 0) {
      setQrImageUrl(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`
      );
    } else {
      alert("Please enter some text or URL");
    }
  };

  return (
    <div className="container">
      <p>Enter your text or URL</p>
      <input
        type="text"
        placeholder="Text or URL"
        value={qrText}
        onChange={(e) => setQrText(e.target.value)}
      />
      <div id="imgBox">
        {qrImageUrl && (
          <img src={qrImageUrl} alt="Generated QR Code" id="qrImage" />
        )}
      </div>
      <button onClick={generateQR}>Generate QR Code</button>
    </div>
  );
}

export default QRCodeGenerator;
