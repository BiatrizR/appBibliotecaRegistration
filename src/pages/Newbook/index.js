import React, { useState, useEffect } from "react";
import {View, Text, TextInput, TouchableOpacity, TouchableHighlight, Button, Image, Alert, Platform } from "react-native";

import * as ImagePicker from 'expo-image-picker';
import firebaseConfig from '../../config/firebase.js';

import {initializeApp} from 'firebase/app';

import database from '../../config/firebase';
import styles from './styles';

import { ScrollView } from "react-native-gesture-handler";

//import storage from "@react-native-firebase/storage";
import { getStorage, ref, uploadBytes } from "firebase/storage";


//initializeApp(firebaseConfig);


export default function Newbook({ navigation }){

    const [titulo, setTitulo] = useState(null);
    const [autor, setAutor] = useState(null);
    const [edicao, setEdicao] = useState(null);
    const [image, setImage] = useState(null);


    //solicita permissão para acesso a mídia do dispositivo
    // useEffect(() => {
    //     (async () => {
    //         if (Platform.OS !== 'web') {
    //             const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //             if (status !== 'granted') {
    //                 alert ('Desculpe, é necessário permitir o uso da câmera para isso!')
    //             }
    //         }
    //     })();
    // }, []);


    
    //adicionar a colection que receberá os campos de input
    function addBook(){
        database.collection("InfantoJuvenil").add({
            titulo: titulo, 
            autor: autor,
            edicao: edicao,
            image: image


        })
        navigation.navigate("Livros Cadastrados")
    }

     //função para capturar imagem
     const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
            console.log(result);
    
        if (!result.cancelled) {
          const storage = getStorage();
          const storageRef = ref(storage);

          setImage(result.uri);
        
        
          
          
          
          
          const bytes = await img.blob();
        
          await uploadBytes(ref, bytes);
        }
      };
     
      //adicionaod as imagens ao cloud storage
    //   const uploadImage = async() => {
    //     const uploadUri = image;
    //     let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    //     setUploading(true);
    //     try{
    //         await storage().ref(filename).putFile(uploadUri);
    //         setUploading(false);
    //         Alert.alert(
    //             'Image uploaded!',
    //             'Imagem carregada com sucesso para Firebase Cloud Storage!'
    //         );
    //     } catch(e){
    //         console.log(e);
    //     }
    //     setImage(null);
    //   }


    return(

        
        <View style={styles.container}>
            <ScrollView style={{width:'90%', height:'100%' }}
            showsVerticalScrollIndicator={false}
            >  
            <View style={{ top:10, alignItems: 'center', justifyContent: 'center'}}>
            {image && <Image source={{ uri: image }} style={styles.imagemDesign} />}
                <TouchableHighlight>
                <TouchableOpacity style={styles.buttonGaleria} onPress={pickImage}>
                   
                    <Text style={styles.textoBotaoPicker}> Add Imagem </Text>
                </TouchableOpacity>
                </TouchableHighlight>
                
                </View>
                 
            
            <Text style={styles.label}>Título</Text>
            <TextInput 
                style={styles.inputText}
                placeholder="titulo ex: A Ilha"
                onChangeText={setTitulo}
                value={titulo}
            />

            <Text style={styles.label}>Autor</Text>
            <TextInput 
                style={styles.inputText}
                placeholder="Autor ex: Mariana Davis"
                onChangeText={setAutor}
                value={autor}
            />

            <Text style={styles.label}>Edição</Text>
            <TextInput 
                style={styles.inputText}
                placeholder="Ano ex: 2000"
                onChangeText={setEdicao}
                value={edicao}
            />
             </ScrollView> 
           
            <TouchableOpacity
                style={styles.buttonNewBook}
                onPress={()=>{addBook()
                }}
            >
                <Text style={styles.iconButton}> Salvar </Text>
            </TouchableOpacity>
        </View>
        
       
    )

}