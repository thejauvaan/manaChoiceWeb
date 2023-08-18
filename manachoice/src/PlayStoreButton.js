import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const PlayStoreButton = () => {
  const handleInstallButtonClick = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.cheffyhub&pli=1";
  };

  return (
    <button className="install-button" onClick={handleInstallButtonClick}>
      <FontAwesomeIcon icon={faGooglePlay} style={{ marginRight: "8px" }} />
      Install Now
    </button>
  );
};

export default PlayStoreButton;
