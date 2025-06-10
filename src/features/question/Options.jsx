import { useQuiz } from "../../context/QuizContext"

export const Options = ({ questions }) => {
    const { dispatch, answer } = useQuiz()
    const hasAnswered = answer !== null
    return (
        <div className="flex flex-col gap-4 mt-8">
            {questions.options.map((option, index) => <button onClick={() => dispatch({ type: 'newAnswer', payload: index })}
                disabled={hasAnswered}
                className={`btn-quiz
                 ${index === answer ? 'answer' : ''}   
                ${hasAnswered && index === questions.correctOption ? "correct" : ''}  ${hasAnswered && index !== questions.correctOption ? 'wrong' : ''}`} key={option} >{option}</button>)
            }
        </div >
    )
}

