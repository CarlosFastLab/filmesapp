import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator
} from 'react-native'
import api from './src/services/api'
import Filmes from './src/components/Filmes'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
      loading: true
    }
  }

  async componentDidMount() {
    const response = await api.get('r-api/?api=filmes')
    this.setState({
      filmes: response.data,
      loading: false
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator color='#09A6FF' size={40}/>
        </SafeAreaView>
      )
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <FlatList data={this.state.filmes}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Filmes data={item} />}
          />
        </SafeAreaView>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
  },
})

export default App

// https://sujeitoprogramador.com/r-api/?api=filmes