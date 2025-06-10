import { motion } from "motion/react"

import { useQuiz } from "../../context/QuizContext"

const containerVariants = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 45,
        transition: { duration: 1, ease: 'easeInOut', type: 'spring', delay: 1, stiffness: 130 }
    }
}
export const Progress = () => {
    const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
    return (
        <motion.div className="translate-y-[2.5rem]"
            variants={containerVariants}
            initial='hidden'
            animate='visible'
        >
            <div className="flex items-center justify-center">
                <progress className="w-[83%] sm:w-[90%]" max={numQuestions} value={index + Number(answer !== null)} />
            </div>
            <div className="flex text-[12px] lg:text-sm font-bold  justify-between mt-3 text-white">
                <p className="ml-10"><b>{index + 1}</b> / <b>{numQuestions}</b></p>
                <p className="mr-10"><b>{points}</b> / {maxPossiblePoints} </p>
            </div>
        </motion.div>
    )
}

