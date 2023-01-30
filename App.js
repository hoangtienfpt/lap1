import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import ProductName1 from './src/sceen/product';

export default function App() {
  const [status, setstatus] = useState(false);

  const Classname = "Quán Hoàng Tiến"
  const Class = "PH27776"
  const listdata = [
    {
      id: 1,
      name: 'bún bò huế',
      description: 'ngon'
    },
    {
      id: 2,
      name: 'búnn',
      description: 'ngọt'
    },
    {
      id: 3,
      name: 'phỏ',
      description: 'thơm'
    },
    {
      id: 4,
      name: 'cháo',
      description: 'rẻ'
    },

  ]
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Họ Tên:{Classname}</Text>
      <Text style={styles.text}>MSV:{Class}</Text>
      <Button title='Thêm Mới' onPress={() => setstatus(true)} />
      {
        status ?
          <>
            <TextInput placeholder='Tên:'  style={styles.input} />
            <TextInput placeholder='Mô tả:' style={styles.input} />
            <TextInput placeholder='Link:' style={styles.input} />

            <View style={styles.buttonn}>
              <Button title='hủy' onPress={() => setstatus(false)}  />
              <Button title='lưu' />
            </View>


          </>
          : null
      }
      <ProductName1 data={listdata} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red',

    marginTop: 20,
  },
  input: {
    height: 40,
    width: 200,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },

  buttonn: {
    flex: 1,
    flexDirection: 'row'
  }
});
