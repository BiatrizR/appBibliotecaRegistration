import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Image,  KeyboardAvoidingView } from "react-native";

import styles from "./styles";
import database from '../../config/firebase';
import { ScrollView } from "react-native-gesture-handler";




export default function Details({ navigation, route}){
   
    const[tituloEdit, setTituloEdit] = useState(route.params.titulo);
    const[autorEdit, setAutorEdit] = useState(route.params.autor);
    const[edicaoEdit, setEdicaoEdit] = useState(route.params.edicao);
    const [imageEdit, setEdicaoImage] = useState(route.params.image);
    const idBook = route.params.id;

    function editBooks(titulo, autor, edicao, image, id){
        database.collection("InfantoJuvenil").doc(id).update({
            titulo: tituloEdit,
            autor: autorEdit,
            edicao: edicaoEdit,
            image: imageEdit,

        });

        navigation.navigate("Livros Cadastrados");

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
          setImage(result.uri);
        }
      };

    return(
        
        <View style={styles.container}>
         <ScrollView style={{width:'90%', height:'100%' }}
          showsVerticalScrollIndicator={false}
         >  
            <View style={{ top:10, alignItems: 'center', justifyContent: 'center' }}>
            {imageEdit && <Image source={{ uri: imageEdit }} style={styles.imagemDesign}
             onChangeText={setEdicaoImage}
             value={imageEdit}
            />}
                <TouchableOpacity style={styles.buttonGaleria} onPress={pickImage}>
                    <Text style={styles.textoBotaoPicker}> Galeria </Text>
                </TouchableOpacity>
           </View>

            <Text style={styles.label}>Título</Text>
            <TextInput 
                style={styles.inputText}
                placeholder="titulo ex: A Ilha"
                onChangeText={setTituloEdit}
                value={tituloEdit}
            />

            <Text style={styles.label}>Autor</Text>
            <TextInput 
                style={styles.inputText}
                placeholder="Autor ex: Mariana Davis"
                onChangeText={setAutorEdit}
                value={autorEdit}
            />

            <Text style={styles.label}>Edição</Text>
            <TextInput 
                style={styles.inputText}
                placeholder="Ano ex: 2000"
                onChangeText={setEdicaoEdit}
                value={edicaoEdit}
            />
            </ScrollView>
            <TouchableOpacity
                style={styles.buttonNewBook}
                onPress={()=>{editBooks(tituloEdit, autorEdit, edicaoEdit,imageEdit, idBook)
                }}
            >
                <Text style={styles.iconButton}> Salvar </Text>
            </TouchableOpacity>
           
        </View>
       
    )

}