import { useEffect } from "react"
import { motion } from "motion/react"

import { useQuiz } from "../../context/QuizContext"


const containerVariants = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeInOut' }
    }
}

export const Timer = () => {
    const { dispatch, secondsRemaining } = useQuiz();
    console.log(secondsRemaining)
    const mins = Math.floor(secondsRemaining / 60)
    const seconds = secondsRemaining % 60
    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: 'tick' })
        }, 1000)
        return () => clearInterval(id)
    }, [dispatch])
    return (
        <motion.div className="flex justify-center mt-10 sm:mt-28  items-center"
            variants={containerVariants}
            initial='hidden'
            animate='visible'
        >
            <div id="timer" className="text-center text-[15px] w-[110px] h-[2.5rem]  flex items-center justify-center" >
                <span className="translate-x-[13px]">
                    {mins < 10 && "0"}{mins} : {seconds < 10 && "0"}
                    {seconds}
                </span>
            </div>
        </motion.div>
    )
}

