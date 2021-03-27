
import Header_menu from './header_menu/Header_menu'
import Header_notification from './header_notification/Header_notification'
import Header_profile from './header_profile/Header_profile'
import Header_search from './header_search/Header_search'

let Main_header = () => {
    return (
        <div style = {{ 
            background : "#30336b",
            height: "10vh", 
            display : "flex",
            alignItems : "center"
            }}>
            <Header_menu />
            <Header_notification />
            <Header_search />
            <Header_profile />
        </div>
    )
}

export default Main_header