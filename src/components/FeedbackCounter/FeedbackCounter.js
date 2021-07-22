import React from 'react'
import style from './FeedbackCounter.module.css'
import Controls from '../Counter'
// import PropTypes from 'prop-types'

const FeedbackCounter = () => {
    // const { good, neutral, bad } = this.state;
    
        return (
            <div className={style.FeedbackCounter}>
                {/* <span className={style.FeedbackCounter__value}>{this.state.value}</span> */}
                <Controls
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad} />
            </div>
        )
    
}

export default FeedbackCounter;