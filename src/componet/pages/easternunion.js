import image from '../pages/easternunion.png'

const EasternUnion = () =>{

    return(

        <div className = 'pages'>
            <div className = 'nextdestinationskill'>
                <h2>Eastern Union</h2>
                <img className = 'image' src = {image}/>

                <h3 className = 'hometext'>This was my Final project Before graduating from my Software immersive course, i aimed at making a website where users can send and receive money internationally, and can also convert the most popular currencies to dollar. it was inspired by the world know Western Union which is used in multiple countries today. </h3>
                <h5 className = 'hometext'>Technology used:- React, Express, Sequlize, Node JS</h5>
                <h5>
                    <a href = "https://github.com/rz4life/eastern_Union_Frontend"> Link to Frontend Repo </a>
                </h5>
                <h5>
                    <a href = "https://github.com/rz4life/eastern_Union_BACKEND"> Link to Backend Repo </a>
                </h5>
                <h5>
                    <a href = "https://easternunion.herokuapp.com/"> Link to Heroku App </a>
                </h5>
            </div>
        </div>

    )


} 

export default EasternUnion