import React from 'react';
import Avatar from 'avataaars';
import './AvatarForm.css';

class AvatarTop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            AccessoryOptions : [
                { id: 1, name: 'Kurt' },
                { id: 2, name: 'Round' },
                { id: 3, name: 'Sunglasses' },
                { id: 4, name: 'Wayfarers' },
                { id: 5, name: 'Blank' }
            ]
        }
    }

    onButtonClick = (name) => {
        let changedStyle = {accessory: name}
        this.props.getAvatarData(changedStyle)
    }

    slideLeft() {
        let last = this.state.AccessoryOptions.slice(-1)
        let rest = this.state.AccessoryOptions.slice(0, -1)
        let AccessoryOptions = [last[0], ...rest]
        this.setState({AccessoryOptions: AccessoryOptions});
        let len = AccessoryOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(AccessoryOptions[midIndex].name);
    }
    
    slideRight() {
        let [first, ...rest] = this.state.AccessoryOptions;
        let AccessoryOptions = [...rest, first];
        this.setState({AccessoryOptions: AccessoryOptions});
        let len = AccessoryOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(AccessoryOptions[midIndex].name);
    }
      
    render() {
        const getAvatarProperties = this.props.changedOptions
        return (
            <div className='Avatar-form'>
                <h4>Accessories</h4><br/>
                <a className='arrow-left' onClick={() => this.slideLeft()}>
                    <img src={require('../arrow-left.png')} alt='left' />
                </a>
                {this.state.AccessoryOptions.map((option, index) => 
                <span className='content' key={index}>
                    <Avatar
                        style={{width: '70px', height: '70px'}}
                        {...getAvatarProperties}
                        accessoriesType={option.name} />
                </span>)}
                <a className='arrow-right' onClick={() => this.slideRight()}>
                    <img src={require('../arrow-right.png')} alt='right' />
                </a>
            </div>
        )
    }
}

export default AvatarTop;