import "react-native";
import React from "react";
import GrandpaDetail from "../src/screens/GrandpaDetail";

import renderer from "react-test-renderer";

it("It renderers correctly", () => {
  const hello = renderer.create(<GrandpaDetail />);
});
