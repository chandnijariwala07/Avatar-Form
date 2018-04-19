import React from 'react';
import Avatar from 'avataaars';
import './App.css';
import AvatarTop from './Components/AvatarTop';
import AvatarAccessory from './Components/AvatarAccessory';
import AvatarSkin from './Components/AvatarSkin';
import AvatarMouth from './Components/AvatarMouth';
import AvatarHair from './Components/AvatarHair';
import AvatarEye from './Components/AvatarEye';
import AvatarEyebrow from './Components/AvatarEyebrow';
import AvatarFacialHair from './Components/AvatarFacialHair';
import AvatarClothe from './Components/AvatarClothe';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      top: '',
      accessory: '',
      hair: '',
      facialHair: '',
      clothe: '',
      eye: '',
      eyebrow: '',
      mouth: '',
      skin: ''
    }
  }
  
  newAvatarData = (data) => {
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
    const changedAvatarProperties = {
      avatarStyle: 'Transparent',
      topType: this.state.top,
      accessoriesType: this.state.accessory,
      hairColor: this.state.hair,
      facialHairType: this.state.facialHair,
      clotheType: this.state.clothe,
      eyeType: this.state.eye,
      eyebrowType: this.state.eyebrow,
      mouthType: this.state.mouth,
      skinColor: this.state.skin,
    }
    return (
      <div className='App'>
        <div className='App-header' />
        <h2 className='App-intro'>
          Design your Avatar
        </h2>
        <Avatar {...changedAvatarProperties} /><br />
        <AvatarTop changedOptions={changedAvatarProperties} getAvatarData={this.newAvatarData} /><br />
        <AvatarAccessory changedOptions={changedAvatarProperties} getAvatarData={this.newAvatarData} /><br />
        <AvatarSkin changedOptions={changedAvatarProperties} getAvatarData={this.newAvatarData} /><br />
        <AvatarEye changedOptions={changedAvatarProperties} getAvatarData={this.newAvatarData} /><br />
        <AvatarHair changedOptions={changedAvatarProperties} getAvatarData={this.newAvatarData} /><br />
        <AvatarMouth changedOptions={changedAvatarProperties} getAvatarData={this.newAvatarData} /><br />
        <AvatarEyebrow changedOptions={changedAvatarProperties} getAvatarData={this.newAvatarData} /><br />
        <AvatarFacialHair changedOptions={changedAvatarProperties} getAvatarData={this.newAvatarData} /><br />
        <AvatarClothe changedOptions={changedAvatarProperties} getAvatarData={this.newAvatarData} />
      </div>
    );
  }
}
export default App;
