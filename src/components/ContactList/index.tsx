import React from 'react';
import { View, Text, Image } from 'react-native';
import { List } from '../List';
import Profile1 from '../../assets/profile-1.png';
import Profile2 from '../../assets/profile-2.png';
import Profile3 from '../../assets/profile-3.png';
import Profile4 from '../../assets/profile-4.png';
import Profile5 from '../../assets/profile-5.png';
import Profile6 from '../../assets/profile-6.png';
import Profile7 from '../../assets/profile-7.png';

export function ContactList() {
  return(
    <View className="items-start gap-14">
      <View className="flex-row items-start">
        <View className="w-10 h-10 items-center justify-center rounded-lg bg-purple-600">
          <Text className="font-bold text-base text-slate-50">
            A
          </Text>
        </View>
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
      </View>

      <View className="flex-row items-start">
        <View className="w-10 h-10 items-center justify-center rounded-lg bg-emerald-600">
          <Text className="font-bold text-base text-slate-50">
            B
          </Text>
        </View>
        <View className="flex-col">
          <View className="items-center gap-4 flex-row ml-8">
            <Image
              source={Profile2}
              className="h-12 w-12"
            />
            <View className="items-start">
              <Text className="font-bold text-base text-slate-50">
                Beatriz Clasen
              </Text>
              <Text className="font-regular text-xs text-slate-500">
                (48) 90876-1123
              </Text>
            </View>
          </View>
          <View className="items-center gap-4 flex-row ml-8 mt-8">
            <Image
              source={Profile3}
              className="h-12 w-12"
            />
            <View className="items-start">
              <Text className="font-bold text-base text-slate-50">
                Brenda Mendes
              </Text>
              <Text className="font-regular text-xs text-slate-500">
                (21) 90876-8765
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row items-start">
        <View className="w-10 h-10 items-center justify-center rounded-lg bg-fuchsia-700">
          <Text className="font-bold text-base text-slate-50">
            C
          </Text>
        </View>
        <View className="flex-col">
          <View className="items-center gap-4 flex-row ml-8">
            <Image
              source={Profile4}
              className="h-12 w-12"
            />
            <View className="items-start">
              <Text className="font-bold text-base text-slate-50">
                Caio Vinícius
              </Text>
              <Text className="font-regular text-xs text-slate-500">
                (71) 90876-2435
              </Text>
            </View>
          </View>
          <View className="items-center gap-4 flex-row ml-8 mt-8">
            <Image
              source={Profile5}
              className="h-12 w-12"
            />
            <View className="items-start">
              <Text className="font-bold text-base text-slate-50">
                Cleiton Souza
              </Text>
              <Text className="font-regular text-xs text-slate-500">
                (11) 90876-1209
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row items-start">
        <View className="w-10 h-10 items-center justify-center rounded-lg bg-sky-500">
          <Text className="font-bold text-base text-slate-50">
            D
          </Text>
        </View>
        <View className="items-center gap-4 flex-row ml-8">
          <Image
            source={Profile6}
            className="h-12 w-12"
          />
          <View className="items-start">
            <Text className="font-bold text-base text-slate-50">
              Daniel Duarte
            </Text>
            <Text className="font-regular text-xs text-slate-500">
              (82) 90876-6534
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row items-start">
        <View className="w-10 h-10 items-center justify-center rounded-lg bg-yellow-600">
          <Text className="font-bold text-base text-slate-50">
            E
          </Text>
        </View>
        <View className="items-center gap-4 flex-row ml-8">
          <Image
            source={Profile7}
            className="h-12 w-12"
          />
          <View className="items-start">
            <Text className="font-bold text-base text-slate-50">
              Elias Gabriel
            </Text>
            <Text className="font-regular text-xs text-slate-500">
              (11) 90876-1234
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}