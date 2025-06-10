import { Progress } from "../features/question/Progress"
import { Question } from "../features/question/Question"
import { Timer } from "../features/question/Timer"
import { NextFinishButton } from "../features/question/NextFinishButton"

export const QuestionScreen = ({ questions }) => {
    return (
        <div className=" sm:h-[79vh] sm:flex sm:flex-col sm:justify-center sm:items-center">
            <div>
                <Timer />
                <Progress />
                <Question questions={questions} />
            </div>
            <NextFinishButton />
        </div>
    )
}