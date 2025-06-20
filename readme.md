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

> [!NOTE]
> _Here the **flex: 1** is appplied to occupy the whole screen height and width_

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

> [!NOTE]
> Any text must be wrapped with 'Text' component otherwise it will throw the error

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

> [!NOTE]
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

> [!NOTE]
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

## ActivityIndicator

- The ActivityIndicator component displays a circular loading indicator
- It is used to inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.

```
<!-- App.js -->

import { View, ActivityIndicator } from 'react-native';

export default function App() {
   const isVisible = false;
   return (
      <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
         <ActivityIndicator />
         <ActivityIndicator size="large" />
         <ActivityIndicator size="large" color="midnightblue" />
          <ActivityIndicator size="large" color="midnightblue" animating={isVisible} />
      </View>
   )
}
```

## Alert

- Alert launches an alert dialog with specified title and message
- Optionally, you can also specify a list of buttons

```
<!-- App.js -->

import { View, Button, Alert } from 'react-native';

export default function App() {
   return (
      <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
         <Button title="Alert 1" onPress={() => Alert.alert("Invalid data!")} />
         <Button title="Alert 2" onPress={() => Alert.alert("Invalid data!", 'DOB Incorrect')} />
         <Button title="Alert 2" onPress={() => Alert.alert("Invalid data!", 'DOB Incorrect', [
            { text: 'Ok', onPress: () => "Ok Pressed" },
            { text: 'Cancel', onPress: () => "Cancel Pressed" },
         ])} />
      </View>
   )
}
```

## Custom Component

- You can create any component and use them like react component

```
<!-- App.js -->

import {View} from 'react-native';
import Greet from './Greet';

export default function App() {
   return (
      <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
         <Greet name="Ajay Kumar" />
         <Greet name="Vijay Kumar" />
      </View>
   )
}
```

```
<!-- Greet.js -->

import {View, Text} from 'react-native';

export default function Greet({name}) {
    return (
        <View>
            <Text>Hello, {name}</Text>
        </View>
    )
}
```

## Styling React Native Apps

- React Native does not use CSS for styling
- You style your app using JavaScript
- Name are written in camel case. Ex. backgroundColor instead of background-color

## Style Approaches

- Inline styles: using the style attribute
- StyleSheet API: provided by react native api
- We have already see the style attribute so now we will focus on StyleSheet API

```
<!-- App.js -->

import { View, Text, StyleSheet } from 'react-native';

export default function App() {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>StyleSheet API</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1, backgroundColor: 'plum', padding: 60
   },
   title: {
      color: 'midnightblue'
   }
})

```

Multiple Styles

```
<!-- App.js -->

import { View, Text, StyleSheet } from 'react-native';

export default function App() {
   return (
      <View style={styles.container}>
         <View style={[styles.box, styles.lightblueBg]}>
            <Text>Lightblue box</Text>
         </View>
         <View style={[styles.box, styles.lightgreenBg]}>
            <Text>Lightgreen box</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1, backgroundColor: 'plum', padding: 60
   },
   box: {
      width: 100,
      height: 100,
      padding: 10,
   },
   lightblueBg: {
      backgroundColor: 'lightblue',
   },
   lightgreenBg: {
      backgroundColor: 'lightgreen',
   }
})
```

## Box Model

- We can add the paddingHorizontal and paddingVertical, similarly, marginHorizontal and marginVertical.
- border: "2px solid purple", this border style will not work in react native, we need to specify each property individual ex: borderWidth: 2, borderColor: 'purple'
- When you add the borderRadius on Text component it will apply only for android device not for the iOS
- If you really want to add the borderRadius on Text component then Wrap the Text component inside the View Component and apply borderRadius on View component

