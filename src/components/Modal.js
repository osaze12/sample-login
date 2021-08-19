import { CheckCircleIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { SlideDown } from "./SlideDown";

export const Modal = ({showModal = false, shouldClose}) => {
    if (!showModal) return false;
    
    const handleClose = () => {
        shouldClose(true);
    }

    return (
        <SlideDown className="goal-completion">
        <div className="goal-completion__container">
            <div className="goal-completion__content">
                <SmallCloseIcon onClick={handleClose}/>
                <div className="main">
                    <CheckCircleIcon color="blue.400" />
                    <h1>Logged in successfully</h1>
                </div>
            </div>
        </div>
    </SlideDown>
    )
}