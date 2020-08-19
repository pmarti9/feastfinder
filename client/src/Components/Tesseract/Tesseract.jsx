import React from "react";

const createWorker = require('./createWorker');

const recognize = async (image, langs, options) => {
  const worker = createWorker(options);
  await worker.load();
  await worker.loadLanguage(langs);
  await worker.initialize(langs);
  return worker.recognize(image)
    .finally(async () => {
      await worker.terminate();
    });
};

const detect = async (image, options) => {
  const worker = createWorker(options);
  await worker.load();
  await worker.loadLanguage('osd');
  await worker.initialize('osd');
  return worker.detect(image)
    .finally(async () => {
      await worker.terminate();
    });
};

function Tesseract() {
    return (
// code used to convert image to text.
<div className="App" >

{!ocr ? <p>{value.status}</p>:null}
<p>{!ocr ? <progress value= {value.progress} max="1"></progress>: ocr}</p>
<input onChange={(event) => setImage(event.target.value)} />
</div>
    );
}

module.exports = {
    recognize,
    detect,
    Tesseract
  };