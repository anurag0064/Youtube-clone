import { useEffect } from "react";
import AlertMsg from "../ui/AlertMsg";
import CopyRight from "../ui/CopyRight";
import Title from "../ui/Title";

const Auth = (props)  => {
  
  useEffect(()=>{

    if(localStorage.getItem('token')){
      window.location.href='/'
    }

  })


    return (
        <>
         <div className="container-fluid bg-light vh-100">
          <div className="container">
          <div className="row">
              <div className="col-4 mx-auto text-center mt-5">
              <a to="/">
    <img
      className="mb-4"
      src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
      alt=""
      width={100}
    />
</a>

<Title data={props.title}/>
<AlertMsg  data={props.alert}/>
              <main className="card border-0 shadow-sm py-2 w-100">
    {props.children}
</main>
<CopyRight/>

              </div>
             
            </div>
        

          </div>
        </div>
        </>
    )

}
export default Auth;