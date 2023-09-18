
import Navbar from '../components/header/Navbar'
import '../App.css'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Related from '../components/UI/Related';
function Videopage() {
  const [video, setVideo] = useState({}); 

  useEffect(() => {
    getVideo();
 
  },[])


  const getVideo = async() => {
    const params= window.location.pathname.split('/Videopage/');
    const res = await axios.post('http://127.0.0.1:5000/getvideo',{
      video_id: params[1]
    });
    setVideo(res.data.model)
    console.log(res.data);
    
   }

  return (
    <>
     <Navbar/>
    

    <div className='row d-flex mx-0'>

<div className='col-8  ms-5 mt-3'>
<iframe width="1000" height="500" src={video.video_url} className='rounded-4' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


<div className='col-3 '>

    <Related/>
    
   

</div>
     
    </div>


    


    
    </>
  )
}

export default Videopage;
