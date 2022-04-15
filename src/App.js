import React, { Component, useState} from "react"
import logo from "./logo.svg"
import "./App.css"
import ReactDOM from "react-dom";
import soundfile from './assets/test.m4a'
import Sound from 'react-sound'
import Stack from '@mui/material/Stack'
import { TextField } from "@mui/material";
import image from './assets/Rectangle 1.png';
import mardy from './assets/Mardy Bum.png';
import rain from './assets/Rain.png';
import fish from './assets/Fish.png';
import anila_photo from './assets/anila_photo.jpg'
import anna_photo from './assets/anna_photo.png'
import cyrus_photo from './assets/cyrus_photo.png'


import Grid from '@mui/material/Grid'


function App(){

  const [page, setPage] = useState(0)
  const [anila, setAnila] = useState(0)
  const [anna, setAnna]  = useState(0)
  const [cyrus, setCyrus] = useState(0)
  const images = [image, mardy, rain, fish];

  function checkAnswer1(value){
    
    if (value === 'Mardy Bum'){
      setAnila(1)
      document.getElementsByClassName("answer1 block fixed")[0].style.display = 'block';
      document.getElementsByClassName("block round button1")[0].style.display = 'block';
    }
  }

  function checkAnswer2(value){
    
    if (value === "Main Title (Singin' In The Rain)"){
      setAnna(2)
      document.getElementsByClassName("answer2 block fixed")[0].style.display = 'block';
      document.getElementsByClassName("block round button2")[0].style.display = 'block';
    }
  }

  function checkAnswer3(value){
    
    if (value === "Fisherman's Harvest Song - Pt. 1"){
      setCyrus(3)
      document.getElementsByClassName("answer3 block fixed")[0].style.display = 'block';
      document.getElementsByClassName("block round button3")[0].style.display = 'block';
    }
  }

  
  function Opengift1(){
    document.getElementsByClassName("gift1")[0].style.display = 'block';
  }

  function Opengift2(){
    document.getElementsByClassName("gift2")[0].style.display = 'block';
  }

  function Opengift3(){
    document.getElementsByClassName("gift3")[0].style.display = 'block';
  }

  function changePage(){
    setPage(page+1)
    // document.getElementsByClassName("answer3 block fixed")[0].style.display = 'none';
    // document.getElementsByClassName("block round button3")[0].style.display = 'none';
    // document.getElementsByClassName("gift3")[0].style.display = 'none';
  }

  function gohome(){
    setPage(0)
  }

  switch(page){
    case 0: return (
      <Stack className="App" spacing={2} sx = {{marginX: 20}}>
        {/* Qusestion */}
        <h1 class ='block fixed' >Welcome to a little game created by your friends</h1>
  
          {/* Main questions area */}
  
          <Stack className ='block fixed' padding ={2}>
  
          <h2 class = 'block fixed'><em>🔥 CHALLENGE 1 🔥</em></h2>        
          <Grid container spacing ={2} direction ='row' padding ={2}>
            <Grid item xs={8}>
            {/* uAdio */}
            <Stack spacing = {2} >
              <Stack className = 'block fixed' spacing ={2} padding ={2}>
                <Stack direction = 'row' spacing={3}>
                  <h3>3 seconds 🔊 </h3>
                  <audio  class='block round fixed' src={soundfile} controls draggable ='false' fullWidth/>
                </Stack>
                <Stack direction = 'row' spacing={3}>
                  <h3>7 seconds 🔊 </h3>
                  <audio  class='block round fixed' src={soundfile} controls draggable ='false' fullWidth/>
                </Stack>
                <Stack direction = 'row' spacing={3}>
                  <h3>15 seconds 🔊 </h3>
                  <audio  class='block round fixed' src={soundfile} controls draggable ='false' fullWidth/>
                </Stack>
              
              </Stack>
              <TextField placeholder="Type the name of the song (needs to be exactly the same as it is on Spotify)" className ='block' fullWidth onChange={(e)=>checkAnswer1(e.target.value)}> </TextField>
            </Stack>
            </Grid>
            
            <Grid item xs={4}>
              <Stack className = 'block fixed' spacing ={2}id = 'answer1'  padding ={2}>
                <img src= {images[anila]} style= {{height: 230, width: 230}} class ='block fixed'></img>
                <h2 id= 'answer1' class ='answer1 block fixed' style={{display: 'none'}}>You Guessed it 🔥</h2>
              </Stack>  
  
            </Grid>
          </Grid>
            
            <Stack spacing ={2}> 
            <h3 className ='block round button1' onClick={Opengift1} style={{display: 'none'}}>See who gave you this song</h3>
            <Stack className ='gift1 block' style={{display: 'none'}} padding= {2}>
              <img src = {anila_photo} class ='blocl fixed' style= {{height: 230, width: 230}}></img>
              <p>"This song reminds me of him because I love him even when he's being a mardy bum"</p>            
              <h3 className ='block round' onClick={changePage}>Next Challenge</h3>
            </Stack>
  
            </Stack>
          </Stack>
        </Stack >
    ) 
    case 1: 
    return (
      <Stack className="App" spacing={2} sx = {{marginX: 20}}>

      <Stack className ='block fixed' padding ={2}>

      <h2 class = 'block fixed'><em>🔥 CHALLENGE 2🔥</em></h2>        
      <Grid container spacing ={2} direction ='row' padding ={2}>
        <Grid item xs={8}>
        {/* uAdio */}
        <Stack spacing = {2} >
          <Stack className = 'block fixed' spacing ={2} padding ={2}>
            <Stack direction = 'row' spacing={3}>
              <h3>3 seconds 🔊 </h3>
              <audio  class='block round fixed' src={soundfile} controls draggable ='false' fullWidth/>
            </Stack>
            <Stack direction = 'row' spacing={3}>
              <h3>7 seconds 🔊 </h3>
              <audio  class='block round fixed' src={soundfile} controls draggable ='false' fullWidth/>
            </Stack>
            <Stack direction = 'row' spacing={3}>
              <h3>15 seconds 🔊 </h3>
              <audio  class='block round fixed' src={soundfile} controls draggable ='false' fullWidth/>
            </Stack>
          
          </Stack>
          <TextField placeholder="Type the name of the song (needs to be exactly the same as it is on Spotify)" className ='block' fullWidth onChange={(e)=>checkAnswer2(e.target.value)}> </TextField>
        </Stack>
        </Grid>
        
        <Grid item xs={4}>
          <Stack className = 'block fixed' spacing ={2}id = 'answer1'  padding ={2}>
            <img src= {images[anna]} style= {{height: 230, width: 230}} class ='block fixed'></img>
            <h2 id= 'answer2' class ='answer2 block fixed' style={{display: 'none'}}>You Guessed it 🔥</h2>
          </Stack>  

        </Grid>
      </Grid>
        
        <Stack spacing ={2}> 
        <h3 className ='block round button2' onClick={Opengift2} style={{display: 'none'}}>See who gave you this song</h3>
          <Stack className ='gift2 block' style={{display: 'none'}} padding= {2}>
            <img src = {anna_photo} class ='blocl fixed' style= {{height: 230, width: 230}}></img>
            <p>"Everytime I hear this it reminds me of second year when we watched the film together for the first time and saw the student production at the gala. Was so much fun and I miss those chill film watching evenings and of course the subsequent late night discussions - maybe the good morning song would have been more appropriate... Anyway I'm super excited to be getting them back again really soon!! (not to mention all those trips to indie cinemas we'll definitely get round to)"</p>            
            <h3 className ='block round' onClick={changePage}>Next Challenge</h3>
          </Stack>
          
        </Stack>
      </Stack>
      </Stack>
    )
    
    case 2: 
    return (
      <Stack className="App Page 2" spacing={2} sx = {{marginX: 20}}>

      <h1 class ='block fixed' >Last but Not Least</h1>

      <Stack className ='block fixed' padding ={2}>

      <h2 class = 'block fixed'><em>🔥 CHALLENGE 3🔥</em></h2>        
      <Grid container spacing ={2} direction ='row' padding ={2}>
        <Grid item xs={8}>
        {/* uAdio */}
        <Stack spacing = {2} >
          <Stack className = 'block fixed' spacing ={2} padding ={2}>
            <Stack direction = 'row' spacing={3}>
              <h3>3 seconds 🔊 </h3>
              <audio  class='block round fixed' src={soundfile} controls draggable ='false' fullWidth/>
            </Stack>
            <Stack direction = 'row' spacing={3}>
              <h3>7 seconds 🔊 </h3>
              <audio  class='block round fixed' src={soundfile} controls draggable ='false' fullWidth/>
            </Stack>
            <Stack direction = 'row' spacing={3}>
              <h3>15 seconds 🔊 </h3>
              <audio  class='block round fixed' src={soundfile} controls draggable ='false' fullWidth/>
            </Stack>
          </Stack>
          <TextField placeholder="Type the name of the song (needs to be exactly the same as it is on Spotify)" className ='block' fullWidth onChange={(e)=>checkAnswer3(e.target.value)}> </TextField>
        </Stack>
        </Grid>
        
        <Grid item xs={4}>
          <Stack className = 'block fixed' spacing ={2}id = 'answer3'  padding ={2}>
            <img src= {images[cyrus]} style= {{height: 230, width: 230}} class ='block fixed'></img>
            <h2 class ='answer3 block fixed' style={{display: 'none'}}>You Guessed it 🔥</h2>
          </Stack>  

        </Grid>
      </Grid>
        
        <Stack spacing ={2}> 
          <h3 className ='block round button3' onClick={Opengift3} style={{display: 'none'}}>See who gave you this song</h3>
          <Stack className ='gift3 block' style={{display: 'none'}} padding= {2}>
            <img src = {cyrus_photo} class ='blocl fixed' style= {{height: 230, width: 230}}></img>
            <p>"If you did not know who, close this app right now and burn it."</p>            
            <h3 className ='block round' onClick={changePage}>See Ultimate Gift</h3>
          </Stack>
        </Stack>
      </Stack>
      </Stack>
    )
    case 3: 
    return (
      <Stack className="App Page 2" spacing={3} sx = {{marginX: 20}}>
        <h1 className ='block fixed'>YOUR FRIENDS LOVE YOU! DON'T EVER FORGET THAT CHRISTOPHER</h1> 
        <h1 className ='block fixed'>IF YOU EVER NEED A REMINDER, OPEN THIS!</h1> 
        <h1 className ='block fixed'>p.s. Kristie also loves you and you need to find a song to listen to with her :)</h1> 
        <h2 class ='block round' onClick ={gohome}>Back to the beginning of the game</h2> 
      </Stack>
    )
  };
}

export default App;
