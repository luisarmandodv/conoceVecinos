import { createBottomTabNavigator, StackNavigator } from "react-navigation";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import FeedScreen from "../screens/FeedScreen";
import GrandpaDetail from "../screens/GrandpaDetail";
import UserPersonalData from "../screens/UserPersonalData";
import IntroduceData from "../screens/IntroduceData";
import Settings from "../screens/Settings";
import VisualizeDataList from "../screens/VisualizeDataList";
import { Icon } from "react-native-elements";

export const FeedNavigator = StackNavigator({
  feedScreen: {
    screen: FeedScreen,
    navigationOptions: {
      title: "Lista de adultos mayores"
    }
  },
  grandpaDetail: {
    screen: GrandpaDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()} ${navigation.state.params.first_name.toUpperCase()}`
    })
  },
  userPersonalData: {
    screen: UserPersonalData
  },
  introduceData: {
    screen: IntroduceData
  },
  visualizeDataList: {
    screen: VisualizeDataList
  }
});

export const Tabs = createBottomTabNavigator({
  FeedStack: {
    screen: FeedNavigator,
    navigationOptions: {
      tabBarLabel: "Lista",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={35} color={tintColor} />
      )
    }
  },
  myAccountScreen: {
    screen: MyAccountScreen,
    navigationOptions: {
      tabBarLabel: "Mi perfil",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account-circle" size={35} color={tintColor} />
      )
    }
  }
});

export const RelativeFlow = StackNavigator({
  grandpaDetail: {
    screen: GrandpaDetail
  },
  userPersonalData: {
    screen: UserPersonalData
  },
  visualizeDataList: {
    screen: VisualizeDataList
  }
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: "Settings"
    }
  }
});

export const Root = StackNavigator(
  {
    loginScreen: {
      screen: LoginScreen
    },
    Tabs: {
      screen: Tabs
    },
    RelativeFlow: {
      screen: RelativeFlow
    },
    Settings: {
      screen: SettingsStack
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);
