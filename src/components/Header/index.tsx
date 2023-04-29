import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native';
import  colors  from 'tailwindcss/colors';
import { Input } from '../Input';

export function Header() {
  return(
    <View className="w-full flex-col items-center mt-8 px-6 py-10 bg-bg-dark-800">
      <View className="w-full flex-row items-center justify-between">
        <Text className="text-slate-50 font-bold text-xl ">
          Meus Contatos
        </Text>
        <View className="flex-row items-center gap-2 text-slate-50">
          <TouchableOpacity
            activeOpacity={0.3}
            className="h-14 w-14 bg-bg-dark-700 items-center justify-center rounded-full"
          >
            <Plus 
              color={colors.slate[50]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.3}
            className="h-14 w-14 bg-bg-dark-700 items-center justify-center rounded-full"
          >
            <PencilSimpleLine
              color={colors.slate[50]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.3}
            className="h-14 w-14 bg-bg-dark-700 items-center justify-center rounded-full"
          >
            <Trash
              color={colors.slate[50]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Input />
    </View>
  )
}