import { motion } from "framer-motion"

const Button = (props) => {
    return (
        <motion.button whileHover={{scale: 1.3,}}
        onClick ={props.onClick} 
        style= {{backgroundColor: props.color}} className ='btn'>{props.text}</motion.button>
    )
}

export default Button
