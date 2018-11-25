import React, { Component } from "react";
import { ScrollView } from "react-native";
import { Tile, List, ListItem, Button } from "react-native-elements";
import { me } from "../utils/data";

export default class MyAccoutScreen extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate("Settings");
  };

  render() {
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: this.props.picture.large }}
          featured
          title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
        />

        <List>
          <ListItem
            title="Correo electronico"
            rightTitle={this.props.email}
            hideChevron
          />
          <ListItem
            title="Teléfono"
            rightTitle={this.props.phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Nombre de usuario"
            rightTitle={this.props.login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem title="Cerrar Sesión" rightIcon={{ name: "cancel" }} />
        </List>
      </ScrollView>
    );
  }
}

MyAccoutScreen.defaultProps = { ...me };
