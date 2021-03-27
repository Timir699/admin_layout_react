import Side_logo from './side_logo/Sidelogo'
import Side_home from './side_home/Side_home'
import Side_mail from './side_mail/Side_mail'


let Sidebar_header = () => {
    return (
        <div style = {{height: "10vh", background : "#16a085", display : "flex",alignItems: "center"}} >
            <Side_logo />
            <Side_home />
            <Side_mail />

        </div>
    )
}

export default Sidebar_header