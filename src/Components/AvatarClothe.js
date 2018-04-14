import React from 'react';
import Avatar from 'avataaars';
import './AvatarForm.css';
import Slider from 'react-slick';

class AvatarClothe extends React.Component {

    ClotheOptions = [
        { id: 1, name: 'CollarSweater' },
        { id: 2, name: 'BlazerSweater' },
        { id: 3, name: 'Overall' },
        { id: 4, name: 'Hoodie' },
        { id: 5, name: 'BlazerShirt' }
      ]

      onButtonClick = (name) => {
          let changedStyle = {clothe: name}
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
                <h4>ClotheType</h4><br/>
                <Slider {...settings}>
                    {this.ClotheOptions.map(o => 
                    <span className='slider' key={o.id} onClick={() => {this.onButtonClick(o.name)}}>
                    <Avatar
                        style={{width: '50px', height: '50px'}}
                        avatarStyle='Transparent'
                        clotheType={o.name} />
                    </span>)}
                </Slider>
            </div>
        )
    }
}


export default AvatarClothe;