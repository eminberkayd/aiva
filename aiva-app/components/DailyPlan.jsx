import React from 'react'
import { View, Text, Button, ScrollView } from "react-native"
import { Card } from 'react-native-paper'

function DailyPlan() {
    return (
        <ScrollView>
            <Card>
                <Card.Title title='Breakfast' titleStyle={{alignSelf:"center"}} />
                <Card.Content>
                    <Text>
                        elma
                    </Text>
                </Card.Content>
            </Card>
            <Card>
                <Card.Title title='Lunch' titleStyle={{alignSelf:"center"}}/>
                <Card.Content>
                    <Text>
                        armut
                    </Text>
                </Card.Content>
            </Card>
            <Card>
                <Card.Title title='Dinner' titleStyle={{alignSelf:"center"}}/>
                <Card.Content>
                    <Text>
                        elma
                    </Text>
                </Card.Content>
            </Card>
        </ScrollView>
    )
}

export default DailyPlan