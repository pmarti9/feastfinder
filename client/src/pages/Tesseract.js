import React, { Component } from "react";
import { createWorker } from 'Tesseract.js';

function Tesseract(props) {

const [value, setValue] = useState({});
const [image, setImage] = useState();
const [ocr, setOcr] = useState();
const [recipe, setRecipe] = useState({
  //Fields for recipes
  name: '',
  ingredients: '',
  cookTime: 0,
  temp: ['F', 'C']
});

//Tesseract Starts
const worker = createWorker({
    logger: m => {console.log(m);setValue(m)},
  });
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data : { text } } = await worker.recognize(image);
    console.log(text)
    setOcr(text);
    await worker.terminate();
  };
  useEffect(() => {
      doOCR();
    }, [image]);
    
    useEffect(() => console.log(ocr), [ocr])
//Tesseract Finishes

  
  return (
    <div className="App">
      {!ocr ? <p>{value.status}</p>:null}
      <p>{!ocr ? <progress value= {value.progress} max="1"></progress>: ocr}</p>
      <input onChange={(event) => setImage(event.target.value)} />
    </div>
      );
  }
  export default Tesseract;