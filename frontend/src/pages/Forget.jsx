const Forget = () => {
    return (
        <>
        <div className="container">
            <div className="card rounded-5 w-50 m-auto mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            

<main className="form-signin w-100 m-auto mt-5">
  <form>
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
    
    <h1 className="h3 mb-3 fw-bold ">Create New Password</h1>
    
    <div className="form-floating w-50">
      <input
        type="email"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating w-50 mt-2 ">
      <input
        type="password"
        className="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <div className="form-floating w-50 mt-2 ">
      <input
        type="password"
        className="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label htmlFor="floatingPassword">Confirm Password</label>
    </div>
   
    <button className="btn btn-danger w-50 py-2" type="submit">
      Login
    </button>
    <a href="/Signin">
        <h5 className="text-danger fw-medium mt-3 fs-6">Create New Account</h5>
    </a>
    <a href="/Login">
        <h5 className="text-danger fw-medium fs-6">Already Have An Account</h5>
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

export default Forget
