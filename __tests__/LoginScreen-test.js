import "react-native";
import React from "react";
import LoginScreen from "../src/screens/LoginScreen";

import renderer from "react-test-renderer";

it("It renderers correctly", () => {
  const hello = renderer.create(<LoginScreen />);
});
