import boxingvideo from "D:/DesktopGIT/Learn-react/ygkboxing/src/videos/homeboxing.mp4";
import logo from 'D:/DesktopGIT/Learn-react/ygkboxing/src/photos/logo.jpg'

export default function Home(){


    return( 
    <>
    
    <video autoPlay loop muted>
        <source src={boxingvideo} type="video/mp4" className = "homevideo"/>
    </video>
    <Biglogo/>

    </>
    )
}

function Biglogo(){
    return(
        <div className = "overlaycontent">
            <img src = {logo} alt = "logo" className = "overlaylogo"/>
            <h1>YGK Boxing</h1>
        </div>
    )

}