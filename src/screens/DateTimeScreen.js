import React, { Component, useState } from "react";
import { View, Button, TouchableOpacity } from "react-native";

import DateTimePicker from "react-native-modal-datetime-picker";
import { MaterialIcons } from "@expo/vector-icons";
import moment from "moment";

export default class DateTimeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      DateDisplay: "",
    };
  }

  handleComfirm = (date) => {
    this.setState({
      DateDisplay: date,
    });
  };

  onPressCancel = (datetime) => {
    this.setState({
      isVisible: false,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.ShowPicker}>
          <MaterialIcons name="date-range" size={24} color="black" />
          <TextInput placeholder="Select date (s)" />
          <Text>{this.state.isVisible}</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          oncomfirm={this.state.handleComfirm}
          onCancel={this.state.onPressCancel}
          mode={"date"}
          date
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    horizontal: 1,
  },
});
