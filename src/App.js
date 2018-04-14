import React from 'react';
import Avatar from 'avataaars';
import './App.css';
import AvatarTop from './Components/AvatarTop';
import AvatarAccessory from './Components/AvatarAccessory';
import AvatarSkin from './Components/AvatarSkin';
import AvatarMouth from './Components/AvatarMouth';
import AvatarEye from './Components/AvatarEye';
import AvatarEyebrow from './Components/AvatarEyebrow';
import AvatarFacialHair from './Components/AvatarFacialHair';
import AvatarClothe from './Components/AvatarClothe';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      top: '',
      accessory: '',
      hair: '',
      facialHair: '',
      clothe: '',
      clotheColor: '',
      eye: '',
      eyebrow: '',
      mouth: '',
      skin: ''
    }
  }
  
  myCallback = (data) => {
    if (data.top) {this.setState ({top: data.top})}
    if (data.accessory) {this.setState ({accessory: data.accessory})}
    if (data.hair) {this.setState ({hair: data.hair})}
    if (data.facialHair) {this.setState ({facialHair: data.facialHair})}
    if (data.clothe) {this.setState ({clothe: data.clothe})}
    if (data.eye) {this.setState ({eye: data.eye})}
    if (data.eyebrow) {this.setState ({eyebrow: data.eyebrow})}
    if (data.mouth) {this.setState ({mouth: data.mouth})}
    if (data.skin) {this.setState ({skin: data.skin})}
  }

  render() {
    return (
      <div className='App'>
        <p className='App-intro'>
          Change your Avatar
        </p>

        <Avatar
          style={{width: '100px', height: '100px'}}
          avatarStyle='Transparent'
          topType={this.state.top}
          accessoriesType={this.state.accessory}
          hairColor={this.state.hair}
          facialHairType={this.state.facialHair}
          clotheType={this.state.clothe}
          eyeType={this.state.eye}
          eyebrowType={this.state.eyebrow}
          mouthType={this.state.mouth}
          skinColor={this.state.skin} />

        <AvatarTop myCallbackFromParent={this.myCallback} />
        <AvatarAccessory myCallbackFromParent={this.myCallback} />
        <AvatarSkin myCallbackFromParent={this.myCallback} />
        <AvatarEye myCallbackFromParent={this.myCallback} />
        <AvatarMouth myCallbackFromParent={this.myCallback} />
        <AvatarEyebrow myCallbackFromParent={this.myCallback} />
        <AvatarFacialHair myCallbackFromParent={this.myCallback} />
        <AvatarClothe myCallbackFromParent={this.myCallback} />

      </div>
    );
  }
}

export default App;
