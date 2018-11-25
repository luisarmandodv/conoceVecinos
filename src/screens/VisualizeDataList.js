import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { ListItem, List } from "react-native-elements";

export default class VisualizeDataList extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Maluma Baby"
            subtitle={"20/12/2017"}
            rightTitle={"180 mg/dl"}
            roundAvatar
            hideChevron
            avatar={{}}
            avatarContainerStyle={{ backgroundColor: "red" }}
          />
          <ListItem
            title="Maluma Baby"
            subtitle={"20/12/2017"}
            rightTitle={"120 mg/dl"}
            roundAvatar
            hideChevron
            avatar={{}}
            avatarContainerStyle={{ backgroundColor: "yellow" }}
          />
          <ListItem
            title="Maluma Baby"
            subtitle={"20/12/2017"}
            rightTitle={"100 mg/dl"}
            roundAvatar
            hideChevron
            avatar={{}}
            avatarContainerStyle={{ backgroundColor: "green" }}
          />
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
