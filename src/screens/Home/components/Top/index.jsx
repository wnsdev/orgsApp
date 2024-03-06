import React from 'react';
import {Text, View, Image} from 'react-native';
import logo from '@assets/logo.png';
import {styles} from './styles';
import {loadTop} from '@services/loadData';
class Top extends React.Component {
  state = {
    top: {
      welcome: '',
      message: '',
    },
  };
  selfUpdate() {
    const response = loadTop();
    this.setState({top: response});
  }
  componentDidMount() {
    this.selfUpdate();
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={logo} />
        <Text style={styles.welcome}>{this.state.top.welcome}</Text>
        <Text style={styles.message}>{this.state.top.message}</Text>
      </View>
    );
  }
}
export default Top;
