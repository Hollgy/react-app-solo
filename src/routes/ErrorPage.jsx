import { Link } from 'react-router-dom'

const ErrorPage = () => (
    <section>
        <div className='error wrapper'>
            <p>
                Något gick snett
            </p>
            <Link to="/"> återgå till startsidan</Link>
        </div>
    </section>
)
export default ErrorPage