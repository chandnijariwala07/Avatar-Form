import React from 'react';
import './AvatarForm.css';
import Avatar from 'avataaars';
import Slider from 'react-slick';

class AvatarFacialHair extends React.Component {
    FacialHairOptions = [
        { id: 1, name: 'Blank' },
        { id: 2, name: 'BeardLight' },
        { id: 3, name: 'BeardMedium' },
        { id: 4, name: 'BeardMagestic' },
        { id: 5, name: 'MoustacheFancy' }
      ]

      onButtonClick = (name) => {
          let changedStyle = {facialHair: name}
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
                <h4>Facialhair Type</h4><br />
                <Slider {...settings}>
                    {this.FacialHairOptions.map(o => 
                    <span className='slider' key={o.id} onClick={() => {this.onButtonClick(o.name)}}>
                    <Avatar
                        style={{width: '50px', height: '50px'}}
                        avatarStyle='Transparent'
                        facialHairType={o.name} />
                    </span>)}
                </Slider>
            </div>
        )
    }
}


export default AvatarFacialHair;