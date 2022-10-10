// 
import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import Sections from "./Sections/Sections";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";



export default class App extends Component{
  state = {
        good: 0,
        neutral: 0,
        bad: 0
        
  }
  handleGood = () => {
        this.setState((prevState) => ({ good: prevState.good + 1 }))
    }
    handleNeutral = () => {
        this.setState((prevState) => ({ neutral: prevState.neutral + 1 }))
    }
    handleBad = () => {
        this.setState((prevState) => ({ bad: prevState.bad + 1 }))
    }
    countTotalFeedback = () => {
        
       return this.state.good + this.state.neutral + this.state.bad
    }
  
    countPositiveFeedbackPercentage = () => {
        return (Math.round(this.state.good * 100 /( this.state.good + this.state.neutral + this.state.bad)))
    }
  
  
  
    handleUpdate = (event) => {
    
        const { innerText } = event.target
        
        switch (innerText) {
            case "good":
                this.setState((prevState) => ({ good: prevState.good + 1 }))
                break
            case "neutral":
                this.setState((prevState) => ({ neutral: prevState.neutral + 1 }))
                break
            case "bad":
                this.setState((prevState) => ({ bad: prevState.bad + 1 }))
                break

            default: new Error('Something went wrong!')
        }
      
    }
   render() {
        const { good, neutral, bad } = this.state
     return (
       <div>
         <Sections title={"Please leave feedback"}>
           <FeedbackOptions onLeaveFeedback="good" onClick={this.handleUpdate} />
           <FeedbackOptions onLeaveFeedback="neutral" onClick={this.handleUpdate} />
           <FeedbackOptions onLeaveFeedback="bad" onClick={this.handleUpdate} />
           {this.countTotalFeedback() > 0 ?
             <Statistics
               good={good}
               neutral={neutral}
               bad={bad}
               countTotalFeedback={this.countTotalFeedback}
               countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
             />
             :
             <Notification message="There is no feedback"/>}
          </Sections>
           
           </div>
        )
    }
}


