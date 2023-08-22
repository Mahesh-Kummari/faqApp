// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {showAnswersList: []}

  onShowOrHideAnswer = id => {
    const {showAnswersList} = this.state
    const {faqsList} = this.props
    if (showAnswersList.includes(id)) {
      const resultList = showAnswersList.filter(eachId => eachId !== id)
      this.setState({showAnswersList: resultList})
    } else {
      faqsList.forEach(eachItem => {
        if (eachItem.id === id) {
          this.setState(prevState => ({
            showAnswersList: [...prevState.showAnswersList, id],
          }))
        }
      })
    }
  }

  render() {
    const {showAnswersList} = this.state
    const {faqsList} = this.props
    // console.log('list', faqsList)

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="faqs-heading">FAQs</h1>
          <ul className="faq-item-container">
            {faqsList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                eachItem={eachItem}
                showAnswersList={showAnswersList}
                onShowOrHideAnswer={this.onShowOrHideAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
