import "react-native";
import React from "react";
import FeedScreen from "../src/screens/FeedScreen";

import renderer from "react-test-renderer";

it("It renderers correctly", () => {
  const hello = renderer.create(<FeedScreen />);
});
