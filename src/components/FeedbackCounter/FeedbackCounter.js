import React from 'react'
import style from './FeedbackCounter.module.css'
import Controls from '../Counter'
// import PropTypes from 'prop-types'

const FeedbackCounter = () => (
    render() {
        return (
            <div className={style.FeedbackCounter}>
                <span className={style.FeedbackCounter__value}>{this.state.value}</span>
                <Controls
                    good={this.good}
                    neutral={this.neutral}
                    bad={this.bad}/>
            </div>
        )}
)

export default FeedbackCounter;