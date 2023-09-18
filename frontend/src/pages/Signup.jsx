import { useState } from "react";
import axios from "axios";



const Signup = () => {

  const[name, SetName] = useState();
  const[email, SetEmail] = useState();
  const[password, SetPass] = useState();

    const handleSubmit = async(e) => {

      e.preventDefault();
         const res = await axios.post("http://127.0.0.1:5000/register",{
          name,email,password
         });
       console.log(res);
      

    } 

    return (
        <>
        <div className="container">
            <div className="card rounded-5 w-50 m-auto mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            

<main className="form-signin w-100 m-auto mt-5">
  <form className="signup  form-control-lg  " onSubmit={handleSubmit}>
    <center>
        <a href="/">
    <img
      className="mb-4"
      src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
      alt=""
      width={200}
      height={80}
    />

</a>
    
    <h1 className="h3 mb-3 fw-bold ">Please Sign in</h1>
    
    <div className="form-floating mb-3 w-50">
      <input
        type="text"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        onKeyUp={(e) => SetName(e.target.value)}
      />
      <label htmlFor="floatingInput">Name</label>
    </div>

    
    <div className="form-floating mb-3 w-50">
      <input
        type="email"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        onKeyUp={(e) => SetEmail(e.target.value)}
      />
      <label htmlFor="floatingInput">Email address</label>
    </div>

    
    <div className="form-floating mb-3 w-50">
      <input
        type="Password"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        onKeyUp={(e) => SetPass(e.target.value)}
      />
      <label htmlFor="floatingInput">Pssword</label>
    </div>
  
   
    <button className="btn btn-danger w-50 py-2 mt-3" type="submit">
      Submit
    </button>
    <a href="/Login">
        <p className="text-danger fw-medium mt-3">Already Have An Account</p>
    </a>
    <p className=" mb-3 text-body-secondary">© 2017–2023</p>
    </center>
  </form>
</main>
</div>
</div>
</>
    )
}

export default Signup
