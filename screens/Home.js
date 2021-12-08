import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';
import {localRestaurant} from '../assets/data/localRestaurant';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/BottomTabs';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={localRestaurant} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
