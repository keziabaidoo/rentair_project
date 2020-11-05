import React, { Component } from "react";
import { View } from "react-native";



export default class WelcomeScreen extends Component() {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width=50,height=40}}>
          <Image source={require('../images/download.png')} />
            </View>
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
