import React from "react";
// import AppLoading from "expo";
import AppLoading from "expo-app-loading";
import { Container } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import MyHeader from "./src/components/MyHeader";
import MyTabs from "./src/components/MyTabs";

class App extends React.Component<{}, { isReady: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <MyHeader />
        <MyTabs />
      </Container>
    );
  }
}
export default App;
