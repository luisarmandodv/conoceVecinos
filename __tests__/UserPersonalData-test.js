import "react-native";
import React from "react";
import UserPersonalData from "../src/screens/UserPersonalData";

import renderer from "react-test-renderer";

it("It renderers correctly", () => {
  const hello = renderer.create(<UserPersonalData />);
});
