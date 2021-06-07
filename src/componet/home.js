import React from 'react'
import picture from '../profile.jpg'
const Home = () =>{

    return(
        <div className = 'pages'>
            <div className = 'home'>
               
                <img className = 'picture' src = {picture}/>
                <h3 className = 'hometext'>Hi, my name is Abdulrazaq Alagbada. I am a full stack Software developer originally from Nigeria and currently in Austin, Texas. I am a senior at The University of Texas At San Antonio and just completed my 480 hour software engineering immersive course. I have a passion for finding solutions to problems with complex answers, whether it be work or life. A background in sales with an entrepreneur spirit, I am a firm believer that the day we stop learning is the day we stop living. </h3>

            </div>
        
        
        </div>
    )


}

export default Home