import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
      
      }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} value={"Kobirul Islam"} className='input border  mb-5 bg-gray-200' type="text" name="name" /> <br />
                <input ref={emailRef} className='input border mb-5 bg-gray-200' type="email" name="email" /> <br />
                <input ref={passwordRef} className='input border mb-5 bg-gray-200' type="password" name="password" /> <br />
                <input type="submit" value="submit" />
                {/* <button className='btn'>Submit</button> */}
            </form>
        </div>
    );
};

export default RefForm;