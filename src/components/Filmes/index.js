import React, { Component } from 'react'
import { View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

class Filmes extends Component {  

    render() {
        const {nome, foto} = this.props.data;
        return (
            <SafeAreaView>
                <SafeAreaView style={styles.card}>
                    <Text style={styles.titulo}>{nome}</Text>
                    <Image style={styles.capa} source={{uri: foto}}/>

                    <SafeAreaView style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn}
                        onPress={() => alert(nome)}
                        >
                            <Text style={styles.btnText}>LEIA MAIS</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        backgroundColor: '#FFF',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3
    },
    titulo: {
        fontSize: 18,
        padding: 15
    },
    capa: {
        height: 250,
        width: 384,
        zIndex: 2
    },
    btnContainer: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9
    },
    btn: {
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    btnText: {
        textAlign: 'center',
        color: '#FFF'
    }
})

export default Filmes