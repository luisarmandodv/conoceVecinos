import React, { Component } from "react";
import { ScrollView } from "react-native";
import { List, ListItem, FormLabel, FormInput } from "react-native-elements";

export default class UserPersonalData extends Component {
  render() {
    const {
      name,
      first_name,
      last_name,
      blood_type,
      birthdate,
      weight,
      height
    } = this.props.navigation.state.params;
    return (
      <ScrollView>
        <FormLabel>Nombre:</FormLabel>
        <FormInput
          editable={false}
          placeholder={`${name.toUpperCase()} ${first_name.toUpperCase()}  ${last_name.toUpperCase()}`}
        />
        <FormLabel>Altura:</FormLabel>
        <FormInput editable={false} placeholder={`${height.toUpperCase()}`} />
        <FormLabel>Peso:</FormLabel>
        <FormInput editable={false} placeholder={`${weight.toUpperCase()}`} />
        <FormLabel>Fecha de nacimiento</FormLabel>
        <FormInput
          editable={false}
          placeholder={`${birthdate.toUpperCase()}`}
        />
        <FormLabel>Tipo de Sangre:</FormLabel>
        <FormInput
          editable={false}
          placeholder={`${blood_type.toUpperCase()}`}
        />
        <List>
          <ListItem title="Familiar responsable" />
          <ListItem title="Historial Médico" />
        </List>
      </ScrollView>
    );
  }
}
