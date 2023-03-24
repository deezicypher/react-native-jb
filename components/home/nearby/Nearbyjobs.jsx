import {useState} from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import { COLORS, SIZES } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hooks/useFetch'

const Nearbyjobs = ({data,error,loading}) => {
  const router = useRouter();

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Jobs Nearby</Text>
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
          data?.map((job) => (
            <NearbyJobCard 
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        }
      </View>
    </View> 
  )
}

export default Nearbyjobs