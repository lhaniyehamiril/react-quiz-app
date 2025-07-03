import { useQuiz } from "./context/QuizContext";
import { StartScreen } from './pages/StartScreen'
import { QuestionScreen } from './pages/QuestionScreen'
import { FinishedScreen } from './pages/FinishedScreen'


const App = () => {
    const { status } = useQuiz()
    return (
        <main>
            {status === 'ready' && <StartScreen />}
            {status === 'active' &&
                <QuestionScreen />
            }
            {status === 'finished' && <FinishedScreen />}
        </main>
    )
}

export default App;