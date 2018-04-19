import React from 'react';
import './AvatarForm.css';
import Avatar from 'avataaars';

class AvatarSkin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            SkinOptions : [
                { id: 1, name: 'Light' },
                { id: 2, name: 'Brown' },
                { id: 3, name: 'Yellow' },
                { id: 4, name: 'Pale' },
                { id: 5, name: 'Tanned' }
            ]
        }
    }
    
    onButtonClick = (name) => {
        let changedStyle = {skin: name}
        this.props.getAvatarData(changedStyle)
    }

    slideLeft() {
        let last = this.state.SkinOptions.slice(-1)
        let rest = this.state.SkinOptions.slice(0, -1)
        let SkinOptions = [last[0], ...rest]
        this.setState({SkinOptions: SkinOptions});
        let len = SkinOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(SkinOptions[midIndex].name);
    }
    
    slideRight() {
        let [first, ...rest] = this.state.SkinOptions;
        let SkinOptions = [...rest, first];
        this.setState({SkinOptions: SkinOptions});
        let len = SkinOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(SkinOptions[midIndex].name);
    }

    render() {
        const getAvatarProperties = this.props.changedOptions
        return (
            <div className='Avatar-form'>
                <h4>Skin</h4><br />
                <a className='arrow-left' onClick={() => this.slideLeft()}>
                    <img src={require('../arrow-left.png')} alt='left' />
                </a>
                {this.state.SkinOptions.map((option, index) => 
                <span className='content' key={index}>
                <Avatar
                    style={{width: '70px', height: '70px'}}
                    {...getAvatarProperties}
                    skinColor={option.name} />
                </span>)}
                <a className='arrow-right' onClick={() => this.slideRight()}>
                    <img src={require('../arrow-right.png')} alt='right' />
                </a>
            </div>
        )
    }
}
export default AvatarSkin;