import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs() {
  const [activeTab, setActiveTab] = React.useState('Home');
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}>
      <Icon
        icon="home"
        text="Home"
        iconColor="black"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Icon
        icon="search"
        text="Browse"
        iconColor="grey"
        textColor="grey"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Icon
        icon="shopping-bag"
        text="Grocery"
        iconColor="grey"
        textColor="grey"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Icon
        icon="receipt"
        text="Orders"
        iconColor="grey"
        textColor="grey"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Icon
        icon="user"
        text="Account"
        iconColor="grey"
        textColor="grey"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const Icon = props => (
  <TouchableOpacity onPress={() => props.setActiveTab(props.text)}>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        color={props.activeTab === props.text ? 'black' : 'grey'}
        style={{
          marginBottom: 3,
          alignSelf: 'center',
        }}
      />
      <Text style={{color: props.activeTab === props.text ? 'black' : 'grey'}}>
        {props.text}
      </Text>
    </View>
  </TouchableOpacity>
);
