import { useContext } from "react"
import UserContext from "../context/UserContext"

const Dashboard = () => {
  const {user} = useContext(UserContext);

  if(!user) return (
  <div 
  className='text-black rounded-sm bg-white font-extrabold font-serif flex flex-col h-screen w-screen items-center justify-center '
  >Please Login or Signup to proceed!
  </div>
  )

  return (
    <>
      <h1>
        {`Welcome ${user?.username}`}
        {user?.email}
      </h1>
    </>
  )
}

export default Dashboard