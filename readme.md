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
- *box-shadow: h-offset v-offset blur spread color*
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
>[!NOTE]
>If you have the nested Text Component then it will apply the same style on children Text component

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
>[!NOTE]
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
The layouts area based on the *position* property, which defines how an element is positioned within its parent container
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