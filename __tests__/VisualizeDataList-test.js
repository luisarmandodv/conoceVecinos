import "react-native";
import React from "react";
import VisualizeDataList from "../src/screens/VisualizeDataList";

import renderer from "react-test-renderer";

it("It renderers correctly", () => {
  const hello = renderer.create(<VisualizeDataList />);
});
