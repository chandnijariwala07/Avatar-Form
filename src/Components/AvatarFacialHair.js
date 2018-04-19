import React from 'react';
import './AvatarForm.css';
import Avatar from 'avataaars';

class AvatarFacialHair extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            FacialHairOptions : [
                { id: 1, name: 'Blank' },
                { id: 2, name: 'BeardLight' },
                { id: 3, name: 'BeardMedium' },
                { id: 4, name: 'BeardMagestic' },
                { id: 5, name: 'MoustacheFancy' }
            ]
        }
    }
    
    onButtonClick = (name) => {
        let changedStyle = {facialHair: name}
        this.props.getAvatarData(changedStyle)
    }

    slideLeft() {
        let last = this.state.FacialHairOptions.slice(-1)
        let rest = this.state.FacialHairOptions.slice(0, -1)
        let FacialHairOptions = [last[0], ...rest]
        this.setState({FacialHairOptions: FacialHairOptions});
        let len = FacialHairOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(FacialHairOptions[midIndex].name);
    }
    
    slideRight() {
        let [first, ...rest] = this.state.FacialHairOptions;
        let FacialHairOptions = [...rest, first];
        this.setState({FacialHairOptions: FacialHairOptions});
        let len = FacialHairOptions.length;
        let midIndex = 0 + ((len-1) - 0)/2; //firstindex + (lastindex -firstindex)/2
        this.onButtonClick(FacialHairOptions[midIndex].name);
    }

    render() {
        const getAvatarProperties = this.props.changedOptions
        return (
            <div className='Avatar-form'>
                <h4>Facialhair Type</h4><br />
                <a className='arrow-left' onClick={() => this.slideLeft()}>
                    <img src={require('../arrow-left.png')} alt='left' />
                </a>
                {this.state.FacialHairOptions.map((option, index) => 
                <span className='content' key={index}>
                <Avatar
                    style={{width: '70px', height: '70px'}}
                    {...getAvatarProperties}
                    facialHairType={option.name} />
                </span>)}
                <a className='arrow-right' onClick={() => this.slideRight()}>
                    <img src={require('../arrow-right.png')} alt='right' />
                </a>
            </div>
        )
    }
}
export default AvatarFacialHair;