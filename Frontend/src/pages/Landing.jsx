import { useNavigate } from "react-router-dom"

const Landing = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Landing page</div>
      <button onClick={() => {navigate('/login')}}>go to login</button>
    </>
  )
}

export default Landing