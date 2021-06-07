import { Link } from 'react-router-dom'
const Project = () =>{

    return(
        <div className = 'pages'>
                <div className = 'project'>
                    <Link to = '/capitalquizz'>
                            <h5 className = 'eachproject'> Capital Quizz</h5>
                    </Link>
                    <Link to = '/nextdestination'>
                        <h5 className = 'eachproject'> Next Destination</h5>
                    </Link>

                    <Link to = '/keepup'>
                        <h5 className = 'eachproject'> Keep Up</h5>
                    </Link>

                    <Link to = '/imazon'>
                            <h5 className = 'eachproject'> Imazon</h5>
                    </Link>

                    <Link to = '/easternunion'>
                            <h5 className = 'eachproject'> Eastern Union</h5>
                    </Link>

                </div>
        </div>
    )


}

export default Project