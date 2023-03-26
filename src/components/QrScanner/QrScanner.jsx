import React, { useState } from "react";
import QrReader from "react-qr-scanner";

import "./QrScanner.css";

const QrScanner = () => {
  const [qrValue, GetQrData] = useState(undefined);

  const ScanData = (data) => {
    if (data) GetQrData(data.text);
  };
  const ResetData = () => {
    window.location.reload(true);
  };
  const Errorhandle = (error) => {
    alert(error);
  };

  return (
    <div>
      <div>
        <h2 className="heading">Scan Farmer ID</h2>
        <QrReader className="scanner" onScan={ScanData} onError={Errorhandle} />

        <h4 className="heading">
          FARMER ID : {qrValue}
          {qrValue ? (
            <div className="refresh" onClick={ResetData}>
              Scan Again
            </div>
          ) : (
            <div></div>
          )}
        </h4>
      </div>
    </div>
  );
};

export default QrScanner;
