import Sidebar_header from './sidebar_header/Sidebar_header'
import Sidebar_profile from './sidebar_profile/Sidebar_profile'
import Dashboard from './dashboard/Dashboard'

let Sidebar = () => {
    return (
        <div style = {{ height : "100vh", width : "20vw", background : "orangered" }} >
            <Sidebar_header />
            <Sidebar_profile />
            <Dashboard /> 
        </div>
    )
}

export default Sidebar