import { motion } from "motion/react"

import logoReact from '../../assets/react.webp'
import { useQuiz } from '../../context/QuizContext'

export const Start = () => {
    const { dispatch, numQuestions } = useQuiz()
    return (
        <>
            <div className='flex items-center justify-center h-[90vh]'>
                <div className="= text-[#f2f2f2] flex justify-center items-center text-center flex-col">
                    <motion.img src={logoReact} alt='logo react' className='w-[270px]'
                        animate={{ rotate: 360 }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />
                    <h2 className="text-[4.2rem]">welcome to</h2>
                    <h2 id='text-start-page' className="text-[4.2rem] -mt-6">react Quiz</h2>
                    <span className='text-2xl'>{numQuestions} question</span>
                    <button onClick={() => dispatch({ type: 'start' })} id="button-start-page" className='translate-y-7 rounded-3xl outline-none text-3xl w-[300px] h-[5rem] text-center cursor-pointer'>play now</button>
                </div>
            </div>
        </>

    )
}


