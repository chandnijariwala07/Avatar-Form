import React from 'react';
import './AvatarForm.css';
import Avatar from 'avataaars';
import Slider from 'react-slick';

class AvatarEyebrow extends React.Component {
    EyebrowOptions = [
        { id: 1, name: 'Default' },
        { id: 2, name: 'Angry' },
        { id: 3, name: 'AngryNatural' },
        { id: 4, name: 'FlatNatural' },
        { id: 5, name: 'UpDown' }
      ]

      onButtonClick = (name) => {
          let changedStyle = {eyebrow: name}
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
                <h4>EyeBrowType</h4><br />
                <Slider {...settings}>
                    {this.EyebrowOptions.map(o => 
                    <span className='slider' key={o.id} onClick={() => {this.onButtonClick(o.name)}}>
                    <Avatar
                        style={{width: '50px', height: '50px'}}
                        avatarStyle='Transparent'
                        eyeType=''
                        eyebrowType={o.name} />
                    </span>)}
                </Slider>
            </div>
        )
    }
}


export default AvatarEyebrow;