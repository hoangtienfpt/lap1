import React from "react";
import { StyleSheet, Text, FlatList, View, Image } from "react-native";
const ProductItem = (props) => {
    const item = props.item
    //tên sp sẽ là item..name , giá item là
    return (
        <View style={styles.contener}>
            <View >
                <Text>Tên món:{item.name} </Text>
                <Text>mô tả:{item.description}</Text>
            </View>
            <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.text} />
        </View>
    );
}



const productName = (props) => {

    const list = props.data || []
    return (
        <FlatList
            data={list}
            renderItem={({ item }) => <ProductItem item={item} />}
            //renderitem thì sẽ trả về 1 giao diện

            keyExtractor={(item) => item.id} />
    );
    //keyextacter thì trả về 1 biến lưu trữ



}
export default productName

const styles = StyleSheet.create({
    contener: {
        flex: 1,
        alignItems:"center",
        flexDirection: 'row-reverse'
    },
    doc:{
        flex:1,
        flexDirection:'column'
    },
    text: {
        width: 20,
        height: 20
    }
})

