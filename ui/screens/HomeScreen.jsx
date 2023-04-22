import React from 'react'
import { Text, View } from 'react-native'
import WeeklyCalendar from '../components/WeeklyCalendar'
import DailyPlan from '../components/DailyPlan'

function HomeScreen() {
  return (
    <View style={{ backgroundColor: "#f7edf2", flex: 1 }}>
      <View style={{flex:1}}>
        <WeeklyCalendar />
      </View>
      <View style={{flex:6, padding: "3%"}}>
        <DailyPlan />
      </View>
    </View>
  )
}

export default HomeScreen