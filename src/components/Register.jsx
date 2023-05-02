const Register = () => {
    // const [email, setEmail] = useState('')
    // const [pass, setPass] = useState('')
    // const [name, setName] = useState('')

    const handleSubmit = () => {
        e.preventDefault()
        console.log(email);
    }
    return (
        <section>
            <div>
                <h2>Register a new account</h2>
                <form>
                    <div className="form-wrapper">
                        <label htmlFor="name">Enter your name</label>
                        <input type="name" placeholder="Enter your name" id="name" name="name" />
                        <label htmlFor="email">Enter an Email</label>
                        <input type="email" placeholder="Enter an Email" id="email" name="email" />
                        <label htmlFor="password">Enter a password</label>
                        <input type="password" placeholder="Enter a password" id="password" name="password" />
                        <button>Register Account</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register