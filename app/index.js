import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS,icons, images, SIZES } from "../constants";
import { Nearbyjobs,Popularjobs, ScreenHeaderBtn, Welcome  } from "../components";
import useFetch from "../hooks/useFetch";


const Home = () => {
    
    const router = useRouter(); 
    const [search, setSearch] = useState("");
    const {data, loading, error, refetch } = useFetch('search', {query: 'Python Developer', num_pages: 1});

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen
            options={{
                headerStyle:{backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                        <ScreenHeaderBtn  iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                        <ScreenHeaderBtn  iconUrl={images.profile} dimension="60%"  />
                ),
                headerTitle:""
            }}
        />
        <ScrollView  showsVerticalScrollIndicator={false}>
            <View style={{flex:1, padding: SIZES.medium}} >
                <Welcome  searchTerm={search} setSearchTerm={setSearch} 
                 handleClick={
                    () => {if(search){
                            router.push(`/search/${search}`)
                    }
                }
                    } />
                <Popularjobs data={data} error={error} loading={loading} />
                <Nearbyjobs data={data} error={error} loading={loading} />
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

export default Home;