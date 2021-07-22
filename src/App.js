
import React from 'react';
import FeedbackCounter from './components/FeedbackCounter';
import Statistics from './components/Statistics/Statisticks';
// import Controls  from './components/Counter';

class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }    
   
   handleBtnClick = event => {
        const { name } = event.target;
        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }));
    };
    
    render() {
        const { good, neutral, bad } = this.state;
        return (
            <>
        <h1>Please leave feedback</h1>
        
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad} />
        <FeedbackCounter buttons={this.state }  />
            </>
        )
    }
}
export default App;
    