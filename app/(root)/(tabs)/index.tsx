import {Image, Text,View} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";


export default function Index(){
  return (
    <SafeAreaView className="h-full bg-white">

      <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center ">
                 <Image source={images.avatar}  className="size-12 rounded-full"/>
                 <view className="flex flex-col items-start ml-2 justify-center">
                  <Text className=" text-xs font-rubik text-black-100">Good Morning</Text>
                  <Text className="text-base font-rubik-medium text-black-300">Istiak</Text>
                 </view>
              </View>
               <Image source={icons.bell} className="size-6" />
               <Search/>
               
             </View> 
            </View>
      
    </SafeAreaView>
  );
}