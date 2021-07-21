import React from 'react';
// import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => (
    <>
        <div className={style.list}>
            <p className={style.text}>Good: {good}</p>
            <p className={style.text}>Neutral: {neutral}</p>
            <p className={style.text}>Bad: {bad}</p>
        </div>
    </>
)

export default Statistics;