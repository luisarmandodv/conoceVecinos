import "react-native";
import React from "react";
import IntroduceData from "../src/screens/IntroduceData";

import renderer from "react-test-renderer";

it("It renderers correctly", () => {
  const hello = renderer.create(<IntroduceData />);
});
