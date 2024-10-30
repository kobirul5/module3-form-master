import { useState } from "react";

const StateFulForm = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [name, setName] = useState(null)
    const [error, setError] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        if(password.length < 6){
            setError("Password must be 6 character or longer")
        }
        else{
            setError("")
            console.log(name, email, password)

        }

      }

      const handleNameChange= e =>{
        setName(e.target.value)
      }
      const handleEmail= e =>{
        setEmail(e.target.value)
      }
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }
    return (
        <div>
            <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange}
        className='input border  mb-5 bg-gray-200' type="text" name="name" /> <br />
        <input onChange={handleEmail}
        className='input border mb-5 bg-gray-200' type="email" name="email" /> <br />
        <input onChange={handlePasswordChange}
        className='input border mb-5 bg-gray-200' type="password" name="password" required/> <br />
        <input type="submit"value="submit" />
        {/* <button className='btn'>Submit</button> */}
      </form>


      {
        error && <p>{error}</p>
      }
        </div>
    );
};

export default StateFulForm;