
import React from 'react';
// import Counter from './components/Counter/Counter';
// import Dropdawn  from './components/Dropdawn/Dropdawn';
// import ColorPicker from './components/ColorPicker/ColorPicker'
// import Feedback from './components/Feedback';
import FeedbackCounter from './components/FeedbackCounter';
// import Controls  from './components/Counter';

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' }
    
// ]

const App = () => (
    <>
        <h1>Please leave feedback</h1>
        {/* <Counter initialValue={10}/> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Dropdawn /> */}
        {/* <Controls /> */}
        <FeedbackCounter />
        
    </>
)

export default App;