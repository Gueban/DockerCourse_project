import React, {useState, useEffect} from 'react'
import { TextField, Button, Grid } from "@material-ui/core";
import Header from "./Header";

function Form() {
    const [sql, setSql] = useState(0);
    const [cache, setCache] = useState(0);

    const HOST=process.env.FRONTHOST?process.env.FRONTHOST:'54.188.79.21'

    async function count(database){
        const res = await fetch(`http://${HOST}:2800/count${database}`, {method:'GET', headers:{}, mode:'cors'});
        const data = await res.json()
        if(database==='Sql'){
            if(data['response']) setSql(data['response'])
            else setSql(0)
        }else{
            if(data['response']) setCache(data['response'])
            else setCache(0)
        }
    }

    async function add(database){
        const datos = {
            "email" : document.getElementById('email').value,
            "name" : document.getElementById('name').value,
            "password" : document.getElementById('password').value
        }
        const res = await fetch(`http://${HOST}:2800/${database}`, 
            {
                method:'POST', 
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(datos),
                mode:'cors'
            });
        const data = await res.json();
        console.log(data)
    }

    const addMysql = () => {
        add('sql');
    }

    const addRedis = () => {
        add('cache');
    }

    useEffect(()=>{
        setInterval(()=>{
            count('Sql');
            count('Cache');
        }, 2000)
    })

    return (
    <div>
        <form id='user-form'>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField id="name" label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="email" label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="password" label="Password" type="password" variant="outlined" />
                </Grid>
                <Grid item xs={6} style={{"textAlign":"end"}}>
                    <Button size="large" variant="outlined" color="primary" onClick={addMysql}>
                        Save to SQL
                    </Button>
                </Grid>
                <Grid item xs={6} style={{"textAlign":"start"}} >
                    <Button size="large" variant="outlined" color="primary" onClick={addRedis} >
                        Save to Cache
                    </Button>
                </Grid>
            </Grid>
        </form>
        
        <p>Items stored at SQL</p>
        <Header txt={sql} clase="primary" size={2} margin="10px"/>
        <p>Items stored at Redis</p>
        <Header txt={cache} clase="primary" size={2} margin="10px"/>
        
    </div>
    )
}

export default Form
