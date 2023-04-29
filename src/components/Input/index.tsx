import React from 'react';
import { View, TextInput } from 'react-native';
import { MagnifyingGlass } from 'phosphor-react-native';
import  colors  from 'tailwindcss/colors';

export function Input() {
  return(
    <View className="w-full bg-bg-dark-700 px-6 py-3 mt-6 flex-row items-center rounded-md">
      <View className="w-full flex-row items-center gap-2.5">
        <MagnifyingGlass 
          color={colors.slate[50]}
          size={16}
        />
        <TextInput
          placeholderTextColor={colors.slate[500]}
          className="text-slate-50 font-regular"
          placeholder="Busque por nome ou por dados de contato"
          selectionColor={colors.white}
        />
      </View>
    </View>
  )
}