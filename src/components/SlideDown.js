import { motion } from 'framer-motion'

export const SlideDown = ({children, className, wait=null}) => {
    return (
        <motion.section 
            initial={{y: -30, opacity: 0}}
            animate={{y: 0, opacity: 1, transition: {delay: wait ? wait : .3} }}  
            className={className}
        >
            {children}
        </motion.section>
        
    )
}