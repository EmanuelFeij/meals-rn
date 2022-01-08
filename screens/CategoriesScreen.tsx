import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type CategoriesScreenProps = {

}

const CategoriesScreen = (props: CategoriesScreenProps) => {
    return (
        <View style={styles.screen}>
            <Text>CategoriesScreen</Text>
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
})
