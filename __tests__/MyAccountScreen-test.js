import "react-native";
import React from "react";
import MyAccountScreen from "../src/screens/MyAccountScreen";

import renderer from "react-test-renderer";

it("It renderers correctly", () => {
  const hello = renderer.create(<MyAccountScreen />);
});
