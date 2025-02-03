import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { toast, Bounce } from "react-toastify";
import UserContext from "../context/UserContext";

const Signup = () => {
    
  return (
    <div className='bg-blue-400 h-screen w-screen'>
        <div>Signup</div>
        <MyForm/>
    </div>
  )
}

function MyForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const {setUser} = useContext(UserContext);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    for(let key in inputs) {
      if(inputs[key]=='') {
        toast.error(`⚠️ Please fill in ${key}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "light",
          transition: Bounce,
        });
        return; 
      }
    }
    sendSubmit()
  }
 
  const sendSubmit = async () => {
    try {
      toast.info('Signing up!', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(inputs)
      })

      if(!response.ok) {
        throw new Error('Server error!');
        
      }

      const data = await response.json();
      console.log("data is ", data)
      if (data.success) {
        setUser(data.user)
        toast.success('Signup successful!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        console.log('Signup successful')
        setTimeout(()=> {
          navigate('/dashboard')
        },1000)
        
      }

    } catch(error) {
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className='outline-black flex flex-col items-center p-4 gap-2'>
      <label htmlFor="username">Enter your name: </label>
      <input 
        type="text"
        name="username"
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      
      <label htmlFor="email">Enter your email: </label>
        <input 
          type="email" 
          name="email"
          value={inputs.email || ""} 
          onChange={handleChange}
        />
      
      <label htmlFor="password">Enter your password: </label>
        <input 
          type="password" 
          name="password"
          value={inputs.password || ""} 
          onChange={handleChange}
        />
      
      <button
      type='submit'
      className='bg-black text-white hover:bg-red-500 rounded-xl p-2' 
      >Submit</button>
    </form>
  )
}

export default Signup