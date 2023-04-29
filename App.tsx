import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import {useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Header } from './src/components/Header';
import { ContactList } from './src/components/ContactList';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  
  if(!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <ScrollView 
      className="bg-bg-dark-900"
    >
      <View className="flex-1 items-center">
        <StatusBar style="auto" backgroundColor="#1A1924"/>
        <Header/>
      </View>
      <View className="px-6 py-12">
        <ContactList />
        
      </View>
    </ScrollView>
  );
}