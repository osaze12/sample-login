import { LoginInputForm } from "./LoginInputForm"
import { LogoSvg } from "./LogoSvg"
import GoogleButton from 'react-google-button'
import { AngleRightSvg } from "./AngleRightSvg"

export const Login = () => {
    const googleStyle = { fontSize: ".9em", width: "190px", transform: "scale(.89)" };
    
    return (
        <div className="login">
            <div className="login__left">
                <div className="left-desc">
                    <h1>Revolution <br/>in Sales</h1>
                    <p>Lorem e make it easy for anyone to maintain their 
                    investmente make it easy for anyone to maintain their investment</p>
                </div>
                <div className="right-angle">
                    <AngleRightSvg/>
                </div>
                <div className="logo">
                    <LogoSvg/>
                </div>
            
            </div>
            <div className="login__right">
                <div className="login__right-inner">
                    <div className="mobile-logo">
                        <LogoSvg dark={true}/>
                    </div>
                    <h2>Welcome to <span className="brand">The Peer</span></h2>
                    <p>We make it easy for anyone to maintain their investment</p>
                    <LoginInputForm/>
                </div>
                <div className="google-sign-in">
                    <GoogleButton style={googleStyle} onClick={() => { alert("Signing in") }} />
                </div>
            </div>
        </div>
    )
}