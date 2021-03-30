import Header_content from './header_content/Header_content'
import Navigation from './navigation/Navigation'

import Port from '../../assets/img/Port.jpg'




let Header = () => {
    const styles = {
        header : {
            backgroundImage : `url(${Port})`,
            height : "100vh",
            backgroundPosition : "center",
            backgroundSize : "cover",
            backgroundRepeat : "no-repeat",
        },
        content: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          }
    }
    return (
        <div style = {styles.header}>
            <div style = {styles.content} >
                <Navigation />
                <Header_content />
            </div>
        </div>
    )
}


export default Header