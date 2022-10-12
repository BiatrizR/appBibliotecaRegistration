import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';




export default function HomeScreen({navigation}){
//   goToScreen = (screen) => {
//     this.props.navigation.navigate('{screen}');
//   };

//imagem de fundo
const image = require('../../../assets/book-in-library.jpg');

    return (

 
      <View style={styles.view}>
        <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{top:'30%', height:'90%', width:'20%'}}
        >
          
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#00b3b3' }]}
          onPress={() => this.goToScreen()}>
          <Text style={styles.ButtonText}>Biográfias</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#52e0d9' }]}
          onPress={() => this.goToScreen()}>
          <Text style={styles.ButtonText}>Clássicos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#00b3b3' }]}
          onPress={() => navigation.navigate('Livros Cadastrados')}>
          <Text style={styles.ButtonText}>Infanto Juvenil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#52e0d9' }]}
          onPress={() => this.goToScreen()}>
          <Text style={styles.ButtonText}>Romance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#00b3b3' }]}
          onPress={() => this.goToScreen()}>
          <Text style={styles.ButtonText}>Gibis e Revistas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#52e0d9' }]}
          onPress={() => this.goToScreen()}>
          <Text style={styles.ButtonText}>Concurso Público</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#00b3b3' }]}
          onPress={() => this.goToScreen()}>
          <Text style={styles.ButtonText}>Outros</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  
}
const styles=StyleSheet.create({
    view:{
        flex:1,
        alignItems:'center',
        backgroundColor:"#A8A8A8",
        flexDirection:'row',
        justifyContent:'center',
        
    },

       
    button:{
    width:200,
    alignItems:'center',
    height:'20%',
    borderRadius:15,
    backgroundColor:'purple',
    justifyContent: 'center',
    margin:10,
    
    },

    ButtonText:{
    fontSize: 20,
    fontWeight:'bold',
    color:'black',
    alignSelf:'center'
    },
   
})