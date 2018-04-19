import React from 'react';
import './AvatarForm.css';
import Avatar from 'avataaars';

class AvatarEyebrow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            EyebrowOptions : [
                { id: 1, name: 'Default' },
                { id: 2, name: 'Angry' },
                { id: 3, name: 'AngryNatural' },
                { id: 4, name: 'FlatNatural' },
                { id: 5, name: 'UpDown' }
            ]
        }
    }
    
    onButtonClick = (name) => {
        let changedStyle = {eyebrow: name}
        this.props.getAvatarData(changedStyle)
    }

    slideLeft() {
        let last = this.state.EyebrowOptions.slice(-1)
        let rest = this.state.EyebrowOptions.slice(0, -1)
        let EyebrowOptions = [last[0], ...rest]
        this.setState({EyebrowOptions: EyebrowOptions});
        let len = EyebrowOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(EyebrowOptions[midIndex].name);
    }
    
    slideRight() {
        let [first, ...rest] = this.state.EyebrowOptions;
        let EyebrowOptions = [...rest, first];
        this.setState({EyebrowOptions: EyebrowOptions});
        let len = EyebrowOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(EyebrowOptions[midIndex].name);
    }

    render() {
        const getAvatarProperties = this.props.changedOptions
        return (
            <div className='Avatar-form'>
                <h4>EyeBrowType</h4><br />
                <a className='arrow-left' onClick={() => this.slideLeft()}>
                    <img src={require('../arrow-left.png')} alt='left' />
                </a>
                {this.state.EyebrowOptions.map((option, index) => 
                <span className='content' key={option}>
                <Avatar
                    style={{width: '70px', height: '70px'}}
                    {...getAvatarProperties}
                    eyebrowType={option.name} />
                </span>)}
                <a className='arrow-right' onClick={() => this.slideRight()}>
                    <img src={require('../arrow-right.png')} alt='right' />
                </a>
            </div>
        )
    }
}
export default AvatarEyebrow;