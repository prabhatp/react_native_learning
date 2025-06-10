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

> [!NOTE] > _Here the **flex: 1** is appplied to occupy the whole screen height and width_

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

> [!NOTE] >_Any text always be wrapped with 'Text' component otherwise it will throw the error_

## Image

**The Image component enables us to display various types of images, including**

- Static images
- Network images
- Images from the local disk, such as the camera roll

**React Native seamlessly translates the Image component to platform-specific counterparts**

- UIImageView for iOS
- ImageView for Android
- 'img' for the Web

```
import { View, Text, Image, ImageBackground } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");
export default function App() {
  return <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    <Image source={logoImg} style={{height: 300, width: 300}} />
    <Image source={{uri: 'https://picsum.photos/200'}} style={{height: 300, width: 300}} />
  </View>
}
```

```
import { View, Text, Image, ImageBackground } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");
export default function App() {
  return <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    <ImageBackground source={logoImg} style={{flex: 1}}>
      <Text>IMAGE TEXT</Text>
    </ImageBackground>
  </View>
}
```
>[!NOTE]
> If you are using the network image then always use the {uri: "network_image_url"}

## ScrollView
- ScrollView component wraps the platform-specific scrolling functionality
- ScrollView require a bounded height to function properly

```
import { View, Image, Text, ScrollView } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
   return <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <ScrollView>
         <Image source={logoImg} style={{ width: 300, height: 300 }}></Image>
         <Text>
            What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
         </Text>
         <Image source={logoImg} style={{ width: 300, height: 300 }}></Image>
      </ScrollView>
   </View>
}
```

## Button
- The button component allows users to trigger actions
- The button component has platform-specific rendering for iOS and Android

```
<!-- App.js -->

import { View, Button } from 'react-native';

export default function App() {
   return <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <Button title="Press" color="midnightblue" disabled onPress={() => console.log('Button Pressed')} />
   </View>
}
```
>[!NOTE]
> In react native we can write the text as child of Button component, we need to pass the title props and specify the text

## Pressable
- Pressable is a wrapper component that detects various stages of press interactions on its defined children
- You can create a custom button using Pressable
- In Addition to onPress , Pressable Component supports several others events
  - onPressIn is called when a press is activated
  - onLongPress is triggered when a press is held for longer than 500 miliseconds
  - onPressOut is called when the press gesture is deactivated

```
<!-- App.js -->

import { View, Image, Text, ScrollView, Pressable } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
   return <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
      <ScrollView>
         <Pressable onPress={() => console.log('Image Pressed')}>
            <Image source={logoImg} style={{ width: 300, height: 300 }}></Image>
         </Pressable>
         <Pressable onPress={() => console.log("Text pressed")}>
            <Text>
               What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
         </Pressable>

         <Image source={logoImg} style={{ width: 300, height: 300 }}></Image>
      </ScrollView>
   </View>
}
```

## Modal
- Modal is a screen that overlays the app content to provide information or prompt the user for a decision
- Since they are purposefully interruptive make sure you see them only when necessary
- You can pass the two value for animationType a. slide, b. fade, by default its value is none
- You can pass the two value for presentationStyle a. pageSheet, b. formSheet, by default its value is fullScreen
- formSheet is narrow while pageSheet is wider 
- presentationStyle will affect iOS device not the andriod device

```
import { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

export default function App() {
   const [isModalVisible, setModalVisible] = useState(false);

   return (
      <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
         <Button title="Press" color="midnightblue" onPress={() => setModalVisible(true)} />
         <Modal
            visible={isModalVisible}
            onRequestClose={() => setModalVisible(false)}
            animationType='slide'
            presentationStyle='pageSheet'
         >
            <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
               <Text>Modal Content</Text>
               <Button title="Close" color="midnightblue" onPress={() => setModalVisible(false)} />
            </View>
         </Modal>
      </View>
   )
}

```

## StatusBar
- The StatusBar component allows you to control the application's status bar
- The status bar is the zone, typically at the top of the screen, that displays the current time, Wi-Fi and network information, battery level other status icons
- backgroundColor prop to change the background color of the status bar
- barStyle prop to change the text color of the statusbar, you can pass the value, dark-content, light-content
- hidden prop to hide the status bar

```
<!-- App.js -->

import {View, StatusBar} from 'react-native';

export default function App() {
   return (
      <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
         <StatusBar backgroundColor="lightgreen" barStyle="dark-content" hidden />
      </View>
   )
}
```