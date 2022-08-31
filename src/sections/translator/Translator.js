import React, { useState } from "react";
import "./Translator.css";
import { FiMic, FiVolume2 } from "react-icons/fi";
import { useReactMediaRecorder } from "react-media-recorder";

function Translator() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder(
    { audio: true }
  );

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <div className="translator">
      <div className="translator__container">
        <div className="translator__input" onClick={handleClick}>
          {click ? (
            <div>
              <FiMic
                size={"40px"}
                id="translator__micPressed"
                onClick={stopRecording}
              />
            </div>
          ) : (
            <div>
              <FiMic
                size={"40px"}
                id="translator__mic"
                onClick={startRecording}
              />
            </div>
          )}
        </div>

        <div>
          <div className="translator__instruction">
            {click ? "Recording" : "Click Here to Record"}
          </div>

          <div>
            <audio src={mediaBlobUrl} autoPlay controls clearBlobUrl></audio>
          </div>
        </div>
        {/**Input Section on top */}

        {/* <div className="translator__clear" onClick={clearBlobUrl}>
          Clear
        </div> */}

        <div className="translator__output">
          {click ? (
            <div>
              <FiVolume2 size={"40px"} id="translator__mic" />
            </div>
          ) : (
            <div>
              <FiVolume2 size={"40px"} id="translator__micPressed" />
            </div>
          )}

          <div className="translator__instruction">
            {click ? "Preparing" : "Translated version"}
          </div>

          <div>
            <audio src={mediaBlobUrl} controls loop></audio>
          </div>
        </div>

        {/* <div className="translator__status">{status}</div>
        <div>
          <button onClick={startRecording}>Start</button>
        </div>

        <div>
          <button onClick={stopRecording}>Stop/</button>
        </div>
        <div>
          <audio src={mediaBlobUrl} autoPlay controls loop></audio>
        </div> */}
      </div>
    </div>
  );
}

export default Translator;

// onClick={()=>{
//   navigator.mediaDevices.getUserMedia({audio: true})
//   .then(stream => {
//     let mediaRecorder = new MediaRecorder(stream)
//     mediaRecorder.start()
//     let chuck = []

//     mediaRecorder.addEventListener("dataavailable", e =>{chuck.push(e.data)})
//   })

//   lmediaRecorder.addEventListener("stop", e =>{
//     blob = new Blob(chuck)
//   })
// }}>
