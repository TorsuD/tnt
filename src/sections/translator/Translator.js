import React, { useState } from "react";
import "./Translator.css";
import { FiMic, FiVolume2 } from "react-icons/fi";

function Translator() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="translator">
      <div className="translator__container">
        <div className="translator__input" onClick={handleClick}>
          {click ? (
            <div>
              <FiMic size={"40px"} id="translator__micPressed" />
            </div>
          ) : (
            <div>
              <FiMic size={"40px"} id="translator__mic" />
            </div>
          )}

          <div className="translator__instruction">
            {click ? "Recording" : "Click Here to Record"}
          </div>
        </div>

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
        </div>
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