```
<!-- App.js -->

import { View, Text, StyleSheet } from 'react-native';

export default function App() {
   return (
      <View style={styles.container}>
         <View style={[styles.box, styles.lightblueBg]}>
            <Text style={{borderRadius: 5, backgroundColor: 'red'}}>Lightblue box</Text>
         </View>
         <View style={[styles.box, styles.lightgreenBg]}>
            <Text>Lightgreen box</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1, backgroundColor: 'plum', padding: 60
   },
   box: {
      width: 100,
      height: 100,
      // padding: 10,
      paddingHorizontal: 10,
      paddingVertical: 20,
      // border: "2px solid purple" // This will not work in react native, We need to add each property individually, no need to add the borderStyle, its by default solid
      borderWidth: 2,
      borderColor: "purple",
      borderRadius: 5,
   },
   lightblueBg: {
      backgroundColor: 'lightblue',
   },
   lightgreenBg: {
      backgroundColor: 'lightgreen',
   }
})
```

## Box Shadow

- _box-shadow: h-offset v-offset blur spread color_
- box-shadow will not apply on android device, only shadowColor will be apply on both android and iOS,
- To add the box shadow on android we need to use the elevation property, you can see the example below
- To apply the cross platform box shadow we need to use the third party packages

```
<!-- App.js -->

import { View, Text, StyleSheet } from 'react-native';

export default function App() {
   return (
      <View style={styles.container}>
         <View style={[styles.box, styles.lightblueBg, styles.boxShadow, styles.androidShadow]}>
            <Text style={{borderRadius: 5, backgroundColor: 'red'}}>Lightblue box</Text>
         </View>
         <View style={[styles.box, styles.lightgreenBg, styles.boxShadow, styles.androidShadow]}>
            <Text>Lightgreen box</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1, backgroundColor: 'plum', padding: 60
   },
   box: {
      width: 250,
      height: 250,
      // padding: 10,
      paddingHorizontal: 10,
      paddingVertical: 20,
      // border: "2px solid purple" // This will not work in react native, We need to add each property individually, no need to add the borderStyle, its by default solid
      borderWidth: 2,
      borderColor: "purple",
      borderRadius: 5,
      marginTop: 20
   },
   lightblueBg: {
      backgroundColor: 'lightblue',
   },
   lightgreenBg: {
      backgroundColor: 'lightgreen',
   },
   boxShadow: {
      shadowColor: "#333333",
      shadowOffset: {
         width: 6,
         height: 6
      },
      shadowOpacity: 0.6,
      shadowRadius: 4
   },
   androidShadow: {
      elevation: 10
   }
})
```

## Style Inheritance

- CSS Inheritance

```
<div style="color:red">
   <p>Red colored text</p>
</div>
```

Output: Red colored text

- But in react native it will not be inherited to text
- If we need to apply the style on text then we need to add the style on Text component
- See the example below for better understanding
  > [!NOTE]
  > If you have the nested Text Component then it will apply the same style on children Text component

```
<!-- App.js -->

import { View, Text, StyleSheet } from 'react-native';

export default function App() {
   return (
      <View style={styles.container}>
         <View style={styles.darkMode}>
            <Text style={styles.darkModeText}>Dark Mode Text<Text style={styles.boldText}> in Bold</Text></Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1, backgroundColor: 'plum', padding: 60
   },
   darkMode: {
      backgroundColor: "black"
   },
   darkModeText: {
      color: "white"
   },
   boldText: {
      fontWeight: 'bold'
   }
})
```

Output will be: Dark Mode Text **in Bold**

> [!NOTE]
> For the above output, background color will be black and color of the text will be white as it will apply the same style on nested Text component

## Layout with Flexbox

- At the core of layout design in React Native is Flexbox
- Flexbox is a powerful one-dimensional layout model used to arrange elements within a container
- With Flexbox, we have the freedom to arrange items either horizontally (from left to right or right to left) or vertically (from top to bottom or bottom to top)
- You can easily control the spacing and alignment of items within the container

**Flexbox consists of two main entities**

- flex container
- flex items

```
<View>
   <View>Item 1</View>
   <View>Item 2</View>
   <View>Item 3</View>
</View>
```

**Axes:**

- Main axis : top to bottom
- Cross axis : left to right

**Learning Flexbox**

- Much like learning CSS
- Farmiliarize yourself with the varios Flexbox properties and understand how they function
- Once you grasp the concepts of Flexbox, you'll have a solid understanding of how layouts are created in React Native

## flex

