## View
- The View Component is a fundamental core component in React Native that serves as a building blok for creating user interfaces.
- It functions as a container that supports layout using flexbox, styling, touch handling and accessibility controls.
- In web development terms, the View component can be compared to the '<div>' tag
- The View component is typically nested inside other views and can have zero or more children of any type.

```
<!-- App.js -->

import { View, Text } from "react-native";

export default function App() {
  return <View style={{ flex: 1, backgroundColor: 'plum' }}>
    <View style={{ width: 200, height: 200, backgroundColor: 'lightblue' }}></View>
    <View style={{ width: 200, height: 200, backgroundColor: 'lightgreen' }}></View>
  </View>;
}
```
>[!NOTE]
> *Here the **flex: 1** is appplied to occupy the whole screen height and width*

## Text
- Component for displaying text
- It supports nesting, styling and touch handling
- Depending on the target platform, React Native will translate this component to either a UITextView (iOS), a TextView (Andriod), or 'p' (Web)

```
<!-- App.js -->

import { View, Text } from "react-native";

export default function App() {
  return <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
    <Text>Hello World</Text>
  </View>
}
```

```
import { View, Text } from "react-native";

export default function App() {
  return <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
    <Text>Hello <Text style={{color: 'white'}}>World</Text></Text>
  </View>
}
```
>[!NOTE]
>*Any text always be wrapped with 'Text' component otherwise it will throw the error*