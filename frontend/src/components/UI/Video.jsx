const Video = (props) => {
  return (
      <>
  <div className="relative card border-light" >
  <a href={"/Videopage/"+props.video.id}>

<img src={props.video.thumbnail} className="card-img-top rounded-2" alt="" />

<div className="d-flex">
  <img src="../assets/image/Red.jpg" className="rounded-pill mt-2"
 width="41" 
 height="41" border="0" alt=""/>
    <h5 className="card-title fw-bold text-black fs-6 mt-3 ms-3">{props.video.title}</h5>
    </div></a>
  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  <h5 className="fw-normal text-gray fs-6 ms-5 ps-2">{props.video.channel_name} </h5>
    <h5 className=" fw-normal text-gray fs-6 ms-5 ps-2">23M Views • 4 Days Ago  </h5>
</div>
        
 </>
  )
}

export default Video;