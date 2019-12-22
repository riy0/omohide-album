import React, { Component } from "react";
import {
  AppRegistry,
  View,
  ScrollView,
  Text,
  Linking,
  Alert
} from "react-native";
import { Button, Card } from "react-native-elements";

export default class Card extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card title="ARDUINO" image={require("./images/image1.jpg")}>
          <Text style={{ marginBottom: 10 }}>
            I'm going to explain how to develop a mobile app to communicate with
            Bluetooth on an Arduino board...
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <Button
              style={{ width: 30 }}
              backgroundColor="white"
              color="#E91E63"
              title="READ MORE"
              onPress={() => {
                this.openUrl(
                  "http://iot.keicode.com/arduino/bluetooth-android.php"
                );
              }}
            />
            <Button
              style={{ width: 30 }}
              backgroundColor="white"
              color="#E91E63"
              title="SHARE"
              onPress={() => {
                Alert.alert("Hello!");
              }}
            />
          </View>
        </Card>

        <Card image={require("./images/image2.jpg")}>
          <Text style={{ fontSize: 28, marginBottom: 10 }}>GPS</Text>
          <Text style={{ marginBottom: 10 }}>
            This is how to put a button in a Card component.
          </Text>
          <Button
            icon={{ name: "open-in-browser" }}
            backgroundColor="#FF5722"
            title="READ MORE"
            onPress={() => {
              this.openUrl(
                "http://iot.keicode.com/electronics/gps-serial-port.php"
              );
            }}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default Card;
