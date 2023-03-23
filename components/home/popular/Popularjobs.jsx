import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const error = false
  const data = ["1", "2","3","4","5","6","7","8"]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity >
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
          {loading?
          <ActivityIndicator size="large" colors={COLORS.primary} />  
          : error ? 
          <Text>Unable to proceed further at the moment</Text>
          :
          <FlatList 
            data={data}
            renderItem={({item}) => (
              <PopularJobCard
                item={item}
              >
              </PopularJobCard>
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        }
      </View>
    </View> 
  )
}

export default Popularjobs