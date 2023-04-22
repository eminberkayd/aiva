import React, { useState } from 'react'
import { Text, View, ScrollView, TextInput, StyleSheet, Modal } from 'react-native'

function ProfileScreen() {
  const [age, setAge] = useState(12)
  const [weight, setWeight] = useState(54.4);
  const [height, setHeight] = useState(178);
  const [usualEatingPattern, setUsualEatingPattern] = useState("");
  const [healthGoal, setHealthGoal] = useState("");
  const [allergy, setAllergy] = useState([]);
  const [restriction, setRestriction] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [favFoods, setFavFoods] = useState("");
  const [hateFoods, setHateFoods] = useState("");
  const [levelOfStress, setLevelOfStress] = useState("");
  const [waterDaily, setWaterDaily] = useState("");


  return (
    <View style={styles.container}>
      <Text>Profile Informations</Text>
      <ScrollView>
        <View style={styles.questionView}>
          <Text style={styles.questionText}>
            Age:
          </Text>
          <TextInput
            keyboardType='numeric'
            value={age.toString()}
            style={styles.textInput}
            onChangeText={(s) => setAge(s)}
            maxLength={2}
          />

        </View>
        <View style={styles.questionView}>
          <Text style={styles.questionText}>
            Gender:
          </Text>
          <TextInput keyboardType='numeric'
            value={age.toString()}
            style={styles.textInput}
            onChangeText={(s) => setAge(s)}
            maxLength={2} />
        </View>
        <View style={styles.questionView}>
          <Text style={styles.questionText}>
            Height (in cm):
          </Text>
          <TextInput keyboardType='numeric'
            value={age.toString()}
            style={styles.textInput}
            onChangeText={(s) => setAge(s)}
            maxLength={2} />
        </View>
        <View style={styles.questionView}>
          <Text style={styles.questionText}>
            Weight (in kg):
          </Text>
          <TextInput keyboardType='numeric'
            value={age.toString()}
            style={styles.textInput}
            onChangeText={(s) => setAge(s)}
            maxLength={2} />
        </View>
       
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  questionView: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#ebebf2",
    margin: "3%"
  },
  questionText: {
    fontSize: 23,
    marginRight: "5%"
  },
  textInput: {
    flex: 1,
    backgroundColor: "#edf0fc",
    fontSize: 23
  }
})

export default ProfileScreen