- The flex property plays a crucial role in defining how much of a view will fill the screen along the main axis
- It accepts an integer value greater than or eqaul to 0, indicating the fraction of the available space the component should occupy
- In React native View component is by default set with display: flex

```
<!-- App.js -->

import {View, StyleSheet} from 'react-native';
import Box from './components/Box';
export default function App() {
   return <View style={styles.container}>
         <Box style={{backgroundColor: '#8e9b00', flex: 1}}>Box 1</Box>
         <Box style={{backgroundColor: '#b65d1f', flex: 1}}>Box 2</Box>
         <Box style={{backgroundColor: '#1c4c56', flex: 1}}>Box 3</Box>
         <Box style={{backgroundColor: '#ab9156'}}>Box 4</Box>
         <Box style={{backgroundColor: '#6b0803'}}>Box 5</Box>
         <Box style={{backgroundColor: '#1c4c56'}}>Box 6</Box>
         <Box style={{backgroundColor: '#b95f21'}}>Box 7</Box>
      </View>
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 64,
      borderWidth: 6,
      borderColor: "red"
   }
})
```

```
<!-- components/Box.js -->

import {View, Text, StyleSheet} from 'react-native';

export default function Box({children, style}) {
    return(
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        padding: 20
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center',
        color: 'white'
    }
})
```

##### Add the notes from video 29 to 37 here

## Relative and Absolute Layout

The layouts area based on the _position_ property, which defines how an element is positioned within its parent container

- relative
- absolute

<ins>**Relative layout**</ins>

- In this layout, an element is positioned according to the normal flow of the layout
- It remains in its original position and can be offset from that position using the top, right, bottom and left values
- Importantly, this offset does not affect the positioning of any sibling or parent elements.

<ins>**Absolute layout**</ins>

- In this layout, an element does not participate in the normal flow of the layout
- It is instead laid out independently of its siblings
- The position of the element is determined by the top, right, bottom, and left values, which specify specific coordinates relative to its parent container.

```
import {View, StyleSheet} from 'react-native';
import Box from './components/Box';
export default function App() {
   return <View style={styles.container}>
         <Box style={{backgroundColor: '#8e9b00', left: 75, top: 75}}>Box 1</Box>
         <Box style={{backgroundColor: '#b65d1f'}}>Box 2</Box>
         <Box style={{backgroundColor: '#1c4c56'}}>Box 3</Box>
         <Box style={{backgroundColor: '#ab9156', position: 'absolute', left: 100, top: 100}}>Box 4</Box>
         <Box style={{backgroundColor: '#6b0803'}}>Box 5</Box>
         <Box style={{backgroundColor: '#1c4c56'}}>Box 6</Box>
         <Box style={{backgroundColor: '#b95f21'}}>Box 7</Box>
      </View>
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 64,
      borderWidth: 6,
      borderColor: "red"
   }
})
```

## Dynamic User Interfaces

- Currently, all our learning has centered around iPhone 14 and Pixel 4 devices
- Our app's users won't all be using identical devices
- Device sizes may vary, ranging from more compact phones to larger devices like iPads or Android tablets
- We must ensure that our app's user interface remains responsive to these different device sizes while maintaining an optimal user experience
- On the same device, a user might opt for portrait mode, while another preferes landscape orientation

- The below code will work fine on android or iOS mobile device but looks not much better on iPad devices
- So solution is Dimensions api

```
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: "lightblue",
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24
  }
});
```

## Dimensions API

```
<!-- App.js -->

import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: windowWidth > 500 ? "70%" : "90%",
    height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: "lightblue",
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: windowWidth > 500 ? 50 : 24
  }
});

```

## Dimensions API drawback

- It will create issue with landscape and portrait mode, when you change the mobile device from portrait to landscape then you need to restart the application to get the correct dimensions
- One posible solution is to handle on change the dimension

