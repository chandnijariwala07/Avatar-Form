import React from 'react';
import Avatar from 'avataaars';
import './AvatarForm.css';

class AvatarEye extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            EyeOptions : [
                { id: 1, name: 'Default' },
                { id: 2, name: 'Cry' },
                { id: 3, name: 'Close' },
                { id: 4, name: 'Dizzy' },
                { id: 5, name: 'Happy' }
            ]
        }
    }
    
    onButtonClick = (name) => {
        let changedStyle = {eye: name}
        this.props.getAvatarData(changedStyle)

    }

    slideLeft() {
        const last = this.state.EyeOptions.slice(-1)
        const rest = this.state.EyeOptions.slice(0, -1)
        const EyeOptions = [last[0], ...rest]
        this.setState({EyeOptions: EyeOptions});
        let len = EyeOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(EyeOptions[midIndex].name);
    }
    
    slideRight() {
        const [first, ...rest] = this.state.EyeOptions;
        const EyeOptions = [...rest, first];
        this.setState({EyeOptions: EyeOptions});
        let len = EyeOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(EyeOptions[midIndex].name);
    }

    render() {
        const getAvatarProperties = this.props.changedOptions
        return (
            <div className='Avatar-form'>
                <h4>EyeType</h4><br/>
                <a className='arrow-left' onClick={() => this.slideLeft()}>
                    <img src={require('../arrow-left.png')} alt='left' />
                </a>
                {this.state.EyeOptions.map((option, index) => 
                <span className='content' key={index}>
                <Avatar
                    style={{width: '70px', height: '70px'}}
                    {...getAvatarProperties}
                    eyeType={option.name} />
                </span>)}
                <a className='arrow-right' onClick={() => this.slideRight()}>
                    <img src={require('../arrow-right.png')} alt='right' />
                </a>
            </div>
        )
    }
}
export default AvatarEye;