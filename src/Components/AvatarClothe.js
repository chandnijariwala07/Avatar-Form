import React from 'react';
import Avatar from 'avataaars';
import './AvatarForm.css';

class AvatarClothe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ClotheOptions : [
                { id: 1, name: 'CollarSweater' },
                { id: 2, name: 'BlazerSweater' },
                { id: 3, name: 'Overall' },
                { id: 4, name: 'Hoodie' },
                { id: 5, name: 'BlazerShirt' }
            ]
        }
    }

    onButtonClick = (name) => {
        let changedStyle = {clothe: name}
        this.props.myCallbackFromParent(changedStyle)
    }

    slideLeft() {
        let last = this.state.ClotheOptions.slice(-1)
        let rest = this.state.ClotheOptions.slice(0, -1)
        let ClotheOptions = [last[0], ...rest]
        this.setState({ClotheOptions: ClotheOptions});
        let len = ClotheOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(ClotheOptions[midIndex].name);
    }
    
    slideRight() {
        let [first, ...rest] = this.state.ClotheOptions;
        let ClotheOptions = [...rest, first];
        this.setState({ClotheOptions: ClotheOptions});
        let len = ClotheOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(ClotheOptions[midIndex].name);
    }

    render() {
        const getAvatarProperties = this.props.changedOptions
        return (
            <div className='Avatar-form'>
                <h4>ClotheType</h4><br/>
                <a className='arrow-left' onClick={() => this.slideLeft()}>
                    <img src={require('../arrow-left.png')} alt='left' />
                </a>
                {this.state.ClotheOptions.map((option, index) => 
                <span className='content' key={index}>
                <Avatar
                    style={{width: '70px', height: '70px'}}
                    {...getAvatarProperties}
                    clotheType={option.name} />
                </span>)}
                <a className='arrow-right' onClick={() => this.slideRight()}>
                    <img src={require('../arrow-right.png')} alt='right' />
                </a>
            </div>
        )
    }
}


export default AvatarClothe;