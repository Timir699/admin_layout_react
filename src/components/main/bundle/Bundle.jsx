import Bundle_left from './bundle_left/Bundle_left'
import Bundle_right from './bundle_right/Bundle_right'

let Bundle = () => {
    return (
        <div style = {{
            display : "flex"
        }}>
            <Bundle_left/>
            <Bundle_right/>
        </div>
    )
}

export default Bundle