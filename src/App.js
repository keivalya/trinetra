// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
// Import required model here
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./App.css";
// Import drawing utility here
import { drawRect } from "./utilities";

function extractValue(arr, prop) {
  // extract value from property
  let extractedValue = arr.map((item) => item[prop]);

  return extractedValue;
}

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [camState, setCamState] = useState("on");
  const [camFace, setCamFace] = useState("environment");

  const videoConstraints = {
    facingMode: camFace
  };

  // Main function
  const runCoco = async () => {
    // Load network
    const net = await cocossd.load();

    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 2500);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const obj = await net.detect(video);
      // console.log(obj);
      const msg = extractValue(obj, "class");
      console.log(msg);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      drawRect(obj, ctx);

      var spea = new SpeechSynthesisUtterance();
      spea.text = msg + " ahead";
      window.speechSynthesis.speak(spea);
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <div className="App">
      <div className="App-Title">Trinetra</div>
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          videoConstraints={videoConstraints}
          muted={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: "100vw",
            height: "100vh"
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: "90%",
            height: "90%"
          }}
        />
      </header>
      <footer>
        Made with{" "}
        <span role="img" aria-label="sparklingHeart">
          💖
        </span>{" "}
        by BVMites
      </footer>
    </div>
  );
}

export default App;
