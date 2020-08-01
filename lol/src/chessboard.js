  
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import './chessboard.css';

function chessboard() {
return (
    <div className="container">
        {Array(28).fill().map((_,i) => (
            <div className="holder" onDragOver = {event => event.preventDefault()} onDrop = {event => onDrop_handler(event)} key={i}>
                {i <= 1 ? <div className="box" draggable="true" id={i} onDragStart = {event => event.dataTransfer.setData('text', event.target.id)}></div> : ''}
            </div>
        ))}
    </div>
 
)}


 const onDrop_handler = event => {
    event.preventDefault();
    console.log(id);
    const id = event.dataTransfer.getData('text');
    if (id) {
        event.target.append(document.getElementById(id))
    }
 };


const holder = document.getElementsByClassName("holder");
console.log(holder);


 

export default chessboard; 