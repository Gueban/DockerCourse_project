import React from 'react'
import { TextField, Button, Grid } from "@material-ui/core";

function Form() {

    const addMysql = () => {
        console.log(`Pal Maisiqual`);
    }

    const addRedis = () => {
        console.log(`Pal Redis`);
    }

    return (
        <form>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
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
    )
}

export default Form
