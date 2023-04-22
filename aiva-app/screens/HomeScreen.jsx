import React from 'react'
import { Text, View } from 'react-native'
import WeeklyCallender from '../components/WeeklyCallender'
import DailyPlan from '../components/DailyPlan'

function HomeScreen() {
  return (
    <View style={{ backgroundColor: "pink"}}>
        <WeeklyCallender />
        <DailyPlan/>
    </View>
  )
}

export default HomeScreen