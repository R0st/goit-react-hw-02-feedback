import React from 'react';
import style from './Controls.module.css'

const Controls = ({ total }) => (
    <div className={style.FeedbackCounter__controls}>
                    <button
                        className={style.btn}
                        name="good"
                        type="button"
                        onClick={total}
                    >Good</button>
                
                    <button
                        className={style.btn}
                        name="neutral"
                        type="button"
                        onClick={total}
                    >Neutral</button>
                
                    <button
                        className={style.btn}
                        name="bad"
                        type="button"
                        onClick={total}
                    >Bad</button>
                </div>
)

export default Controls;


                
