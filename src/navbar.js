import {Link} from 'react-router-dom'

const Navbar = () =>{

    return(
        <div>
            
            <Link to = '/home' className = 'navtext'> Home Page</Link>
            
            <Link to = '/skill' className = 'navtext'> Skills</Link>
            
            <Link to = '/project' className = 'navtext'> Projects</Link>
            
            <Link to = '/contact' className = 'navtext'> Contact</Link>
        </div>
    )

}
export default Navbar