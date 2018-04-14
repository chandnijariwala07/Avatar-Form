import React from 'react';
import './AvatarForm.css';
import Avatar from 'avataar';
import Slider from 'react-slick';

class AvatarHair extends React.Component {
    HairOptions = [
        { id: 1, name: 'Black' },
        { id: 2, name: 'Brown' },
        { id: 3, name: 'Blonde' },
        { id: 4, name: 'Red' },
        { id: 5, name: 'Auburn' }
      ]

      onButtonClick = (name) => {
          let changedStyle = {hair: name}
          this.props.myCallbackFromParent(changedStyle)

      }
    render() {
        const settings = {
            infinte: false,
            slidesToShow: 3,
            slidesToScroll: 1
        }
        return (
            <div className='Avatar-form'>
                <h4>Hair</h4><br />
                <Slider {...settings}>
                    {this.HairOptions.map(o => 
                    <span className='slider' key={o.id} onClick={() => {this.onButtonClick(o.name)}}>
                    <Avatar
                        style={{width: '50px', height: '50px'}}
                        avatarStyle='Transparent'
                        hairColor={o.name} />
                    </span>)}
                </Slider>
            </div>
        )
    }
}


export default AvatarHair;