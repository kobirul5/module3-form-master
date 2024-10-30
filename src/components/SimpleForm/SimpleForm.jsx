
const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
        console.log("submit button")
      }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='input border  mb-5 bg-gray-200' type="text" name="name" /> <br />
                <input className='input border mb-5 bg-gray-200' type="email" name="email" /> <br />
                <input className='input border mb-5 bg-gray-200' type="number" name="phone" /> <br />
                <input type="submit" value="submit" />
                {/* <button className='btn'>Submit</button> */}
            </form>
        </div>
    );
};

export default SimpleForm;