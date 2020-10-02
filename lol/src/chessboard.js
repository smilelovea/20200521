  
import React, { useState } from 'react';
//import ReactDOM, { render } from 'react-dom';
//import App from './App';
import './chessboard.css';


function Chessboard() {
return (
    <div className="container">
        {Array(28).fill().map((_,i) => (
            <div className="holder" onDragOver = {event => event.preventDefault()} onDragStart = {dragStart} onDragEnd = {dragEnd}
                onDrop = {onDrop_handler} onDragEnter = {dragEnter} onDragLeave = {dragLeave} key={i} >
                {i <= 2 ? <div className="box" draggable="true" onDrop = {onDrop_prevent} 
                id={i} onDragStart = {onDragStart_box} /> : ''}
            </div>
        ))}
    </div>
 
)}


function onDragStart_box(event){
    event.dataTransfer.setData('text', event.target.id);

}


function onDrop_prevent(event){
    event.preventDefault();
    event.stopPropagation();
    
} 

function onDrop_handler(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    console.log(data);
    console.log(event.currentTarget.firstElementChild); // 겹쳐진 box중 아래에 있는 box(원래 있던 box)
   
    if (data) {
        event.target.append(document.getElementById(data));  
    }

    const boxClass = document.getElementsByClassName('box');
    console.log(boxClass);
    const boxFirstChild = event.currentTarget.firstElementChild;
    if (data) {        
        const boxLastChild = event.currentTarget.lastChild;
        event.target.replaceChild(boxLastChild,boxFirstChild);
        event.target.appendChild(boxFirstChild);       
    } 
    
;}



const holders = document.getElementsByClassName("holder");

function dragStart(event){
    //for (let i=0; i<holders.length; i++) {
    //    // console.log(holders[i]);
    //     if (holders[i].firstChild == null) {
    //         console.log(holders[i]);
    //         holders[i].style.backgroundColor = "red";
    //     }
    // }
    Array.from(holders).filter(element => element.firstChild == null).forEach(element => element.style.backgroundColor = "#cccccc");
    console.log(event.currentTarget);
    event.currentTarget.classList.remove('over');
}



function dragEnd(event){
    Array.from(holders).filter(element => element.firstChild == null).forEach(element => element.style.backgroundColor = "white");
   // console.log(event.currentTarget);
} 

function dragEnter(event){
    event.preventDefault();
       event.target.classList.add('over');
   
   }
   
   function dragLeave(event){
       event.preventDefault();
   
    event.target.classList.remove('over');
   }

export default Chessboard; 
