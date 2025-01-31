import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Login</div>
      <button onClick={() => {navigate('/signup')}}>go to signup</button>
    </>
  )
}

export default Login