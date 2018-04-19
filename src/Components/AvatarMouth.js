import React from 'react';
import './AvatarForm.css';
import Avatar from 'avataaars';

class AvatarMouth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            MouthOptions : [
                { id: 1, name: 'Concerned' },
                { id: 2, name: 'Disbelief' },
                { id: 3, name: 'Eating' },
                { id: 4, name: 'Smaile' },
                { id: 5, name: 'Tongue' }
            ]        
        }
    }
    
    onButtonClick = (name) => {
        let changedStyle = {mouth: name}
        this.props.getAvatarData(changedStyle)
    }
    
    slideLeft() {
        let last = this.state.MouthOptions.slice(-1)
        let rest = this.state.MouthOptions.slice(0, -1)
        let MouthOptions = [last[0], ...rest]
        this.setState({MouthOptions: MouthOptions});
        let len = MouthOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(MouthOptions[midIndex].name);
    }
    
    slideRight() {
        let [first, ...rest] = this.state.MouthOptions;
        let MouthOptions = [...rest, first];
        this.setState({MouthOptions: MouthOptions});
        let len = MouthOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(MouthOptions[midIndex].name);
    }
    
    render() {
        const getAvatarProperties = this.props.changedOptions
        return (
            <div className='Avatar-form'>
                <h4>Mouth</h4><br />
                <a className='arrow-left' onClick={() => this.slideLeft()}>
                    <img src={require('../arrow-left.png')} alt='left' />
                </a>
                {this.state.MouthOptions.map((option, index) => 
                <span className='content' key={index}>
                <Avatar
                    style={{width: '70px', height: '70px'}}
                    {...getAvatarProperties}
                    mouthType={option.name} />
                </span>)}
                <a className='arrow-right' onClick={() => this.slideRight()}>
                    <img src={require('../arrow-right.png')} alt='right' />
                </a>
            </div>
        )
    }
}
export default AvatarMouth;