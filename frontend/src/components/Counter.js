import React, {useState, useEffect} from 'react'
import Header from "./Header";

function Counter() {

    const [sql, setSql] = useState(0);
    const [cache, setCache] = useState(0);

    useEffect(() => {
        setInterval(()=>{
            setSql(sql+1);
            setCache(cache+1);
        }, 3000);
    }, [sql, cache])

    return (
        <div>
            <p>Items stored at SQL</p>
            <Header txt={sql} clase="primary" size={2} margin="10px"/>
            <p>Items stored at Redis</p>
            <Header txt={cache} clase="primary" size={2} margin="10px"/>
            
        </div>
    )
}

export default Counter
