import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Button,
} from 'react-native'

class Entrar extends Component {
    render() {
        return (
            <SafeAreaView style={{
                backgroundColor: '#292929',
                width: '100%',
                height: 350,
                borderRadius: 15
            }}>
                <Text style={{
                    color: '#FFF',
                    fontSize: 28,
                    paddingTop: 15,
                    textAlign: 'center'
                }}>Seja bem vindo</Text>
                <Button title='Sair' onPress={this.props.fechar} />
            </SafeAreaView>
        )
    }
}
export default Entrar