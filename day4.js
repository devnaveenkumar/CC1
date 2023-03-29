import React from "react";
import './day4.css'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';




const fruits= [
  "Apple","Banana","Cherry","Durian","Elderberry"
 ];
 

export default function Mui(){
   const [fruit,setFruit]=React.useState("");
   const [name, setName]=React.useState("");
   const handleout=()=>{alert("Hello "+name+"!Your favourite fruit is "+fruit);}
   
   return(
       <div id="box">
       <br /> <br /> <br />

       <h2>Enter your Name and Favourite fruit</h2>
       <div>
       <form >
       
       <TextField  value={name} onChange={(n)=>setName(n.target.value)} id="colour" sx={{width:300,margin:3}} label="Name" variant="outlined" />
      
       
       <Autocomplete
       onChange={(event, value) =>setFruit(value)}

      disablePortal
      className="dropbox"
      id="combo-box-demo"
      options={fruits}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="choose your fruit" />}
    />

       <br />
       <Button onClick={handleout}  variant="contained"  >submit</Button>
       </form></div>
       </div>
   )
}