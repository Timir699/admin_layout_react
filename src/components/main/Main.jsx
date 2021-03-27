import Bundle from './bundle/Bundle'
import Main_header from './main_header/Main_header'
import Sales from './sales/Sales'


let Main = () => {
    return (
        <div style = {{ background : "#2980b9", height: "100vh", width : "80vw"}}>
            <Main_header />
            <Bundle />
            <Sales />  
        </div>
    )
}

export default Main