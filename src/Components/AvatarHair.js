import React from 'react';
import './AvatarForm.css';
import Avatar from 'avataaars';

class AvatarHair extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            HairOptions : [
                { id: 1, name: 'Black' },
                { id: 2, name: 'Brown' },
                { id: 3, name: 'Blonde' },
                { id: 4, name: 'Red' },
                { id: 5, name: 'Auburn' }
            ]
        }
    }
    
    onButtonClick = (name) => {
        let changedStyle = {hair: name}
        this.props.getAvatarData(changedStyle)
    }

    slideLeft() {
        let last = this.state.HairOptions.slice(-1)
        let rest = this.state.HairOptions.slice(0, -1)
        let HairOptions = [last[0], ...rest]
        this.setState({HairOptions: HairOptions});
        let len = HairOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(HairOptions[midIndex].name);
    }
    
    slideRight() {
        let [first, ...rest] = this.state.HairOptions;
        let HairOptions = [...rest, first];
        this.setState({HairOptions: HairOptions});
        let len = HairOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(HairOptions[midIndex].name);
    }

    render() {
        const getAvatarProperties = this.props.changedOptions
        return (
            <div className='Avatar-form'>
                <h4>Hair</h4><br />
                <a className='arrow-left' onClick={() => this.slideLeft()}>
                    <img src={require('../arrow-left.png')} alt='left' />
                </a>
                {this.state.HairOptions.map((option, index) => 
                <span className='content' key={index}>
                <Avatar
                    style={{width: '70px', height: '70px'}}
                    {...getAvatarProperties}
                    hairColor={option.name} />
                </span>)}
                <a className='arrow-right' onClick={() => this.slideRight()}>
                    <img src={require('../arrow-right.png')} alt='right' />
                </a>
            </div>
        )
    }
}
export default AvatarHair;