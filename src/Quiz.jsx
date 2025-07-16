import { useState } from "react"
import {questions} from "./useQuestions"

export function Quiz(){

    const [score, setScore ] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answered, setAnswered] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [showScore, setShowScore] = useState(false)

    function handleAnswerOption(index, value){
        if(answered) return;
        setAnswered(true)
        setSelectedAnswer(index)
        if(value === "correct"){
            setScore(prev => prev + 1)
        }
    }


    function onNextQuestion(){
        setAnswered(false)
        setSelectedAnswer(null) //to go back to the previous state of the quiz, when nothing were selected
        if((currentQuestion + 1) < questions.length){
            setCurrentQuestion(currentQuestion + 1)
        }else{
            setShowScore(true) //showed at the end of the quiz
        }
    }

    function handleRefresh(){
        setScore(0)
        setCurrentQuestion(0)
        setAnswered(false)
        setSelectedAnswer(null)
        setShowScore(false)
    }

    // function onPreviousQuestion(){
    //     setCurrentQuestion(currentQuestion - 1)
    // }

    return(
        <div>
            <div className="fixed-nav">
                <p>Greek Mythology Test</p>
                <p>(are you a demigod or just a nerd?)</p>
            </div>
        {showScore ?
        <div className="score">
             your score is {score} out of {questions.length}
             <button className="refresh" onClick={handleRefresh}>Restart the game, but you know you'd still suck</button>
        </div> :
        <div className="box">
            <h2 className="question">{questions[currentQuestion].question}</h2>
            <div className="answers-button-box">
                <div className="answers">
                    {questions[currentQuestion].answersChoices.map((option, index) => (
                        <button onClick={() => handleAnswerOption(index, option.value)} key={index}
                        className={`${answered ? selectedAnswer === index ? "wrong-answer" : "" : ""}`}
                        >
                            {option.answer}
                        </button>
                        ))}
                </div>
                <div className="prevnext">
                    {/* <button  onClick={onPreviousQuestion}>previous question</button> */}
                    <button onClick={onNextQuestion} disabled = {!answered}>next question</button>
                </div>
                <p>Question {currentQuestion + 1} of {questions.length}</p>
            </div>
        </div>
        }

        </div>
    )
}
