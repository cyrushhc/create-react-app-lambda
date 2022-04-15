import React, {useState} from "react"
import "./App.css"
import Song101 from './assets/song101.m4a'; 
import Song102 from './assets/song102.m4a'; 
import Song103 from './assets/song103.m4a'; 
import Song201 from './assets/song201.m4a'; 
import Song202 from './assets/song202.m4a'; 
import Song203 from './assets/song203.m4a'; 
import Song301 from './assets/song301.m4a'; 
import Song302 from './assets/song302.m4a'; 
import Song303 from './assets/song303.m4a'; 

import Stack from '@mui/material/Stack'
import { TextField } from "@mui/material";
import image from './assets/Rectangle 1.png';
import mardy from './assets/Mardy Bum.png';
import rain from './assets/Rain.png';
import fish from './assets/Fish.png';
import anila_photo from './assets/anila_photo.jpg'
import anna_photo from './assets/anna_photo.png'
import cyrus_photo from './assets/cyrus_photo.png'
import final_gift from'./assets/final_gift.png'

import Grid from '@mui/material/Grid'


function App(){

  const [page, setPage] = useState(0)
  const [anila, setAnila] = useState(0)
  const [anna, setAnna]  = useState(0)
  const [cyrus, setCyrus] = useState(0)
  const images = [image, mardy, rain, fish];
  const soundfile =[Song101, Song102,Song103,Song201,Song202,Song203,Song301,Song302,Song303];

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
  }

  function gohome(){
    setPage(0)
  }

  switch(page){
    default:
      break;  
    case 0: return (
      <Stack className="App" spacing={2} sx = {{marginX: 20}}>
        {/* Qusestion */}
        <h1 class ='block fixed accent' >Welcome to a little game created by your friends</h1>
        <Stack className ='block fixed' padding={2}>
          <h2>Game Rule</h2>
          <p>In these challenges, your friends have selected a song that remind them of you. You will get three versions of the song. First one is the first 3 seconds, second one us the first 7 seconds, and third one...you know the gist. I hope you will be able to guess the songs right. If not, you will never live to see the ultimate gift. Remember. It has to be the exact title of the song as found on Spotify :) Please don't have typo as you usually do</p>
        </Stack>
      
          {/* Main questions area */}
  
          <Stack className ='block fixed' padding ={2}>
  
          <h2 class = 'block fixed accent'><em> CHALLENGE 1 </em></h2>        
          <Grid container spacing ={2} direction ='row' padding ={2}>
            <Grid item xs={8}>
            {/* uAdio */}
            <Stack spacing = {2} >
              <Stack className = 'block fixed' spacing ={2} padding ={2}>
                <Stack direction = 'row' spacing={3}>
                  <h3>3 seconds 🔊 </h3>
                  <audio  class='block round fixed' src={soundfile[0]} controls draggable ='false' fullWidth/>
                </Stack>
                <Stack direction = 'row' spacing={3}>
                  <h3>7 seconds 🔊 </h3>
                  <audio  class='block round fixed' src={soundfile[1]} controls draggable ='false' fullWidth/>
                </Stack>
                <Stack direction = 'row' spacing={3}>
                  <h3>15 seconds 🔊 </h3>
                  <audio  class='block round fixed' src={soundfile[2]} controls draggable ='false' fullWidth/>
                </Stack>
              
              </Stack>
              <TextField placeholder="Type the name of the song (needs to be exactly the same as it is on Spotify)" className ='block' fullWidth onChange={(e)=>checkAnswer1(e.target.value)}> </TextField>
            </Stack>
            </Grid>
            
            <Grid item xs={4}>
              <Stack className = 'block fixed accent' spacing ={2}id = 'answer1'  padding ={2}>
                <img src= {images[anila]} style= {{height: 230, width: 230}} class ='block fixed' alt =''></img>
                <h2 id= 'answer1' class ='answer1 block fixed' style={{display: 'none'}}>You Guessed it 🔥</h2>
              </Stack>  
  
            </Grid>
          </Grid>
            
            <Stack spacing ={2}> 
            <h3 className ='block round button1' onClick={Opengift1} style={{display: 'none'}}>See who gave you this song</h3>
            <Stack direction ='row' className ='gift1 block accent' style={{display: 'none'}} padding= {2}>
              <img src = {anila_photo} class ='block fixed' style= {{height: 230, width: 230}}alt =''></img>
              <p class ='block fixed'>"This song reminds me of him because I love him even when he's being a mardy bum"</p>            
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

      <h2 class = 'block fixed accent'><em> CHALLENGE 2 </em></h2>        
      <Grid container spacing ={2} direction ='row' padding ={2}>
        <Grid item xs={8}>
        {/* uAdio */}
        <Stack spacing = {2} >
          <Stack className = 'block fixed' spacing ={2} padding ={2}>
            <Stack direction = 'row' spacing={3}>
              <h3>3 seconds 🔊 </h3>
              <audio  class='block round fixed' src={soundfile[3]} controls draggable ='false' fullWidth/>
            </Stack>
            <Stack direction = 'row' spacing={3}>
              <h3>7 seconds 🔊 </h3>
              <audio  class='block round fixed' src={soundfile[4]} controls draggable ='false' fullWidth/>
            </Stack>
            <Stack direction = 'row' spacing={3}>
              <h3>15 seconds 🔊 </h3>
              <audio  class='block round fixed' src={soundfile[5]} controls draggable ='false' fullWidth/>
            </Stack>
          
          </Stack>
          <TextField placeholder="Type the name of the song (needs to be exactly the same as it is on Spotify)" className ='block' fullWidth onChange={(e)=>checkAnswer2(e.target.value)}> </TextField>
        </Stack>
        </Grid>
        
        <Grid item xs={4}>
          <Stack className = 'block fixed accent' spacing ={2}id = 'answer1'  padding ={2}>
            <img src= {images[anna]} style= {{height: 230, width: 230}} class ='block fixed'alt =''></img>
            <h2 id= 'answer2' class ='answer2 block fixed' style={{display: 'none'}}>You Guessed it 🔥</h2>
          </Stack>  

        </Grid>
      </Grid>
        
        <Stack spacing ={2}> 
        <h3 className ='block round button2' onClick={Opengift2} style={{display: 'none'}}>See who gave you this song</h3>
          <Stack direction ='row' className ='gift2 block accent' style={{display: 'none'}} padding= {2} id ='giftstack'>
            <img src = {anna_photo} class ='block fixed' style= {{height: 230, width: 230}}alt =''></img>
            <p class ='block fixed'>"Everytime I hear this it reminds me of second year when we watched the film together for the first time and saw the student production at the gala. Was so much fun and I miss those chill film watching evenings and of course the subsequent late night discussions - maybe the good morning song would have been more appropriate... Anyway I'm super excited to be getting them back again really soon!! (not to mention all those trips to indie cinemas we'll definitely get round to)"</p>            
            <h3 className ='block round' onClick={changePage}>Next Challenge</h3>
          </Stack>
          
        </Stack>
      </Stack>
      </Stack>
    )
    
    case 2: 
    return (
      <Stack className="App Page 2" spacing={2} sx = {{marginX: 20}}>

      <h1 class ='block fixed accent' >Last but Not Least</h1>

      <Stack className ='block fixed' padding ={2}>

      <h2 class = 'block fixed accent'><em> CHALLENGE 3 </em></h2>        
      <Grid container spacing ={2} direction ='row' padding ={2}>
        <Grid item xs={8}>
        {/* uAdio */}
        <Stack spacing = {2} >
          <Stack className = 'block fixed' spacing ={2} padding ={2}>
            <Stack direction = 'row' spacing={3}>
              <h3>3 seconds 🔊 </h3>
              <audio  class='block round fixed' src={soundfile[6]} controls draggable ='false' fullWidth/>
            </Stack>
            <Stack direction = 'row' spacing={3}>
              <h3>7 seconds 🔊 </h3>
              <audio  class='block round fixed' src={soundfile[7]} controls draggable ='false' fullWidth/>
            </Stack>
            <Stack direction = 'row' spacing={3}>
              <h3>15 seconds 🔊 </h3>
              <audio  class='block round fixed' src={soundfile[8]} controls draggable ='false' fullWidth/>
            </Stack>
          </Stack>
          <TextField placeholder="Type the name of the song (needs to be exactly the same as it is on Spotify)" className ='block' fullWidth onChange={(e)=>checkAnswer3(e.target.value)}> </TextField>
        </Stack>
        </Grid>
        
        <Grid item xs={4}>
          <Stack className = 'block fixed accent' spacing ={2}id = 'answer3'  padding ={2}>
            <img src= {images[cyrus]} style= {{height: 230, width: 230}} class ='block fixed'alt =''></img>
            <h2 class ='answer3 block fixed' style={{display: 'none'}}>You Guessed it 🔥</h2>
          </Stack>  

        </Grid>
      </Grid>
        
        <Stack spacing ={2}> 
          <h3 className ='block round button3' onClick={Opengift3} style={{display: 'none'}}>See who gave you this song</h3>
          <Stack direction ='row' className ='gift3 block accent' style={{display: 'none'}} padding= {2}>
            <img src = {cyrus_photo} class ='block fixed' style= {{height: 230, width: 230}}alt =''></img>
            <p class ='block fixed'>"If you did not know who, close this app right now and burn it."</p>            
            <h3 className ='block round' onClick={changePage}>See Ultimate Gift</h3>
          </Stack>
        </Stack>
      </Stack>
      </Stack>
    )
    case 3: 
    return (
      <Stack className="App Page 2" spacing={3} sx = {{marginX: 20}}>
        <h1 className ='block fixed accent'>YOUR FRIENDS LOVE YOU! DON'T EVER FORGET THAT CHRISTOPHER</h1> 
        <h1 className ='block fixed'>IF YOU EVER NEED A REMINDER, OPEN THIS!</h1> 
        <h1 className ='block fixed accent'>p.s. Kristie also loves you and you need to find a song to listen to with her :)</h1> 
        <img src = {final_gift} class ='block fixed' alt =''></img>
        <h2 class ='block round' onClick ={gohome}>Back to the beginning of the game</h2> 
      </Stack>
    )
  };
}

export default App;
