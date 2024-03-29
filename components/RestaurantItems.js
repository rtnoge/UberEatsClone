import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
      {props.restaurantData.map((item, index) => (
        <View
          key={index}
          style={{backgroundColor: 'white', marginTop: 10, padding: 15}}>
          <RestaurantImg img_url={item.img_url} />
          <RestaurantInfo name={item.name} rating={item.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImg = props => (
  <>
    <Image
      source={{
        uri: props.img_url,
      }}
      style={{width: '100%', height: 180}}></Image>
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
        {props.name}
      </Text>
      <Text style={{fontSize: 13, color: 'grey'}}>30-45 ∙ min</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      }}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);
