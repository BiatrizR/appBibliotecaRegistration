import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:"center",

    },

    label:{
        width:"90%",
        marginTop: 20,
        marginLeft: 'auto',
        marginRight:'auto',
        fontSize:18,
        color:'#008082',

    },
    
    inputText:{
        width:"90%",
        marginTop:10,
        padding:10,
        height:50,
        borderBottomWidth:2,
        borderBottomColor:"#F9C202",
        fontSize:18.5,
        
    },

    buttonNewBook:{
        width:60,
        height: 60,
        bottom:30,
        position: "absolute",
        backgroundColor:"#008082",
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        
    },

    iconButton:{
        color: "#fff",
        fontWeight:"bold",
        fontSize: 16,
       
        
     },
     buttonGaleria: {
        backgroundColor:'#A48702',
        width: "40%",
        height: 40,
       
        padding:8,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
     },
     textoBotaoPicker:{
        alignSelf:'center',
        fontSize:15,
        fontWeight: 'bold',
             
        color:'#fff', 
        
     },
     imagemDesign:{
        width: 200,
        height:200,
        borderWidth:2,
        borderRadius:15,
        backgroundColor:'#D3D1CB',
     }

});

export default styles;