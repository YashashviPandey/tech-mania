import React, { useEffect, useState } from "react";

const BackgroundVideo = () => {
  return (
    <video autoPlay loop muted id="video">
      <source src="./video/galaxy.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;