  
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import './chessboard.css';

function chessboard() {
return (
<div className="container">
    <div className="holder">
        <div className="box" draggable="true" id="1"> </div>
    </div>
<div className="holder"></div>
<div className="holder"></div>
<div className="holder"></div>
</div>
) }

var dragged;

document.addEventListener("drag", function(event){});

document.addEventListener("dragstart",function(event) {
    dragged = event.target;
});

document.addEventListener("dragover",function(event){
    event.preventDefault();
});

document.addEventListener("drop",function(event){
    event.preventDefault();
    if (event.target.className == "holder") {
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
});

 export default chessboard; 
