import React, { Component } from 'react';
// import './Dropdawn.css';

class Dropdawn extends Component {
    state = {
        visible: false,
    }

    toogle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };  
    
    show = () => {
        this.setState({ visible: true });
    }

    hide = () => {
        this.setState({ visible: false });
    }


    render() {
        return (
            <div className="Dropdawn">
                <button type="button"
                        className="Dropdawn__toggle"
                        onClick={this.toogle}>
                    {this.state.visible ? 'Скрыть' : 'Показать'}
                </button>

                {/* <button type="button" className="Dropdawn__toggle" onClick={this.hide}>
                    Cкрыть 
                </button> */}

                {this.state.visible && (
                    <div className="Dropdawn__menu">Выпадающее меню</div>
                )}
                
            </div>
        )
    }
}

export default Dropdawn;