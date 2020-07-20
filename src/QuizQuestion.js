import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton';
class QuizQuestion extends Component {

  handleClick(buttonText) {
    (buttonText == this.props.quiz_question.answer) && this.props.showNextQuestionHandler();
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {quiz_question.map(answer_option, i) => {
              <QuizQuestionButton key={i} button_text={answer_option[i]} handleClick={this.handleClick.bind(this)} />
            }}
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion;