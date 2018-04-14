import React from 'react';
import './AvatarForm.css';
import Avatar from 'avataaars';
import Slider from 'react-slick';

class AvatarTop extends React.Component {
    TopOptions = [
        { id: 1, name: 'Hat' },
        { id: 2, name: 'Turban' },
        { id: 3, name: 'WinterHat4' },
        { id: 4, name: 'LongHairBun' },
        { id: 5, name: 'LongHairCurly' }
      ]

      onButtonClick = (name) => {
          let changedStyle = {top: name}
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
                <h4>Top</h4><br />
                <Slider {...settings}>
                    {this.TopOptions.map(o => 
                    <span className='slider' key={o.id} onClick={() => {this.onButtonClick(o.name)}}>
                    <Avatar
                        style={{width: '50px', height: '50px'}}
                        avatarStyle='Transparent'
                        topType={o.name} />
                    </span>)}
                </Slider>
            </div>
        )
    }
}


export default AvatarTop;