
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

// import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

// export default function App() {
//   const windowWidth = useWindowDimensions().width;
//   const windowHeight = useWindowDimensions().height;

//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, {
//         width: windowWidth > 500 ? "70%" : "90%",
//         height: windowHeight > 600 ? "60%" : "90%",
//       }]}>
//         <Text style={{fontSize: windowWidth > 500 ? 50 : 24}}>Welcome!</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'plum',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     // width: windowWidth > 500 ? "70%" : "90%",
//     // height: windowHeight > 600 ? "60%" : "90%",
//     backgroundColor: "lightblue",
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   // text: {
//   //   fontSize: windowWidth > 500 ? 50 : 24
//   // }
// });


// import {useState, useEffect} from 'react';

// import { StyleSheet, Text, View, Dimensions } from 'react-native';

// export default function App() {
//   const [dimensions, setDimensions] = useState({window: Dimensions.get('window')});

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener('change', (window) => {
//       setDimensions({window});
//     })
//     return () => subscription?.remove();
//   })
//   const {window} = dimensions;
//   const windowWidth = window.width;
//   const windowHeight = window.height;

//   return (
//     <View style={styles.container}>
//       <View style={[styles.box, {
//         width: windowWidth > 500 ? "70%" : "90%",
//         height: windowHeight > 600 ? "60%" : "90%",
//       }]}>
//         <Text style={{fontSize: windowWidth > 500 ? 50 : 24}}>Welcome!</Text>
//       </View>
//     </View>
//   );
// }

// // const windowWidth = Dimensions.get('window').width;
// // const windowHeight = Dimensions.get('window').height;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'plum',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     // width: windowWidth > 500 ? "70%" : "90%",
//     // height: windowHeight > 600 ? "60%" : "90%",
//     backgroundColor: "lightblue",
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   // text: {
//   //   fontSize: windowWidth > 500 ? 50 : 24
//   // }
// });
