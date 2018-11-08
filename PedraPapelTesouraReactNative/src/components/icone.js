import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const pedra = require('./../../img/pedra.png');
const tesoura = require('./../../img/tesoura.png');
const papel = require('./../../img/papel.png');

class Icone extends Component {
  render() {
    if (this.props.escolha === 'pedra') {
      return ( 
        <View style={styles.txtIcone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={pedra} />      
        </View>     
      );
    } else if (this.props.escolha === 'tesoura') {
      return (
      <View style={styles.txtIcone}>      
        <Text style={styles.txtJogador}>{this.props.jogador}</Text>
        <Image source={tesoura} />      
      </View>
      );
    } else if (this.props.escolha === 'papel') {
      return (
      <View style={styles.txtIcone}>      
        <Text style={styles.txtJogador}>{this.props.jogador}</Text>
        <Image source={papel} />      
      </View>
      );
    }    
    return false;       
  }
}

const styles = StyleSheet.create({
  txtIcone: {
    alignItems: 'center',
    marginBottom: 20 
  },
  txtJogador: {
    fontSize: 20
  }   
});

export default Icone;
