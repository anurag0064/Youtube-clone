
import Navbar from '../components/header/Navbar'
import Sidebar from '../components/header/Sidebar'
import Navtag from '../components/header/Navtag'
// import VideoData from '../data/video.json';
import Video from '../components/UI/Video'
import axios from 'axios';
import '../App.css'
import { useEffect, useState } from 'react';

function Home() {

  const [VideoData, setVideoData] = useState([]);

 useEffect(() => {
   uploadVideo();
   uploadTags();
  getVideos();
 },[])

  
  const uploadVideo = async() =>{
    const res = await axios.post('http://127.0.0.1:5000/uploadVideo',
    

      {
        
        
      }
      
    );
   console.log(res.data);
   }

   const uploadTags = async() =>{
    const res = await axios.post('http://127.0.0.1:5000/uploadTags',
    {
      "name" : "Movies"
   });
   console.log(res.data);
   }




  
   const getVideos = async() => {
       const res = await axios.get('http://127.0.0.1:5000/allvideos',);
       setVideoData(res.data.model)
       console.log(res.data);
       
   }
      
  return (
    <>
     <Navbar/>
     <div className='ss d-flex'>
     <div className='asa'>

     <Sidebar/>
     </div>
     <div className='asa '>

     <Navtag/>

      
     <div className='row mt-3 mx-0'>
       {VideoData && VideoData.map(item => {

       return (
        <div className='col-4'>
        <Video video={item}/>
        </div>
       
       )

       })}
     
  </div>

     </div>
     </div>
    
    </>
  )
}

export default Home