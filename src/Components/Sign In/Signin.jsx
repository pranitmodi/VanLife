import './signIn.css'

const Signin = () => {
  return (
    <div className="signin_main">
        <h1>Sign in to your account</h1>
        <div className="input_text">
            <input placeholder='Email Address' type="text" />
            <input placeholder='Password' type="text" />
        </div>
        <div className="cta">
            Out of service!
        </div>
        <p>Don’t have an account? <span>Create one now</span></p>
    </div>
  )
}

export default Signin