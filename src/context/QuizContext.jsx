import { createContext, useContext, useReducer } from "react";
import { questionsArr } from "../ui/questions";


const QuizContext = createContext();

const SECS_PER_QUESTION = 18


const initialState = {
    questions: questionsArr,
    status: 'ready',
    index: 0,
    answer: null,
    points: 0,
    secondsRemaining: null,
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'start':
            return { ...state, status: 'active', secondsRemaining: state.questions.length * SECS_PER_QUESTION };
        case 'newAnswer': {
            const question = state.questions[state.index];
            return { ...state, answer: action.payload, points: action.payload === question.correctOption ? state.points + question.points : state.points };

        }
        case 'nextQuestion':
            return { ...state, index: state.index + 1, answer: null }
        case 'tick':
            return {
                ...state, secondsRemaining: state.secondsRemaining - 1,
                status: state.secondsRemaining === 0 ? 'finished' : state.status
            }
        case 'finish':
            return { ...state, status: 'finished' }
        case 'restart':
            return { ...initialState, questions: state.questions, status: 'ready' }
        default:
            throw new Error('action unknown');
    }
}
const QuizProvider = ({ children }) => {
    const [{ questions, status, index, answer, points, secondsRemaining }, dispatch] = useReducer(reducer, initialState);
    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0)
    return <QuizContext.Provider value={{
        questions,
        status,
        index,
        answer,
        points,
        secondsRemaining,
        numQuestions,
        maxPossiblePoints,

        dispatch
    }}>
        {children}
    </QuizContext.Provider>

}


const useQuiz = () => {
    const context = useContext(QuizContext)
    if (context === null) throw new Error("useQuiz should be used in QuizProvider");
    return context
}

export { QuizProvider, useQuiz }