import React, { Component } from "react";
import { ScrollView, View, Button, Text } from "react-native";
import { Tile, List, ListItem } from "react-native-elements";
import PureChart from "react-native-pure-chart";
import moment from "moment";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {} from "../state/actions/index.js";

class GrandpaDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hideChartButton: false
    };
  }

  generateData = () => {
    var data = [];
    var data2 = [];
    var data3 = [];
    var startDate = moment();
    for (var i = 0; i < 10; i++) {
      startDate.add(1, "days");
      data.push({
        x: startDate.format("YYYY-MM-DD"),
        y: Math.round(Math.random() * 500)
      });
      data2.push({
        x: startDate.format("YYYY-MM-DD"),
        y: Math.round(Math.random() * 50) + 0.5
      });
      data3.push({
        x: startDate.format("YYYY-MM-DD"),
        y: Math.round(Math.random() * 1000)
      });
    }

    this.setState({
      data: [{ seriesName: "test2", data: data2, color: "#0e95de" }],
      hideChartButton: true
    });
  };

  render() {
    const { name, first_name } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={require("../assets/icons/abuelo.png")}
          onPress={() => {
            this.props.navigation.navigate("userPersonalData", {
              ...this.props.navigation.state.params
            });
          }}
          featured
          height={200}
          title={`${name.toUpperCase()} ${first_name.toUpperCase()}`}
        />

        <List>
          <ListItem
            title="Glucosa"
            rightTitle={this.props.glucoseStatus + " mg/dl"}
            roundAvatar
            avatar={{}}
            avatarContainerStyle={
              this.props.glucoseStatus <= 115
                ? { backgroundColor: "green" }
                : this.props.glucoseStatus <= 180
                  ? { backgroundColor: "yellow" }
                  : { backgroundColor: "red" }
            }
            onPress={() => this.props.navigation.navigate("introduceData")}
          />
        </List>

        <View style={{ padding: 20 }}>
          <Button
            style={{ marginTop: 20 }}
            title="Ver historial"
            onPress={() => this.props.navigation.navigate("visualizeDataList")}
          >
            <Text>Ver historial</Text>
          </Button>

          <PureChart type={"line"} data={this.state.data} />
          {this.state.hideChartButton ? (
            <View />
          ) : (
            <Button
              style={{ marginTop: 20 }}
              title="Generar gráfica"
              onPress={this.generateData}
            >
              <Text>Generar gráfica</Text>
            </Button>
          )}
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  const { glucoseStatus } = state.reducers;
  return {
    glucoseStatus
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(GrandpaDetail);
