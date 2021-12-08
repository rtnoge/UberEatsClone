import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = React.useState('Delivery');
  return (
    <View style={style.container}>
      <HeaderButton
        title="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Order"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = props => (
  <View>
    <TouchableOpacity
      style={style.button(props.activeTab === props.title ? 'black' : 'white')}
      onPress={() => props.setActiveTab(props.title)}>
      <Text
        style={style.text(props.activeTab === props.title ? 'white' : 'black')}>
        {props.title}
      </Text>
    </TouchableOpacity>
  </View>
);

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: color => ({
    backgroundColor: color,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  }),
  text: color => ({
    color: color,
    fontSize: 15,
    fontWeight: '900',
  }),
});
