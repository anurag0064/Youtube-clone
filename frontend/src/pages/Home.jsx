
import Navbar from '../components/header/Navbar'
import Sidebar from '../components/header/Sidebar'
import Navtag from '../components/header/Navtag'
import VideoData from '../data/video.json';
import Video from '../components/UI/Video'
import '../App.css'

function Home() {


      
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