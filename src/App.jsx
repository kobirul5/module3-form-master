
import './App.css'
import ReusableForm from './components/Reusableform/ReusableForm'
// import RefForm from './components/RefFrom/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {
  const handleSignUpSubmit = data => {
   console.log(data)
  }
  const handleUpdateSubmit = data => {
    console.log(data)
    
  }

  return (
    <>
      <h1 className='text-4xl'>Create Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      <ReusableForm
        fromTitle={"Sign Up"}
        submitButton={"Submit"}
        handleSubmit={handleSignUpSubmit}>
          <div className='my-5'>
            <h1 className='text-3xl font-semibold'>Sign Up</h1>
            <p>please sign Up</p>
          </div>
        </ReusableForm>
      <ReusableForm
        fromTitle={"Update"}
        submitButton={"Update"}
        handleSubmit={handleUpdateSubmit}>
          <div className='my-5'>
            <h1 className='text-3xl font-semibold'>Update</h1>
            <p>Always keep your profile updated</p>
          </div>
        </ReusableForm>

    </>
  )
}

export default App
