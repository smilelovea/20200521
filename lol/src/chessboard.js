  
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import './chessboard.css';

function chessboard() {
return (
<div className="container">
    <div className="holder" ondragover = "onDragOver(event);" ondrop = "onDrop(event);">
        <div className="box" 
            draggable="true" 
            id="1"
            ondragstart = "onDragStart(event);"> 
        </div>
    </div>
<div className="holder" ondragover = "onDragOver(event);" ondrop = "onDrop(event);"></div>
<div className="holder" ondragover = "onDragOver(event);" ondrop = "onDrop(event);"></div>
<div className="holder" ondragover = "onDragOver(event);" ondrop = "onDrop(event);"></div>
</div>
) }

/* var dragged;

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
}); */

 
 function onDragOver(event){
     event.preventDefault();
     
 }

 function onDragStart(event) {
     event.dataTransfer.setData('text/plain', event.target.id);
      
 }


 
 function onDrop(event){
    event.preventDefault();
    const id = event.dataTransfer.getData('text'); 
    event.target.appendChild(document.getElementById(id));
      
 }

 
export default chessboard; 