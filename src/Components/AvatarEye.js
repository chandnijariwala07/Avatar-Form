import React from 'react';
import Avatar from 'avataaars';
import './AvatarForm.css';
import Slider from 'react-slick'

class AvatarEye extends React.Component {
    EyeOptions = [
        { id: 1, name: 'Default' },
        { id: 2, name: 'Cry' },
        { id: 3, name: 'Close' },
        { id: 4, name: 'Dizzy' },
        { id: 5, name: 'Happy' }
      ]

      onButtonClick = (name) => {
          let changedStyle = {eye: name}
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
                <h4>EyeType</h4><br/>
                <Slider {...settings}>
                    {this.EyeOptions.map(o => 
                    <span className='slider' key={o.id} onClick={() => {this.onButtonClick(o.name)}}>
                    <Avatar
                        style={{width: '50px', height: '50px'}}
                        avatarStyle='Transparent'
                        eyeType={o.name} />
                    </span>)}
                </Slider>
            </div>
        )
    }
}


export default AvatarEye;