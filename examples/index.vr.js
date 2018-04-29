import React from 'react';
import { AppRegistry, asset, Pano, Text, View} from 'react-vr';
import TextInput from '../src/textInput'

export default class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  submitHandler(string) {
    this.setState({
      text: string
    });
  }

  render() {
    const { text } = this.state;

    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <TextInput
          defaultInput={text} onSubmit={this.submitHandler.bind(this)}
          rows={2} cols={20} x={-1} y={0.2} z={-1.5} rotateY={null} rotateX={null}
          textColor={'white'} backgroundColor={'grey'} keyboardColor={null} keyboardOnHover={null}/>
        <Text style={{transform: [{ translate: [0.1, 0.7 , -1.5]}]}}>{text ? `The Submit Handler received ${text}` : ''}</Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('Example', () => Example);