```
import {useState, useEffect} from 'react';

import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  const [dimensions, setDimensions] = useState({window: Dimensions.get('window')});

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', (window) => {
      setDimensions({window});
    })
    return () => subscription?.remove();
  })
  const {window} = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;

  return (
    <View style={styles.container}>
      <View style={[styles.box, {
        width: windowWidth > 500 ? "70%" : "90%",
        height: windowHeight > 600 ? "60%" : "90%",
      }]}>
        <Text style={{fontSize: windowWidth > 500 ? 50 : 24}}>Welcome!</Text>
      </View>
    </View>
  );
}

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: "lightblue",
    alignItems: 'center',
    justifyContent: 'center'
  },
  // text: {
  //   fontSize: windowWidth > 500 ? 50 : 24
  // }
});

```

## useDimensions hook

```
<!-- App.js -->

import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.container}>
      <View style={[styles.box, {
        width: windowWidth > 500 ? "70%" : "90%",
        height: windowHeight > 600 ? "60%" : "90%",
      }]}>
        <Text style={{fontSize: windowWidth > 500 ? 50 : 24}}>Welcome!</Text>
      </View>
    </View>
  );
}

```

## SafeAreaView

```
<!-- App.js -->

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
        </View>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum'
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
  box: {
    padding: 20
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center'
  }
});
```

## Platform Specific Code

- When developing a corss-platform app, maximizing code reuse is a priority
- There are situations where it becomes necessary to tailor your code to specific platforms
- React Native offers two approaches for organizing and separating platform-specific code
  - Platform module
  - Platform-specific file extensions

```
<!-- App.js -->

import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton/CustomButton';

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
          <CustomButton title="Press Me" onPress={() => alert("Pressed")} />
        </View>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum'
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  box: {
    padding: 20
  },
  text: {
    ...Platform.select({
      ios: {
        color: 'purple',
        fontSize: 24,
        fontStyle: 'italic'
      },
      android: {
        color: "blue",
        fontSize: 30
      }
    }),
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
```

```
<!-- components/CustomButton/CustomButton.android.js -->

import React from 'react';
import { Pressable, Text } from 'react-native';

const CustomButton = ({onPress, title}) => (
    <Pressable
        onPress={onPress}
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightblue',
            borderRadius: 5,
            padding: 10
        }}
    >
        <Text style={{color: 'blue', fontSize: 18}}>{title}</Text>
    </Pressable>
)

export default CustomButton;
```

```
<!-- components/CustomButton/CustomButton.ios.js -->

import React from 'react';
import { Pressable, Text } from 'react-native';

const CustomButton = ({onPress, title}) => (
    <Pressable
        onPress={onPress}
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightblue',
            borderRadius: 20,
            padding: 10
        }}
    >
        <Text style={{color: 'purple', fontSize: 18}}>{title}</Text>
    </Pressable>
)

export default CustomButton;
```

## Pokemon Exercise

```
<!-- App.js -->

import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {
  const charmanderData = {
    name: "Charmander",
    image: require('./assets/charmander.png'),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"]
  }
  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: Platform.OS === 'android' ? 25 : 0
  },
});

```

```
<!-- components/PokemonCard.js -->

import { View, Text, StyleSheet, Platform, Image } from 'react-native';

export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses
}) {

    const getTypeDetails = (type) => {
        switch (type.toLowerCase()) {
            case "electric":
                return { borderColor: "#FFD700", emoji: "⚡️" };
            case "water":
                return { borderColor: "#6493EA", emoji: "💧" };
            case "fire":
                return { borderColor: "#FF5733", emoji: "🔥" };
            case "grass":
                return { borderColor: "#66CC66", emoji: "🌿" };
            default:
                return { borderColor: "#A0A0A0", emoji: "❓" };
        }
    };
    const { borderColor, emoji } = getTypeDetails(type);
    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤️HP: {hp}</Text>
            </View>
            <Image style={styles.image} source={image} accessibilityLabel={`${name} pokemon`} resizeMode='contain' />
            <View style={styles.typeContainer}>
                <View style={[styles.badge, { borderColor }]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>
            <View style={styles.movesContainer}>
                <Text style={styles.moveText}>Moves: {moves.join(", ")}</Text>
            </View>
            <View style={styles.weaknessContainer}>
                <Text style={styles.weaknessText}>Weakness: {weaknesses.join(", ")}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 2, height: 2
                },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 5
            }
        })
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32
    },
    name: {
        fontSize: 30,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 22
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16
    },
    typeContainer: {
        alignItems: "center",
        marginBottom: 40
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4
    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12
    },
    typeText: {
        fontSize: 22,
        fontWeight: "bold"
    },
    movesContainer: {
        marginBottom: 12,
    },
    moveText: {
        fontSize: 22,
        fontWeight: "bold",
    },
    weaknessContainer: {
        marginBottom: 8,
    },
    weaknessText: {
        fontSize: 22,
        fontWeight: "bold",
    },
})
```

