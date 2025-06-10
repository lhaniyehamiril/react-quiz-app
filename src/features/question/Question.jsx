import { motion } from "motion/react"

import { useQuiz } from "../../context/QuizContext";
import { Options } from "./Options";


const containerVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: 'easeInOut' }
    }
}

export const Question = () => {
    const { questions, index } = useQuiz();
    const questionIndex = questions[index];
    return (
        <div className="flex flex-col  items-center justify-center mt-3 ">
            <motion.div className="flex flex-col items-center justify-center text-center mt-[4.2rem] rounded-3xl bg-[#289fc0] w-[83%] sm:w-[535px] py-8"
                variants={containerVariants}
                initial='hidden'
                animate='visible'
            >
                <motion.h3 id="text-question" className="text-[#1a1a1d] mx-6 text-[16px] sm:text-[18px]"

                >{questionIndex.question}</motion.h3>
                <Options questions={questionIndex} />
            </motion.div>
        </div>
    )
}
