import React, { useState, useEffect } from 'react';



export default function App() {

    const [posts, setPosts] = useState({})
    
    async function fetchData(){ 
        const res = await fetch ("")
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