import React, { useState, useEffect } from 'react';



export default function App() {

    const [posts, setPosts] = useState({})
    
    async function fetchData(){ 
        const res = await fetch ("https://kr.api.riotgames.com/tft/league/v1/entries/DIAMOND/I?page=1&api_key=RGAPI-9e164cdc-6b6f-4108-a974-f82c83c8fff6")
        const data = await res.json()
        setPosts(data)
}
            
useEffect(() => {
    fetchData()
}, [])
    
console.log(posts); 

    return (
    <div>
        <h4>{posts.leagueId}</h4>
    </div>
    );
}