## Lists

- The below example is done by using the map method which is not the recommended way
- The reason because when we use the map method then it will render the all list items although we need to show only the 6-10 item on page (view), when we scroll then only it should be render.
- Solution is FlatList

```
<!-- App.js -->

import { StyleSheet, ScrollView, View, SafeAreaView, Text, StatusBar } from 'react-native';
import pokemonList from './data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => {
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight + 20
  },
  scrollView: {
    paddingHorizontal: 20
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16
  },
  cardText: {
    fontSize: 30
  }
});

```

```
<!-- data.json -->

[
 { "id": "1", "type": "Grass", "name": "Bulbasaur" },
  { "id": "2", "type": "Grass", "name": "Ivysaur" },
  { "id": "3", "type": "Grass", "name": "Venusaur" },
  { "id": "4", "type": "Fire", "name": "Charmander" },
  { "id": "5", "type": "Fire", "name": "Charmeleon" },
  { "id": "6", "type": "Fire", "name": "Charizard" },
  { "id": "7", "type": "Water", "name": "Squirtle" },
  { "id": "8", "type": "Water", "name": "Wartortle" },
  { "id": "9", "type": "Water", "name": "Blastoise" }
]
```

## FlatList

- FlatList component renders only the items currently in view, making it highly performant for long lists

```
<!-- App.js -->

import { StyleSheet, View, SafeAreaView, Text, StatusBar, FlatList } from 'react-native';
import pokemonList from './data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flastListWrapper}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            console.log('pokemon', item.id);
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            )
          }}
          // horizontal
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={<View style={{height: 16}} />}
          ListEmptyComponent={<Text>No items found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
          ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight + 20
  },
  flastListWrapper: {
    paddingHorizontal: 20
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
   // marginBottom: 16
  },
  cardText: {
    fontSize: 30
  },
   headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold'
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center'
  }
});

```

## SectionList

- A performant component designed for rendering sectioned lists

```
<!-- App.js -->

import { StyleSheet, View, SafeAreaView, Text, StatusBar, SectionList } from 'react-native';
import groupedData from './grouped-data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flastListWrapper}>
        <SectionList
          sections={groupedData}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            )
          }}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )}
          ItemSeparatorComponent={() => <View style={{height: 16}} />}
          SectionSeparatorComponent={() => <View style={{height: 16}} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight + 20
  },
  scrollView: {
    paddingHorizontal: 20
  },
  flastListWrapper: {
    paddingHorizontal: 20
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold'
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center'
  },
  sectionHeaderText: {
    backgroundColor: "white",
    fontSize: 23,
    fontWeight: 'bold'
  }
});

```

```
<!-- grouped-data.json -->

[
  {
    "type": "Grass",
    "data": ["Bulbasaur", "Ivysaur", "Venusaur"]
  },
  {
    "type": "Fire",
    "data": ["Charmander", "Charmeleon", "Charizard"]
  },
  {
    "type": "Water",
    "data": ["Squirtle", "Wartortle", "Blastoise"]
  },
  { "type": "Electric", "data": ["Pikachu", "Raichu"] }
]
```

## Inputs in RN vs. Web

- In web development, we have lots of HTML elements at our disposal to capture user input
- For example, input fields, text areas, dropdown menus, checkboxes, radio groups, and many more
- The core RN library only provides TextInput and Switch
- These will be sole focus of our learning in this section
- "What about the other components?"
- Expo expands our toolkit, offering additional components like checkboxes and date pickers through the Expo SDK.

