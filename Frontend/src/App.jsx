import { Outlet } from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import UserContextProvider from "./context/UserContextProvider"
const App = () => {
  return (
    <UserContextProvider>
      <ToastContainer />
      <Outlet/>
    </UserContextProvider>
  )
}

export default App