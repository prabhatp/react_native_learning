import {View, StatusBar} from 'react-native';

export default function App() {
   return (
      <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
         <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />
      </View>
   )
}

// import { useState } from 'react';
// import { View, Text, Button, Modal } from 'react-native';

// export default function App() {
//    const [isModalVisible, setModalVisible] = useState(false);

//    return (
//       <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
//          <Button title="Press" color="midnightblue" onPress={() => setModalVisible(true)} />
//          <Modal
//             visible={isModalVisible}
//             onRequestClose={() => setModalVisible(false)}
//             animationType='slide'
//             presentationStyle='pageSheet'
//          >
//             <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
//                <Text>Modal Content</Text>
//                <Button title="Close" color="midnightblue" onPress={() => setModalVisible(false)} />
//             </View>
//          </Modal>
//       </View>
//    )
// }

// import { View, Button, Pressable } from 'react-native';

// export default function App() {
//    return <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
//       <Button title="Press" color="midnightblue" disabled onPress={() => console.log('Button Pressed')} />
//    </View>
// }


// import { View, Image, Text, ScrollView, Pressable } from 'react-native';
// const logoImg = require("./assets/adaptive-icon.png");

// export default function App() {
//    return <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
//       <ScrollView>
//          <Pressable onPress={() => console.log('Image Pressed')}>
//             <Image source={logoImg} style={{ width: 300, height: 300 }}></Image>
//          </Pressable>
//          <Pressable onPress={() => console.log("Text pressed")}>
//             <Text>
//                What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
//             </Text>
//          </Pressable>

//          <Image source={logoImg} style={{ width: 300, height: 300 }}></Image>
//       </ScrollView>
//    </View>
// }

// import { View, Text, Image, ImageBackground } from "react-native";
// const logoImg = require("./assets/adaptive-icon.png");
// export default function App() {
//   return <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
//     {/* <Image source={logoImg} style={{height: 300, width: 300}} />
//     <Image source={{uri: 'https://picsum.photos/200'}} style={{height: 300, width: 300}} /> */}
//     <ImageBackground source={logoImg} style={{flex: 1}}>
//       <Text>IMAGE TEXT</Text>
//     </ImageBackground>
//   </View>
//   // return <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
//   //   <Text>Hello <Text style={{color: 'white'}}>World</Text></Text>
//   // </View>
//   // return <View style={{ flex: 1, backgroundColor: 'plum' }}>
//   //   <View style={{ width: 200, height: 200, backgroundColor: 'lightblue' }}></View>
//   //   <View style={{ width: 200, height: 200, backgroundColor: 'lightgreen' }}></View>
//   // </View>;
// }