import React, { useState, useEffect } from 'react';
import axios from 'axios';


 
function App() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get("https://kr.api.riotgames.com/tft/league/v1/challenger?api_key=RGAPI-1518764a-d149-4ec5-a36c-b39cfd0a5f5c")
            .then(response => console.log(response));
    });
    
    return <div></div>;
}





export default App;
