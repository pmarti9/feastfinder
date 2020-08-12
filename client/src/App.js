import React, { useEffect, useState } from "react";
import "./App.css";
import "./Recipe.js";
import { createWorker } from 'tesseract.js';

function App() {
const [value, setValue] = useState({});
const [image, setImage] = useState();
const [ocr, setOcr] = useState();
const [Recipe, setRecipe] = useState({ 
  //Fields for recipes
  name: '',
  ingredients: '',
  cookTime: 0,
  temp: ['F', 'C']
});


const worker = createWorker({
  logger: m => {console.log(m);setValue(m)},
});
const doOCR = async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data : { text } } = await worker.recognize(image);
  setOcr(text);
};
useEffect(() => {
  doOCR();
}, [image]);

useEffect(() => console.log(ocr), [ocr])

  return (
<div className="App">
  {!ocr ? <p>{value.status}</p>:null}
  <p>{!ocr ? <progress value= {value.progress} max="1"></progress>: ocr}</p>
  <input onChange={(event) => setImage(event.target.value)} />
</div>
  );
}


export default App;
