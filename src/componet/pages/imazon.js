import image from '../pages/imazon.png'

const Imazon = () =>{

    return(

        <div className = 'pages'>
        <div className = 'nextdestinationskill'>
            <h2>Imazon</h2>
            <img className = 'image' src = {image}/>

            <h3 className = 'hometext'> This was a group project with 2 other developers, it is meant to be a clone of the great Amazon website, where users can shop new iteams and pay for them. </h3>
            <h5 className = 'hometext'>Technology used:- React, Express, Sequlize, Node JS</h5>
            <h5>
                <a href = "https://github.com/rz4life/imazon-frontend"> Link to Frontend Repo </a>
            </h5>
    
            <h5>
                <a href = "https://imazon2.herokuapp.com"> Link to Heroku App </a>
            </h5>
        </div>
    </div>


    )


} 

export default Imazon