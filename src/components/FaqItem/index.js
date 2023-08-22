// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachItem, showAnswersList, onShowOrHideAnswer} = props
  // console.log(showAnswersList)
  const {questionText, answerText, id} = eachItem
  const btnPlusImg =
    'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const btnMinusImg =
    'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
  let showAnswer
  let altText

  if (showAnswersList.includes(id)) {
    showAnswer = true
    altText = 'minus'
  } else {
    showAnswer = false
    altText = 'plus'
  }
  const onClickButtonShowAnswer = () => {
    onShowOrHideAnswer(id, showAnswer)
  }
  console.log(altText)

  return (
    <li className="faq-item-card" key={id}>
      <div className="question-card">
        <h1 className="question">{questionText}</h1>
        <button
          type="button"
          className="button"
          onClick={onClickButtonShowAnswer}
        >
          <img src={showAnswer ? btnMinusImg : btnPlusImg} alt={altText} />
        </button>
      </div>
      {showAnswer && (
        <>
          <hr className="line" />
          <p className="answer">{answerText}</p>
        </>
      )}
    </li>
  )
}
export default FaqItem
