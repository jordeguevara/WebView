// import React, {Component} from 'react';
// import {StatusBar} from 'react-native';

declare var global: {HermesInternal: null | {}};

import {WebView} from 'react-native-webview';
// class MyWeb extends Component {
//   render() {
//     return (
//       <WebView
//         source={{uri: 'http://flippant-fear.surge.sh/'}}
//         onMessage={event => {
//           alert(event.nativeEvent.data);
//         }}
//         style={{flex: 1, backgroundColor: 'green'}}
//       />
//     );
//   }
// }

// const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <MyWeb />
//     </>
//   );
// };

// export default App;

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';

// const url = 'https://github.com/facebook/react-native'
// const url = 'https://in.yahoo.com/?p=us'
// const url = 'https://google.com';
const url = 'https://poplme.co';

class TestWebView extends Component {
  render() {
    var renderTime = Date.now();

    return (
      <WebView
        source={{uri: url}}
        style={{marginTop: 20, flex: 1}}
        onLoadEnd={() => {
          console.log(
            'On load event',
            `Loading time : ${Date.now() - renderTime}`,
          );
        }}
      />
    );
  }
}
console.log('two');
console.log('threee');
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      url: 'https://poplme.co',
    };
  }

  handlePress = () => {
    this.setState({url: 'https://poplme.co/?sAction=EditProfile'});
    console.log('pressed');
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <>
          <TestWebView />

          <TouchableOpacity
            style={{
              position: 'absolute',
              top: '50%',
              backgroundColor: 'blue',
            }}
            onPress={this.handlePress}>
            <Text>Profile</Text>
          </TouchableOpacity>
        </>
      );
    }

    return (
      <View style={styles.container}>
        <View style={{height: 0, width: 0}}>
          <WebView
            cacheEnabled
            bounces={false}
            source={{uri: this.state.url}}
            onLoad={() => {
              this.setState({isLoaded: true});
            }}
          />
        </View>
        <ActivityIndicator />
      </View>
    );
  }
}

console.log('3');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
