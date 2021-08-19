import { Button } from "@chakra-ui/button";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons"
import { Input, InputGroup } from "@chakra-ui/input";
import { useState } from "react";
import { SlideDown } from "./SlideDown"

export const  ForgotPassModal = ({showModal = false, shouldClose}) => {
    const [email, setEmail]     = useState('');
    const [sent, setSent]       = useState(false);
    const pStyles               = { fontSize: ".8em", color: 'gray', marginBottom: "15px" }

    if (!showModal) return false;

    const handleClose = () => {
        setSent(false);
        setEmail("");
        shouldClose(true);
    }

    const handleChange = (e) => {
        const {value} = e.target;
        setEmail(value);
    }

    const handleSend = () => {
        if (!email) return;
        setSent(true);
    }
    return(
        <SlideDown className="goal-completion">
        <div className="goal-completion__container">
            <div style={{width: "100%"}} className="goal-completion__content">
                <CloseIcon onClick={handleClose}/>
                <div style={{gridAutoFlow: "row", width: '100%', justifyContent: 'center' }} className="main">
                    <h1 style={{fontSize: "2em"}}>Reset password</h1>
                    <p style={pStyles}>
                        Enter the email associated with your account<br/>
                        and we'll send an email with instructions to reset your password.
                    </p>
                    {sent ?
                        <p style={{display: "flex", gap: "10px"}}><span><CheckIcon color="#06f"/></span>Check your mail</p>
                        :
                        <form style={{display: 'grid', gap: '20px' }}>
                            <InputGroup size="md" className='group' style={{flexDirection: "column", gap: "10px"}}>
                                <label>Email address</label>
                                <Input variant="flushed" placeholder="Enter email address" 
                                    size="sm" value={email} name="email" onChange={handleChange} />
                            </InputGroup> 
                            <Button onClick={handleSend} size="sm" colorScheme="blue">Send instruction</Button>
                        </form>
                    }       
                </div>
            </div>
        </div>
    </SlideDown>
    )
}