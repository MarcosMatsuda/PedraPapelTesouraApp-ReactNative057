 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokempo(acao) {
    //gera numero aleatorio
    const numeroAleatorio = Math.floor(Math.random() * 3);

    let acaoComputador = '';

    switch (numeroAleatorio) {
      case 0: acaoComputador = 'pedra'; break;
      case 1: acaoComputador = 'papel'; break;
      case 2: acaoComputador = 'tesoura'; break;
      default: break;
    }

    let resultado = '';

    if (acao === acaoComputador) {
      resultado = 'Empatou !';
    } else {
      if (acaoComputador === 'pedra') {      
        if (acao === 'papel') {
          resultado = 'Você ganhou';
        } else {
          resultado = 'Você perdeu';
        }
      }

      if (acaoComputador === 'papel') {      
        if (acao === 'tesoura') {
          resultado = 'Você ganhou';
        } else {
          resultado = 'Você perdeu';
        }
      }

      if (acaoComputador === 'tesoura') {      
        if (acao === 'pedra') {
          resultado = 'Você ganhou';
        } else {
          resultado = 'Você perdeu';
        }
      } 
    } 

    this.setState({ escolhaUsuario: acao, escolhaComputador: acaoComputador, mostraResultado: resultado });
  }

  render() {
    return (
      <View style={styles.container}>        
        <Topo />
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={() => { this.jokempo('pedra'); }} />
          </View>  
          <View style={styles.btnEscolha}>
            <Button title="papel" onPress={() => { this.jokempo('papel'); }} />
          </View>  
          <View style={styles.btnEscolha}>
            <Button title="tesoura" onPress={() => { this.jokempo('tesoura'); }} />
          </View>  
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultados}>{this.state.mostraResultado}</Text>          
          <Icone escolha={this.state.escolhaComputador} jogador='computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='usuario' />          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultados: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});
