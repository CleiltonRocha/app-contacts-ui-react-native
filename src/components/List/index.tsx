import React from 'react';
import { View, Text, Image } from 'react-native';
import Profile1 from '../../assets/profile-1.png';

export function List() {
  return(
    <View className="items-center gap-4 flex-row ml-8">
      <Image
        source={Profile1}
        className="h-12 w-12"
        />
        <View className="items-start">
          <Text className="font-bold text-base text-slate-50">
            Abraão Sena
          </Text>
          <Text className="font-regular text-xs text-slate-500">
            (11) 90876-1234
          </Text>

        </View>
    </View>
  )
}