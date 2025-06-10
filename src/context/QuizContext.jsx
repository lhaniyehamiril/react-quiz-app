import { createContext, useContext, useReducer } from "react";


const QuizContext = createContext();



const Questions = [
    {
        question: "which is the most popular JavaScript framework?",
        options: ["Angular", "React"],
        correctOption: 1,
        points: 10
    }
    ,
    {
        question: "which company invented React?",
        options: ["Google", "Facebook"],
        correctOption: 1,
        points: 10
    },
    {
        question: "whats the fundamental building block of React apps?",
        options: ["Components", "Blocks"],
        correctOption: 0,
        points: 10
    },
    {
        question: "whats the name syntax in React components?",
        options: ["FBJ", "JSX"],
        correctOption: 1,
        points: 10
    },
    {
        question: "How does data flow naturally in React apps?",
        options: [
            "From parents to children",
            "The developers decides"
        ],
        correctOption: 0,
        points: 15
    },
    {
        question: "How to pass data into a child component?",
        options: ["Props", "Parameters"],
        correctOption: 0,
        points: 10
    },
    {
        question: "How do you update a components state in React?",
        options: ["render", " setState"],
        correctOption: 0,
        points: 15
    },
    {
        question: "what triggers a UI rerender in React?",
        options: ["Running an effect", "Updating state"],
        correctOption: 1,
        points: 20
    },
    {
        question: "when do we directly touch the DOM in React?",
        options: [
            "need to listen to an event",
            "Almost never"
        ],
        correctOption: 1,
        points: 15
    },
    {
        question: "which hook in React is used for managing state?",
        options: ["useState", "useReducer"],
        correctOption: 0,
        points: 10
    }
]


const SECS_PER_QUESTION = 18


const initialState = {
    questions: Questions,
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
        case 'newAnswer':
            const question = state.questions[state.index];
            return { ...state, answer: action.payload, points: action.payload === question.correctOption ? state.points + question.points : state.points };
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
    if (context === null) throw new Error("quizcontext was used outside of quizprovider");
    return context
}

export { QuizProvider, useQuiz }