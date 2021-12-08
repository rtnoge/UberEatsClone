import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={styles.input}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <AntDesign
              name="clockcircle"
              size={11}
              color="black"
              style={{marginRight: 6}}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
  },
  input: {
    textInput: {
      backgroundColor: '#eee',
      fontWeight: '700',
      borderRadius: 20,
      marginTop: 7,
    },
    textInputContainer: {
      backgroundColor: '#eee',
      borderRadius: 50,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
  },
});
