import { useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
   const [email,setEmail] = useState('');
   const [password,setPass] = useState('');
   const [error,setError] = useState('');
   const [succes,setSucces] = useState('');


   const navigate = useNavigate();
    
  const handleSubmit = async (e) => {
   e.preventDefault();

   if(email=="" || password==""){
    setError("please fill email and password!");
     return false;
   }
  
   const data = {email, password};
    const user = await axios.post("http://127.0.0.1:5000/login",data);
    console.log(user.data);
    const ani = user.data;

if (ani.status==false){
  setError(ani.msg)
}
if (ani.status==true){
  setSucces(ani.msg)
  // window.location.href("/")

  navigate("/");
}



  }

    return (
        <>
        <div className="container">
            <div className="card rounded-5 w-50 m-auto mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            

<main className="form-signin w-100 m-auto mt-5">
<form className=" bg-login p-3" method="post" onSubmit={handleSubmit}>

    <center>
        <Link to="/">
    <img
      className="mb-4"
      src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
      alt=""
      width={200}
      height={80}
    />

</Link>
    
    <h1 className="h3 mb-3 fw-bold ">Please Log In</h1>
    {error && <div className="alert alert-danger">{error}</div> }
    {succes && <div className="alert alert-success">{succes}</div> }


    <div className="form-floating w-50">
      <input
        type="email"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        onKeyUp={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating w-50 mt-2 ">
      <input
        type="password"
        className="form-control"
        id="floatingPassword"
        placeholder="Password"
        onKeyUp={(e) => setPass(e.target.value)}

      />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <center>
    <div className="form-check my-3">
      <input
        className="form-check-input float-none me-2"
        type="checkbox"
        defaultValue="remember-me"
        id="flexCheckDefault"
      />
      
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
      </center>
    <button className="btn btn-danger w-50 py-2" type="submit">
      Login
    </button>
    <a href="/Signup">
        <h5 className="text-danger fw-medium mt-3 fs-6">Create New Account</h5>
    </a>
    <a href="/Forget">
        <h5 className="text-danger fw-medium fs-6">Forget Password</h5>
    </a>
    <p className="mt-3 mb-3 text-body-secondary">© 2017–2023</p>
    </center>
  </form>
</main>
</div>
</div>
</>
    )
}

export default Login
