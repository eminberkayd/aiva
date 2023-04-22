import React, { useState, useEffect } from 'react'
import { View, Text, Button } from "react-native"
import { Surface } from 'react-native-paper'
import { IconButton } from '@react-native-material/core'

function WeeklyCallender() {
  const [activeDay, setActiveDay] = useState(null);
  const [dateData, setDateData] = useState(null)
  const [today, setToday] = useState(null)
  const updateDays = () => {
    const today = new Date(); // Get the current date
    const dayOfWeek = today.getDay(); // Get the day of the week (0 = Sunday, 1 = Monday, etc.)
    setToday(dayOfWeek);
    setActiveDay(dayOfWeek);
    const sundayDate = new Date(today); // Create a new Date object with the same date as today
    sundayDate.setDate(today.getDate() - dayOfWeek); // Set the date to the Monday of the current week

    const weekdays = []; // Initialize an empty array to store the dates of the weekdays
    for (let i = 0; i < 7; i++) { // Loop through the next five days (Monday to Sunday)
      const date = new Date(sundayDate); // Create a new Date object with the same date as Monday
      date.setDate(sundayDate.getDate() + i); // Set the date to the next day (Sunday + i)
      weekdays.push(date); // Add the date to the weekdays array
    }
    console.log("week:", weekdays)
    setDateData(weekdays)
  }

  useEffect(() => {
    //updateDays()
    console.log("oldu")
  }, [])

  const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
  
  return (<></>)

  return (
    <View>
      <Surface elevation={3} style={{ borderRadius: "3%" }}>
        <Text
          style={{ alignSelf: "center" }}
        >
          {monthNames[dateData[activeDay].getMonth()]} {dateData[activeDay].getFullYear()}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

          <View style={{ alignItems: "center" }}>
            <Text>Pzt</Text>
            <IconButton
              style={{ backgroundColor: activeDay == 1 ? "#C2CBCD" : null }}
              icon={<Text style={{ color: today == 1 ? "red" : "black" }}>{dateData[1].getDate()}</Text>}
              onPress={() => { setActiveDay(1) }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>Sl</Text>
            <IconButton
              style={{ backgroundColor: activeDay == 2 ? "#C2CBCD" : null }}
              icon={<Text style={{ color: today == 2 ? "red" : "black" }}>{dateData[2].getDate()}</Text>}
              onPress={() => { setActiveDay(2) }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>Çrş</Text>
            <IconButton
              style={{ backgroundColor: activeDay == 3 ? "#C2CBCD" : null }}
              icon={<Text style={{ color: today == 3 ? "red" : "black" }}>{dateData[3].getDate()}</Text>}
              onPress={() => { setActiveDay(3) }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>Prş</Text>
            <IconButton
              style={{ backgroundColor: activeDay == 4 ? "#C2CBCD" : null }}
              icon={<Text style={{ color: today == 4 ? "red" : "black" }}>{dateData[4].getDate()}</Text>}
              onPress={() => { setActiveDay(4) }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>C</Text>
            <IconButton
              style={{ backgroundColor: activeDay == 5 ? "#C2CBCD" : null }}
              icon={<Text style={{ color: today == 5 ? "red" : "black" }}>{dateData[5].getDate()}</Text>}
              onPress={() => { setActiveDay(5) }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>Ct</Text>
            <IconButton
              icon={<Text style={{ color: today == 6 ? "red" : "black" }}>{dateData[6].getDate()}</Text>}
              onPress={() => { setActiveDay(6) }}
              style={{ backgroundColor: activeDay == 6 ? "#C2CBCD" : null }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>Pz</Text>
            <IconButton
              style={{ backgroundColor: activeDay == 0 ? "#C2CBCD" : null }}
              icon={<Text style={{ color: today == 0 ? "red" : "black" }}>{dateData[0].getDate()}</Text>}
              onPress={() => { setActiveDay(0) }}
            />
          </View>
        </View>
      </Surface>
    </View>
  )

}

export default WeeklyCallender