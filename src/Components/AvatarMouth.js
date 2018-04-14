import React from 'react';
import './AvatarForm.css';
import Avatar from 'avataaars';
import Slider from 'react-slick';

class AvatarMouth extends React.Component {
    MouthOptions = [
        { id: 1, name: 'Concerned' },
        { id: 2, name: 'Disbelief' },
        { id: 3, name: 'Eating' },
        { id: 4, name: 'Smaile' },
        { id: 5, name: 'Tongue' }
      ]

      onButtonClick = (name) => {
          let changedStyle = {mouth: name}
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
                <h4>Mouth</h4><br />
                <Slider {...settings}>
                    {this.MouthOptions.map(o => 
                    <span className='slider' key={o.id} onClick={() => {this.onButtonClick(o.name)}}>
                    <Avatar
                        style={{width: '50px', height: '50px'}}
                        avatarStyle='Transparent'
                        mouthType={o.name} />
                    </span>)}
                </Slider>
            </div>
        )
    }
}


export default AvatarMouth;