import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler'

export default function HomeScreen() {

    useEffect(() => {

        alert('Componente Montado')

        axios.get('https://dummyjson.com/users')
        .then(resposta => {
            console.log(resposta.data.users)
            setUsuarios(resposta.data.users)
        })
        .catch(erro => {
            console.log(erro)
        })

    }, [])

  return (
    <View style={styles.container}>

        <FlatList
        data={usuarios}
        renderItem={({ item }) => (
            <Card>
                <Card.Title
                Title={item.firstName + " " + item.lastName}
                subtitle={item.email}
                left={(props) => <Avatar.Image {...props} source={{ uri: item.image}}/>}
                />
            </Card>
        )}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})