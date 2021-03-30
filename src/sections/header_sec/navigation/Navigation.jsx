import Logo from './logo/Logo'
import Menu from './menu/Menu'

let Navigation = () => {
    return (
        <div style = {{ 
            display : "flex", 
            alignItems : "center",
            justifyContent : "space-around"
        }}>
            <Logo />
            <Menu />
        </div>
    )
}

export default Navigation