## Forms in RN

- **Managing Form State**: Controlling the dynamic data within our forms
- **Handling Form Validation**: Ensuring the integrity and validity of the user's input
- **Displaying Validation Messages**: Communicating the results of validation to the user
- **Submitting Form Data**: Sending the collected information where it needs to go

## TextInput

- TextInput component is a fundamental building block for user input in React Native
- It allows users to enter text and other data into your app.
- The below example show the input box and multiline input box (textarea in web)

```
<!-- App.js -->
import { StyleSheet, StatusBar, SafeAreaView, TextInput, Text } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder='email@example.com'
        autoCorrect={false}
        autoCapitalize='none'
        // secureTextEntry // For password
        // keyboardType='numeric'
      />
      <TextInput style={[styles.input, styles.multilineText]} placeholder='message' multiline />
      <Text>My Name is {name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: 'top'
  }
});

```

## Switch

- The switch component serves as a valuable tool for integrating toggles into your app's user interface
- It's particularly well-suited for scenarios where you require users to make binary choices, such as enabling or disabling specific app features.

```
<!-- App.js -->

import { StyleSheet, StatusBar, SafeAreaView, View, Switch } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setDarkMode((prevState) => !prevState)}
          trackColor={{ false: "#767577", true: "lightblue"}}
          thumbColor="#f4f3f4"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10
  }
});

```

## Login Form

```
<!-- App.js -->
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Image, Platform } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {};
    if(!username) {
      errors.username = "Username is required";
    }
    if(!password) {
      errors.password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = () => {
    if(validateForm()) {
      console.log('Submitted', username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  }
  return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={styles.container}>
      <View style={styles.form}>
        <Image source={require("./assets/adaptive-icon.png")} style={styles.image} />
        <Text style={styles.label}>UserName</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your name'
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
         {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5"
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  },
  image : {
    width: 400,
    height: 400,
    alignSelf: 'center',
    marginBottom: 50
  },
  errorText: {
    color: "red",
    marginBottom: 10
  }
})

```

## Networking
- Fetching and submitting data to an API
- Loading States
- Error handling
- FlatList component to display our data

#### GET Request

```
<!-- App.js -->

import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, ActivityIndicator } from 'react-native';

export default function App() {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async (limit = 10) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const data = await response.json();
    setPostList(data);
    setLoading(false);
  }
  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            )
          }}
          ItemSeparatorComponent={() => (
            <View style={{ height: 16 }}></View>
          )}
          ListEmptyComponent={<Text>No Posts Found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
          ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1
  },
  titleText: {
    fontSize: 30
  },
  bodyText: {
    fontSize: 24,
    color: "#666666"
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12
  }
});

```

#### POST Request

```
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, ActivityIndicator, TextInput, Button } from 'react-native';

export default function App() {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const data = await response.json();
      setPostList(data);
      setLoading(false);
      setError('');
    } catch (error) {
      console.log('Error fetching data: ', error);
      setLoading(false);
      setError('Failed to fetch post list');
    }

  }
  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  }

  const addPost = async () => {
    setIsPosting(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: postTitle,
          body: postBody
        })
      })

      const newPost = await response.json();
      setPostList([newPost, ...postList]);
      setIsPosting(false);
      setError('');
    } catch (error) {
      console.log('Error while posting data: ', error);
      setIsPosting(false);
      setError('Failed to post data');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) :
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Post Title'
              value={postTitle}
              onChangeText={setPostTitle}
            />
            <TextInput
              style={styles.input}
              placeholder='Post Body'
              value={postBody}
              onChangeText={setPostBody}
            />
            <Button title={isPosting ? 'Adding...' : 'Add'} onPress={addPost} disabled={isPosting} />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={postList}
              renderItem={({ item }) => {
                return (
                  <View style={styles.card}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.bodyText}>{item.body}</Text>
                  </View>
                )
              }}
              ItemSeparatorComponent={() => (
                <View style={{ height: 16 }}></View>
              )}
              ListEmptyComponent={<Text>No Posts Found</Text>}
              ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
              ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1
  },
  titleText: {
    fontSize: 30
  },
  bodyText: {
    fontSize: 24,
    color: "#666666"
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8
  },
  errorContainer: {
    backgroundColor: "#ffc0cb",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: 'center'
  },
  errorText: {
    color: "#d8000c",
    fontSize: 16,
    textAlign: 'center'
  }
});

```

