  
import React from 'react';
//import ReactDOM, { render } from 'react-dom';
//import App from './App';
import './chessboard.css';

function chessboard() {
return (
    <div className="container">
        {Array(28).fill().map((_,i) => (
            <div className="holder" onDragOver = {event => event.preventDefault()} onDragStart = {dragStart} onDragEnd = {dragEnd}
                 onDrop = {onDrop_handler} key={i} >
                {i <= 1 ? <div className="box" draggable="true" onDrop = {onDrop_prevent} 
                id={i} onDragStart = {event => event.dataTransfer.setData('text', event.target.id)} /> : ''}
            </div>
        ))}
    </div>
 
)}


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
        event.target.append(document.getElementById(data))
    } 
;}

const holders = document.getElementsByClassName("holder");

function dragStart(event){
    // for (let i=0; i<holders.length; i++) {
    //     //console.log(holders[i]);
    //     if (holders[i].firstChild == null) {
    //         //console.log(holders[i]);
    //         holders[i].style.backgroundColor = "red";
    //     }
    // }
    Array.from(holders).filter(element => element.firstChild == null).forEach(element => element.style.backgroundColor = "red");
}

function dragEnd(event){
    for (let i=0; i<holders.length; i++) {
        //console.log(holders[i]);
        if (holders[i].firstChild == null) {
            //console.log(holders[i]);
            holders[i].style.backgroundColor = "white";
        }
    }
} 

export default chessboard; 