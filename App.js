import React,{Component} from 'react';
import {View, TouchableOpacity,StyleSheet} from 'react-native';
import Video from 'react-native-video';

export default class App extends Component{
  state = {
    volume: 1,
    paused: false,
  };
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={() => this.setState({ paused: !this.state.paused })}
        >
        <Video
            source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}} 
              paused={this.state.paused}
              volume={this.state.volume}
              resizeMode="cover"        
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }} />
          </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})