## Navigation
- The mechanism that allows users to move accross different screens, access features, and generally use your app effectively
- A go-to solution for handling navigation is the React Navigation library
- Expo has its own built-in routing feature exlusive to Expo projects
- React Navigation works both with and without Expo in React Native apps

**React Navigation**
- Provides a variety of navigators like Stack, Drawer, and Tab navigators
- Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.
- Drawer Navigator renders a navigation drawer on the side of the screen which can be opened and closed via gestures
- A tab navigator at the bottom of the your screen lets you easily switch between different routes

**Install the following command**
- *npm install @react-navigation/native*
- *npx expo install react-native-screens react-native-safe-area-context*

### Stack Navigation
- Each new screen is stacked on top of the previous one like a deck of cards
- When you navigate to a new screen, a new card is placed on top of the stack, and when you navigate back, the top card is removed, revealing the previous screen
- Allows users to drill down into detailed views and then retrace their steps when done
- It's particularly useful in scenarios where a linear flow of screens is required 
- For example List View to Details View to More Details View
- React Navigation provides two navigators : Stack Navigator and Native Stack Navigator
- The Stack Navigator is a JavaScript-based navigator which offers a high degree of customization, making it a great choice for apps that require a unique navigation experience
- However, this comes at the cost of performance especially when compared to its counterpart, the Native Stack Navigator
- The Native Stack Navigator leverages the native navigation constructs of iOS and Android, providing better performance and a more native feel to the transitions and gestures
- The caveat here is, it might not offer the same level of customization as the stack Navigator

**Install the below command to use the Native Stack Navigator**
- *npm install @react-navigation/native-stack*

Now you can see the code how to use the Native Stack Navigation and how to pass the data from one screen to another

```
<!-- App.js -->

import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// navigation props only works in screen component if any nested component then use the useNavigation() hooks, and it will work everywhere 
// export default function HomeScreen({navigation}) {
export default function HomeScreen({route}) {
    const navigation = useNavigation();
    const data = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Text style={styles.text}>{data?.result}</Text>
            <Button title="Go to About" onPress={() => navigation.navigate('About', {
                name: "Prabhat"
            })} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})
```

```
<!-- screens/HomeScreen.js -->

import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// navigation props only works in screen component if any nested component then use the useNavigation() hooks, and it will work everywhere 
// export default function HomeScreen({navigation}) {
export default function HomeScreen({route}) {
    const navigation = useNavigation();
    const data = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Text style={styles.text}>{data?.result}</Text>
            <Button title="Go to About" onPress={() => navigation.navigate('About', {
                name: "Prabhat"
            })} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})
```

```
<!-- screens/AboutScreen.js -->

import {View, Text, StyleSheet, Button} from 'react-native';

export default function AboutScreen({navigation, route}) {
    const {name} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen {name}</Text>
            <Button title="Go to Home Screen" onPress={() => navigation.navigate("Home", {
                result: "Result data from about"
            })} />
            <Button title="Update the name" onPress={() => navigation.setParams({name: "Ajay"})} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})
```

**Stack Navigation Options**
- You can see the particular screen level options and for every screen options 

```
<!-- App.js -->

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerStyle: {
            backgroundColor: "#6a51ae"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerRight: () => {
            return <Pressable onPress={() => alert("Menu button pressed!")}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
            </Pressable>
          },
          contentStyle: {
            backgroundColor: "#e8e4f3"
          }}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: "Welcome Home",
          // headerStyle: {
          //   backgroundColor: "#6a51ae"
          // },
          // headerTintColor: "#fff",
          // headerTitleStyle: {
          //   fontWeight: 'bold'
          // },
          // headerRight: () => {
          //   return <Pressable onPress={() => alert("Menu button pressed!")}>
          //     <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
          //   </Pressable>
          // },
          // contentStyle: {
          //   backgroundColor: "#e8e4f3"
          // }
        }} />
        <Stack.Screen name="About" component={AboutScreen} initialParams={{ name: "Guest" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

**Dynamic Stack Navigator Options**
- Please make sure from HomeScreen component we are passing the data in name variable

```
<Stack.Screen name="About" component={AboutScreen} initialParams={{ name: "Guest" }} 
          options={({route}) => {
            return {
              title: route.params?.name
            }
          }}
