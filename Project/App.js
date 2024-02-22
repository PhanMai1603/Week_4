import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('C:/Users/admin/Downloads/Project/assets/logo.png')} // Adjust the path accordingly
        style={styles.logo}
      />
      <Text style={styles.title}>Share more,
      waste less</Text>
       <Text style={styles.description}>
            Beat waste with Olio: the app for finding what you need and sharing what you don’t with local people.
       </Text>

        {/* Additional Images */}

             <Image
               source={require('C:/Users/admin/Downloads/Project/assets/logo1.png')}
               style={styles.additionalImage}
             />

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Button pressed!')}
      >
        <Text style={styles.buttonText}>Get the app</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start', // Đặt alignItems thành 'flex-start' để đẩy mọi thứ về góc trái
      justifyContent: 'center',
      paddingLeft: 20, // Thêm paddingLeft để có thêm khoảng cách từ lề trái
    },
  logo: {
    width: 200,
    height: 50,
    marginBottom: 20,
    position: 'absolute', // Đặt vị trí tuyệt đối
    top: 40, // Đặt top thành 0 để đặt ở phía trên cùng
    left: 10, // Đặt left để tạo khoảng cách từ lề trái
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#191970',
    top: 10,
  },
  button: {
    backgroundColor: '#20b2aa',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

   additionalImage: {
      width: 350,
      height: 150,
      marginBottom: 20,
    },

});

