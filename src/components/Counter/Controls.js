import React from 'react';
import style from './Controls.module.css'

const Controls = ({ good,neutral,bad }) => (
    <div className={style.FeedbackCounter__controls}>
                    <button
                        className={style.btn}
                        name="good"
                        type="button"
                        onClick={good}
                    >Good</button>
                
                    <button
                        className={style.btn}
                        name="neutral"
                        type="button"
                        onClick={neutral}
                    >Neutral</button>
                
                    <button
                        className={style.btn}
                        name="bad"
                        type="button"
                        onClick={bad}
                    >Bad</button>
                </div>
)

export default Controls;


                
