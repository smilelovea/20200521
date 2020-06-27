import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import './chessboard.css';

function chessboard() {
return (
<div id="container">
    <div class="holder">
        <div class="box" draggable="true"> </div>
    </div>
</div>
) }

const box = document.querySelector('.box');



export default chessboard;
