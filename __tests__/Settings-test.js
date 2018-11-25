import "react-native";
import React from "react";
import Settings from "../src/screens/Settings";

import renderer from "react-test-renderer";

it("It renderers correctly", () => {
  const hello = renderer.create(<Settings />);
});
