  
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import './chessboard.css';

function chessboard() {
return (
    <div className="container">
        {Array(4).fill().map((_,i) => (
            <div className="holder" onDragOver = {event => event.preventDefault()} onDrop = {event => onDrop_handler(event)} key={i}>
                {i <= 1 ? <div className="box" draggable="true" id={i} onDragStart = {event => event.dataTransfer.setData('text/plain', event.target.id)}></div> : ''}
            </div>
        ))}
    </div>
)}

 const onDrop_handler = event => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(id));
 }

 
export default chessboard; 