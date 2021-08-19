import { Button } from "@chakra-ui/button"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { modal, userEmail, forgotPassModal } from "./store/atom"

export const LoginInputForm = () => {
    const [show, setShow]                 = useState(false);
    const [disabled, setDisabled]         = useState(true);
    const initialValues                   = {email: "", password: "" };
    const [formValues, setFormValues]     = useState(initialValues);
    const [formErrors, setFormErrors]     = useState({});
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [, setEmail]                    = useAtom(userEmail);
    const [, setShowModal]                = useAtom(modal);
    const [, setShowForgotPasswordModal]  = useAtom(forgotPassModal);
    const history                         = useHistory();


    const handleClick = () => setShow(!show);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleForgotPassword = () => {
        setShowForgotPasswordModal(true);
    }

    useEffect(() => {
        const {email, password} = formValues;
        const isTrue = email && password;
        if (isTrue) { 
            setDisabled(false); 
            return ;
        }
        setDisabled(true);
    }, [formValues.email, formValues.password]);


    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting){
            setEmail(formValues.email);
            setShowModal(true);
            history.push("/dashboard");
            return;
        }
    },[formErrors]);


    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) errors.email = "Cannot be blank";
        if(!regex.test(values.email)) errors.email = "Invalid email format";
        if (!values.password) errors.password = "Cannot be blank";
        if(values.password.length < 4) errors.password = "Password must be more than 4 characters";
        return errors;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    }

    return (
        <>
        <form>
            <InputGroup size="md" className='group'>
                <label>Email address</label>
                <Input variant="flushed" placeholder="Enter email address" 
                    size="sm" value={formValues.email} name="email"
                    onChange={handleChange} />
                { formErrors.email && (<span className="error">{formErrors.email}</span>) }
            </InputGroup> 

            <InputGroup size="md" className='group'>
                <Input variant="flushed" size="sm" 
                    pr="4.5rem" type={show ? "text" : "password"}
                    value={formValues.password} name="password"
                    onChange={handleChange}
                    placeholder="Enter password"/>

                <InputRightElement width="4.5rem">
                    <Button  variant="ghost" size="xs" 
                        fontWeight="light" color="gray.600" onClick={handleClick}>
                        {show ? <ViewOffIcon/> : <ViewIcon/>}
                    </Button>
                </InputRightElement>
                { formErrors.password && (<span className="error">{formErrors.password}</span>) }
            </InputGroup>
            <div className="buttons">
                <Button onClick={handleSubmit} isDisabled={disabled}
                    fontWeight="light" padding="5px 30px" colorScheme="blue"
                    size="sm" bg="#06f">Login
                </Button>
                <Button onClick={handleForgotPassword} fontWeight="light"  colorScheme="blue" 
                    size="sm" variant="ghost">Forgot password
                </Button>
            </div> 
        </form>
        </>
    )
}