import React, { useState } from 'react'
import { View, Text, Button, ScrollView } from "react-native"
import { Card } from 'react-native-paper'

function DailyPlan() {
    const [meals, setMeals] = useState([
        { "title": "Breakfast", "meals": ["elma", "armut", "ceviz"], "calories": [300, 400, 780] },
        { "title": "Lunch", "meals": ["hatay usulü", "iskender", "kola"], "calories": [400, 70, 1500] },
        { "title": "Dinner", "meals": ["tavuk sote", "ayran"], "calories": [500, 40] }])
    return (
        <ScrollView >
            {meals.map((item, key) => <Meal key={key} title={item.title} meals={item.meals} calories={item.calories} />)}

        </ScrollView>
    )
}

const Meal = ({ title, meals, calories }) => {
    return (
        <Card style= {{margin: "2%", borderRadius: "10%", backgroundColor:"#f7fafa"}}>
            <Card.Title title={title} titleStyle={{ alignSelf: "center" }} />
            <Card.Content>
                {meals.map((item, idx) => <Text key={idx}>{item} - {calories[idx]}</Text>) }
             
            </Card.Content>
        </Card>
    )
}

export default DailyPlan