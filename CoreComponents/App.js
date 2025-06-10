import { View, Text } from "react-native";

export default function App() {
  return <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
    <Text>Hello <Text style={{color: 'white'}}>World</Text></Text>
  </View>
  // return <View style={{ flex: 1, backgroundColor: 'plum' }}>
  //   <View style={{ width: 200, height: 200, backgroundColor: 'lightblue' }}></View>
  //   <View style={{ width: 200, height: 200, backgroundColor: 'lightgreen' }}></View>
  // </View>;
}