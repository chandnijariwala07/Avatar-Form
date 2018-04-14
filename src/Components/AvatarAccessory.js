import React from 'react';
import Avatar from 'avataaars';
import './AvatarForm.css';
import Slider from 'react-slick';

class AvatarTop extends React.Component {
    AccessoryOptions = [
        { id: 1, name: 'Kurt' },
        { id: 2, name: 'Round' },
        { id: 3, name: 'Sunglasses' },
        { id: 4, name: 'Wayfarers' },
        { id: 5, name: 'Blank' }
      ]

      onButtonClick = (name) => {
          let changedStyle = {accessory: name}
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
                <h4>Accessories</h4><br/>
                <Slider {...settings}>
                    {this.AccessoryOptions.map(o => 
                    <span className='slider' key={o.id} onClick={() => {this.onButtonClick(o.name)}}>
                        <Avatar
                            style={{width: '50px', height: '50px'}}
                            avatarStyle='Transparent'
                            accessoriesType={o.name} />
                    </span>)}
                </Slider>
            </div>
        )
    }
}

export default AvatarTop;