import { useQuiz } from "../../context/QuizContext"
import { Correct } from "../../icons/Correct"
import { Incorrect } from "../../icons/Incorrect"

export const Options = ({ questions }) => {
    const { dispatch, answer } = useQuiz()

    const incorrect = (index) => answer === index && answer !== questions.correctOption
    const correct = (index) => answer === index && answer === questions.correctOption
    return (
        <div className="flex flex-col gap-4 mt-8">
            {questions.options.map((option, index) => <button onClick={() => dispatch({ type: 'newAnswer', payload: index })}
                className={`flex text-[#289fc0] bg-[#1a1a1d] w-[260px] relative h-20 items-center justify-center rounded-3xl text-[15px] cursor-pointer
                 ${index === answer && 'scale-[0.9]'}   
                 ${correct(index) && "bg-[#9bffa5] text-[#333]"} ${incorrect(index) && 'bg-[#ff6868] text-[#333]'} `} key={option} >
                {incorrect(index) && <div className="absolute right-4"><Incorrect /></div>}
                {option}
                {correct(index) && <div className="absolute right-4"><Correct /></div>}
            </button>)
            }
        </div >
    )
}