/>
```

```
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerStyle: {
            backgroundColor: "#6a51ae"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerRight: () => {
            return <Pressable onPress={() => alert("Menu button pressed!")}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
            </Pressable>
          },
          contentStyle: {
            backgroundColor: "#e8e4f3"
          }}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: "Welcome Home",
        }} />
        <Stack.Screen name="About" component={AboutScreen} initialParams={{ name: "Guest" }} 
          options={({route}) => {
            return {
              title: route.params?.name
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

**One more option to do the same thing**

```
<!-- AboutScreen.js -->

import {View, Text, StyleSheet, Button} from 'react-native';
import { useLayoutEffect } from 'react';

export default function AboutScreen({navigation, route}) {
    const {name} = route.params;
    useLayoutEffect(() => {
        navigation.setOptions({
            title: name
        })
    }, [navigation, name]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen {name}</Text>
            <Button title="Go to Home Screen" onPress={() => navigation.navigate("Home", {
                result: "Result data from about"
            })} />
            <Button title="Update the name" onPress={() => navigation.setParams({name: "Ajay"})} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})
```

## Drawer Navigation
- Drawer Navigator introduces a hidden menu, sliding from either side of the screen
- It is particularly beneficial in apps with multiple main sections that require a neat and organized navigation structure

**Install the following commands**
- *npm install @react-navigation/drawer*
- *npx expo install react-native-gesture-handler react-native-reanimated*

and also add this line inside the babel.config.js

plugins: [
      'react-native-reanimated/plugin'
]

```
<!-- babel.config.js -->

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin'
    ]
  };
};

```

```
<!-- App.js -->

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Dashboard" component={DashboardScreen} />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
```

```
<!-- DashboardScreen.js -->

import { View, Text, StyleSheet, Button } from 'react-native';

export default function DashboardScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard Screen</Text>
            <Button title='Toggle Drawer' onPress={() => navigation.toggleDrawer()} />
            <Button title='Settings' onPress={() => navigation.jumpTo("Settings")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})
```

```
<!-- SettingsScreen.js -->

import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})
```

**Drawer Navigator Options**

```
<!-- App.js -->

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen 
                    name="Dashboard" 
                    component={DashboardScreen} 
                    options={{
                        title: "My Dashboard",
                        drawerLabel: "Dashboard Label",
                        drawerActiveTintColor: "#333",
                        drawerActiveBackgroundColor: "lightblue",
                        drawerContentStyle: {
                            backgroundColor: "#c6cbef"
                        }
                    }}
                />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
```

```
<!-- App.js -->

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/SettingsScreen";
import CourseListScreen from "./screens/CourseList";
import ProfileScreen from "./screens/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from "./AppStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          //   tabBarShowLabel: false,
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "purple",
        }}
      >
        <Tab.Screen name="Course List" component={CourseListScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "My Profile",
            tabBarIcon: () => <Ionicons name={"person"} size={20} />,
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen
          name="About Stack"
          component={AboutStack}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

```
<!-- screens/CourseList.js -->

import { View, Text, StyleSheet } from "react-native";

const CourseListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CourseListScreen</Text>
    </View>
  );
};

export default CourseListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
```

```
<!-- screens/Profile.js -->

import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
```

```
<!-- AppStack.js -->

import { Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createNativeStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#6a51ae" },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: "#fff",
        contentStyle: { backgroundColor: "#e8e4f3" },
        headerRight: () => (
          <Pressable onPress={() => alert("Menu button pressed!")}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Welcome Home",
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        initialParams={{
          name: "Guest",
        }}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AboutStack />
    </NavigationContainer>
  );
}
```