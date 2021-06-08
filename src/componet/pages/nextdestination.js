import image from '../pages/nextdestination.png'

const NextDestination = () =>{

    return(
        <div className = 'pages'>
            <div className = 'nextdestinationskill'>
                <h2>Next Destination</h2>
                <img className = 'image' src = {image}/>

                <h3 className = 'hometext'>This Project was designed to help the user find their Next Destination based on what they already like by showing the user images from different places and having them choose their favorites </h3>
                <h5 className = 'hometext'>Technology used:- React, Express, Sequlize, Node JS</h5>
                <h5>
                    <a href = "https://github.com/rz4life/solo-project2frontend"> Link to Frontend Repo </a>
                </h5>
                <h5>
                    <a href = "https://github.com/rz4life/solo-project2backend"> Link to Backend Repo </a>
                </h5>
                <h5>
                    <a href = "https://nextdestination.herokuapp.com"> Link to Heroku App </a>
                </h5>
            </div>
        </div>
    )


} 

export default NextDestination