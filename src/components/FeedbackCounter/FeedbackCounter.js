import React from 'react'
import style from './FeedbackCounter.module.css'
import Controls from '../Counter'
// import PropTypes from 'prop-types'

class FeedbackCounter extends React.Component {

    static defaultProps = {
        initialValue: 0,
    }

    state = {
        value: this.props.initialValue,
    }
        
    total = () => {
        this.setState((prevState) => {
            return {
                value: prevState.value +1,
            }
        })
    }
    
    render() {
        return (
            <div className={style.FeedbackCounter}>
                
                <span className={style.FeedbackCounter__value}>{this.state.value}</span>
                <Controls total={ this.total} />
                
            </div>
            
        )
    }
}

export default FeedbackCounter;