import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import LoginForm from "../src/components/LoginForm";

it("It renderers correctly", () => {
  const hello = renderer.create(<LoginForm />);
});
