import Main from './main/Main'
import Sidebar from './sidebar/Sidebar'


let Components = () => {
    return (
        <div style = {{display : "flex"}}>
            <Sidebar/>
            <Main/>
        </div>
    )
}

export default Components