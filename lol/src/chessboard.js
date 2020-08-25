  
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import './chessboard.css';

function chessboard() {
return (
    <div className="container">
        {Array(28).fill().map((_,i) => (
            <div className="holder" onDragOver = {event => event.preventDefault()} dragstart = {dragStart} dragend = {dragEnd}
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



const holder = document.getElementsByClassName("holder");
console.log(holder); //htmlCollection
console.log(document.querySelectorAll('box')); // NodeList[] 






function dragStart(){
    holder.style.backgroundColor = "red";
}

function dragEnd(){
    holder.style.backgroundColor = "white";
}



 

export default chessboard; 