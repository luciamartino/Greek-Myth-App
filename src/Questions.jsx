export function Questions({question, answer1, answer2, answer3, answer4}){

    // const [ score, setScore ] = useState(0)

    // function handleAnswerSent(event){
    //     event.preventDefault()
    //     if (event.target.value == "correct"){
    //         setScore(score + 1)
    //     }
    // }

    return(
        <>
            <div>
            <h3 className="question">{question}</h3><br/>
            <div className="answers">
                <label >{answer1}</label>
                <input type="radio" name="question1"/>
                <label>{answer2}</label>
                <input type="radio" name="question1"/>
                <label>{answer3}</label>
                <input type="radio" name="question1"/>

                {answer4 &&
                <>
                <label>{answer4}</label>
                <input type="radio" name="question1"/>
                </>}
            </div>

            </div>

        </>
    )
}
