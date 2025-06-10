import { motion } from "motion/react"

import { useQuiz } from '../../context/QuizContext'
import emojiHappy from '../../assets/emoji-happy.webp'
import emojiSad from '../../assets/emoji-Sad.webp'


const b = {
    color: '#173610'
}


const containerVariants = {
    hidden: {
        opacity: 0,
        y: -20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 2, ease: 'easeInOut', type: 'spring', stiffness: 160 }
    }
}

const buttonVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: 'easeInOut', type: 'spring', stiffness: 110, delay: 1 }
    }
}


export const Finished = () => {
    const { points, maxPossiblePoints, dispatch } = useQuiz();
    const percentage = (points / maxPossiblePoints) * 100;
    let emoji;
    if (percentage <= 80) emoji = emojiSad
    if (percentage >= 80) emoji = emojiHappy
    return (
        <div className="flex items-center h-[86vh] gap-3 flex-col justify-center">
            <motion.div className='flex items-center justify-center gap-2 text-[#1a1a1d] text-[16px] lg:text-xl bg-[#289fc0] px-9 py-4 lg:px-[3.5rem] rounded-full'
                variants={containerVariants}
                initial="hidden"
                animate='visible'
            >
                <img src={emoji} className='w-5' />
                <p>  you scored <b style={b}>{points}</b> out of <b style={b}>{maxPossiblePoints}</b></p>
            </motion.div>

            <motion.button onClick={() => dispatch({ type: 'restart' })} className="text-white bg-transparent hover:text-[#289fc0]  outline-none text-[1rem] lg:text-lg"
                variants={buttonVariants}
                initial='hidden'
                animate='visible'
            ><b className="text-[#289fc0]">|</b> restart quiz <b className="text-[#289fc0]">|</b> </motion.button>
        </div>
    )
}
