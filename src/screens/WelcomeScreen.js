import React, { Component } from "react";
import { View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Picker from "react-native-picker";

export default class WelcomeScreen extends Component({ navigator }) {
  constructor(props) {
    super(props);
    this.state = {
      selectedLabel: "",
    };
  }

  show = (value) => {
    alert(value);
    this.setState({ selectedLabel: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.Text1}>
            <Text style={styles.textInfo_1}>Roundtrip</Text>
            <Text style={styles.textInfo_2}>One Way</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Picker
            selectedLabel={this.state.selectedLabel}
            onValueChange={this.show.bind()}
            mode="dialog"
          >
            <Picker.Item
              label="Curency"
              value="0"
              fontweight="bold"
              fontsize="12"
            />
            <Picker.Item label="GHS" value="GHS" />
            <Picker.Item label="NGN" value="NGN" />
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="XOF" value="XOF" />
          </Picker>
        </TouchableOpacity>

        <View>
          <TouchableOpacity>
            <EvilIcons name="location" size={24} color="black" />
            <Text>Departure & Destination</Text>
            <TextInput placeholder="Select departure & destination" />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <MaterialIcons name="date-range" size={24} color="black" />
            <Text>Dates</Text>
            <TextInput placeholder="Select date(s)" />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="md-people" size={24} color="black" />
            <Text>Select passengers</Text>
            <TextInput placeholder="1 adult" />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <button type="button"></button>
            <Text>Lowest Fare</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <button onPress={props.handleSubmit} Title="Search" />
          </TouchableOpacity>
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
