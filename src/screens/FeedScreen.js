import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cuidador, familiar, allgrandpas } from '../utils/newdata';

class FeedScreen extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          {allgrandpas.map(grandpa => (
            <ListItem
              key={grandpa.id}
              roundAvatar
              avatar={require('../assets/icons/abuelo.png')}
              title={`${grandpa.first_name.toUpperCase()} ${grandpa.second_name.toUpperCase()}`}
              onPress={() =>
                this.props.navigation.navigate('grandpaDetail', { ...grandpa })
              }
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  const { glucoseStatus, GrandpaArray } = state.reducers;
  return {
    glucoseStatus,
    GrandpaArray
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(FeedScreen);
