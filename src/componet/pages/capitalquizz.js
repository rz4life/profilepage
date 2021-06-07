import image from '../pages/capitalquizz.jpg'
const CapitalQuizz = () =>{

    return(
        <div className = 'pages'>
            <div className = 'skill'>
                <h2>Capital Quizz</h2>
                <img className = 'image' src = {image}/>

                <h3 className = 'hometext'>A game Project where the user gets to try how many capital of each country they can get right in 1 minute</h3>
                <h5 className = 'hometext'>Technology used:- Vanilla Java Script, CSS, HTML</h5>
                <h5>
                    <a href = "https://github.com/rz4life/project1"> Link to Repo </a>
                </h5>
            </div>
        </div>

    )


} 

export default CapitalQuizz