
import Navbar from '../../../components/header/Navbar';
import { useEffect,useState } from 'react'

function Videopage() {
  const [video, setVideo] = useState({}); 

  useEffect(() => {
       
    const params= window.location.pathname.split('/Videopage/');
      
    VideoData.forEach(item => {
      if(item.id==params[1]) {
       //   console.log(item);
          setVideo(item);
      }
    })
 
  },[])

  return (
    <>
     <Navbar/>
     <div className='ss d-flex'>
 
</div>

<div className='pop ms-5 mt-3'>
<iframe width="1000" height="500" src={video.video_url} className='rounded-4' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

      
    </>
  )
}

export default Videopage
