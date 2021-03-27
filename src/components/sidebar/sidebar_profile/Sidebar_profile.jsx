import Sidebar_profile_img from './sidebar_profile_img/Sidebar_profile_img'
import Sidebar_profile_name from './sidebar_profile_name/Sidebar_profile_name'


let Sidebar_profile = () => {
    return (
        <div style = {{height: "15vh", background : "#8e44ad", display: "flex", alignItems: "center"}}>
            <Sidebar_profile_img />
            <Sidebar_profile_name/>
        </div>
    )
}

export default Sidebar_profile