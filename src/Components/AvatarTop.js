import React from 'react';
import './AvatarForm.css';
import Avatar from 'avataaars';

class AvatarTop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            TopOptions : [
                { name: 'Hat' },
                { name: 'Turban' },
                { name: 'WinterHat4' },
                { name: 'LongHairBun' },
                { name: 'LongHairCurly' }
            ]
        }
    }

    onButtonClick = (name) => {
        let changedStyle = {top: name}
        this.props.getAvatarData(changedStyle)
    }

    slideLeft() {
        let last = this.state.TopOptions.slice(-1)
        let rest = this.state.TopOptions.slice(0, -1)
        let TopOptions = [last[0], ...rest]
        this.setState({TopOptions: TopOptions});
        let len = TopOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(TopOptions[midIndex].name);
    }
    
    slideRight() {
        let [first, ...rest] = this.state.TopOptions;
        let TopOptions = [...rest, first];
        this.setState({TopOptions: TopOptions});
        let len = TopOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(TopOptions[midIndex].name);
    }

    render() {
        const getAvatarProperties = this.props.changedOptions
        return (
            <div className='Avatar-form'>
                <h4>Top</h4><br />
                <a className='arrow-left' onClick={() => this.slideLeft()}>
                    <img src={require('../arrow-left.png')} alt='left' />
                </a>
                {this.state.TopOptions.map((option, index) => 
                <span className='content' key={index}>
                <Avatar
                    style={{width: '70px', height: '70px'}}
                    {...getAvatarProperties}
                    topType={option.name} />
                </span>)}
                <a className='arrow-right' onClick={() => this.slideRight()}>
                    <img src={require('../arrow-right.png')} alt='right' />
                </a>
            </div>
        )
    }
}
export default AvatarTop;