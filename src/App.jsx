
import './App.css'

function App() {
  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target.name.value)
    console.log(e.target.email.value)
    console.log(e.target.phone.value)
    console.log("submit button")
  }

  return (
    <>
      <h1 className='text-4xl'>Create Form</h1>
      <form onSubmit={handleSubmit}>
        <input className='input border  mb-5 bg-gray-200' type="text" name="name" /> <br />
        <input className='input border mb-5 bg-gray-200' type="email" name="email" /> <br />
        <input className='input border mb-5 bg-gray-200' type="number" name="phone" /> <br />
        <button className='btn'>Submit</button>
      </form>
      
    </>
  )
}

export default App
