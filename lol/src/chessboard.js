  
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import './chessboard.css';

function chessboard() {
return (
    <div className="container">
        {Array(28).fill().map((_,i) => (
            <div className="holder" onDragOver = {event => event.preventDefault()} 
                 onDrop = {event => onDrop_handler(event)} key={i}  >
                {i <= 1 ? <div className="box" draggable="true" onDrop = {onDrop_prevent} 
                                id={i} onDragStart = {event => event.dataTransfer.setData('text', event.target.id)}> </div> : ''}
            </div>
        ))}
    </div>
 
)}

const onDrop_prevent = event => {
    event.preventDefault();
    event.stopPropagation();
}

 const onDrop_handler = event => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    console.log(data);
    console.log(event.currentTarget.firstElementChild); // 겹쳐진 box중 아래에 있는 box(원래 있던 box)
    console.log(data.parentNode);

    

    if (data) {
        event.target.append(document.getElementById(data))
    }
    };


 



const holder = document.querySelectorAll(".holder");
console.log(holder);

 

export default chessboard; 