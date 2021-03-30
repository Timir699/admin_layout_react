import About_left from './about_left/About_left'
import About_right from './about_right/About_right'

let About_sec = () => {
    return (
        <div style = {{display : "flex", padding : "80px 0px"}}>
            <About_left />
            <About_right />
        </div>
    )
}

export default About_sec