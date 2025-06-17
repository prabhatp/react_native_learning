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


// import { StyleSheet, StatusBar, SafeAreaView, TextInput, Text, View, Switch } from 'react-native';
// import { useState } from 'react';

// export default function App() {
//   const [name, setName] = useState("");
//   const [isDarkMode, setDarkMode] = useState(false);

//   return (
//     <SafeAreaView style={styles.container}>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChangeText={setName}
//         placeholder='email@example.com'
//         autoCorrect={false}
//         autoCapitalize='none'
//       // secureTextEntry // For password
//       // keyboardType='numeric'
//       />
//       <TextInput style={[styles.input, styles.multilineText]} placeholder='message' multiline />
//       <Text>My Name is {name}</Text>
//       <View style={styles.switchContainer}>
//         <Text style={styles.text}>Dark Mode</Text>
//         <Switch
//           value={isDarkMode}
//           onValueChange={() => setDarkMode((prevState) => !prevState)}
//           trackColor={{ false: "#767577", true: "lightblue"}}
//           thumbColor="#f4f3f4"
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: StatusBar.currentHeight
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     padding: 10,
//     borderWidth: 1
//   },
//   multilineText: {
//     minHeight: 100,
//     textAlignVertical: 'top'
//   },
//   switchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 10
//   }
// });
