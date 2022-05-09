const QuestionAns = ({questions, title, answers, moveFwd, incScore, curInd}) => {

    const checkIfCor = (val) => {
        if(val){
            incScore();
        }
        moveFwd();
    }

    return (
        <>
            <div className="question-section">
                <div className="question-count">
                    <span>Question {curInd+1}</span>/{questions.length}
                </div>
                {/* HINT: You can access first question using questions[0] */}
                <div className="question-text">
                    {title}
                </div>
            </div>
            <div className="answer-section">
                {answers.map((ans)=>{
                    return <button onClick={() => checkIfCor(ans['isCorrect'])}>{ans['answerText']}</button>
                })}
            </div>
        </>
    );
}
 
export default QuestionAns;