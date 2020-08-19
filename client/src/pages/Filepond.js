import React, { Component } from "react";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond/dist/filepond.min.css';

registerPlugin(FilePondPluginImagePreview);

updateProgressAndLog(m){

    // Maximum value out of which percentage needs to be
    // calculated. In our case it's 0 for 0 % and 1 for Max 100%
    // DECIMAL_COUNT specifies no of floating decimal points in our
    // Percentage
    const MAX_PARCENTAGE = 1 ;
    const DECIMAL_COUNT = 2 ;
  
    if(m.status === "recognizing text"){
        var pctg = (m.progress / MAX_PARCENTAGE) * 100
        this.setState({
            pctg : pctg.toFixed(DECIMAL_COUNT)
        })
  
    }
  }

  componentDidMount(){
    // Logs the output object to Update Progress, which
    // checks for Tesseract JS status & Updates the progress
    this.worker = createWorker({
        logger: m => this.updateProgressAndLog(m),
    });
  
  }

  export default FilePond;