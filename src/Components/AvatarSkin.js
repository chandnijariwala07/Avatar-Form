import React from 'react';
import './AvatarForm.css';
import Avatar from 'avataaars';
import Slider from 'react-slick';

class AvatarSkin extends React.Component {
    SkinOptions = [
        { id: 1, name: 'Light' },
        { id: 2, name: 'Brown' },
        { id: 3, name: 'Yellow' },
        { id: 4, name: 'Pale' },
        { id: 5, name: 'Tanned' }
      ]

      onButtonClick = (name) => {
          let changedStyle = {skin: name}
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
                <h4>Skin</h4><br />
                <Slider {...settings}>
                    {this.SkinOptions.map(o => 
                    <span className='slider' key={o.id} onClick={() => {this.onButtonClick(o.name)}}>
                    <Avatar
                        style={{width: '50px', height: '50px'}}
                        avatarStyle='Transparent'
                        skinColor={o.name} />
                    </span>)}
                </Slider>
            </div>
        )
    }
}


export default AvatarSkin;