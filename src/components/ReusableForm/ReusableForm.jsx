
const ReusableForm = ({fromTitle, submitButton, handleSubmit, children}) => {

    const handleGetSubmitInfo= (e) => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }
    
    return (
        <div>
            {children}
            <form onSubmit={handleGetSubmitInfo}>
                <input className='input border  mb-5 bg-gray-200' type="text" name="name" /> <br />
                <input className='input border mb-5 bg-gray-200' type="email" name="email" /> <br />
                <input className='input border mb-5 bg-gray-200' type="password" name="password" /> <br />
                <input className="btn" type="submit" value={submitButton} />
                {/* <button className='btn'>Submit</button> */}
            </form>
        </div>
    );
};

export default ReusableForm;