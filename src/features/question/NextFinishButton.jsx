import { motion } from "motion/react"

import { useQuiz } from "../../context/QuizContext";
import { Button } from "../../ui/Button";

const finishVariants = {
    hidden: {
        opacity: 0,
        rotate: 30
    },
    visible: {
        opacity: 1,
        rotate: 0,
        transition: { duration: 1, ease: 'easeInOut', type: 'spring', stiffness: 150 }
    }
}

const nextVariants = {
    hidden: {
        opacity: 0,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: 'easeInOut', type: 'spring', stiffness: 150 }
    }
}

export const NextFinishButton = () => {
    const { answer, dispatch, numQuestions, index } = useQuiz();
    if (answer === null) return null;
    if (index < numQuestions - 1)
        return (
            <motion.div className="flex justify-center mt-6"
                variants={nextVariants}
                initial="hidden"
                animate="visible"
            >
                <Button onclick={() => dispatch({ type: 'nextQuestion' })}>
                    next
                </Button>
            </motion.div>

        )
    if (index === numQuestions - 1)
        return (
            <motion.div className="flex justify-center mt-6"
                variants={finishVariants}
                initial="hidden"
                animate='visible'
            >
                <Button onclick={() => dispatch({ type: 'finish' })}>
                    finish
                </Button>
            </motion.div>
        )
}

