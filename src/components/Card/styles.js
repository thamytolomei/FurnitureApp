import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
container: {
    backgroundColor: 'white',
    flexDirection:'row',
    flexWrap:'wrap',
    paddingBottom: 25,
    width:'100%',
},
imagem: {
    height: 150,
    width:90,
    flex: 1,
    alignContent:'flex-start',
},
textcontainer: {
    width:180,
    display: 'flex',
    justifyContent:'center',
    flexDirection:'column',
    color:'black',
    marginLeft: 5,
},
textbg:{
    backgroundColor: 'rgba(171, 203, 235, 0.5)', 
    borderTopLeftRadius:13,
    borderBottomLeftRadius: 13,
    padding: 3,
},
textbg1:{
    backgroundColor: 'rgba(250, 202, 210, 0.5)', 
    borderTopLeftRadius:13,
    borderBottomLeftRadius: 13,
    padding: 3,
},
textbg2:{
    backgroundColor:'rgba(255, 232, 202, 0.5)',
    borderTopLeftRadius:13,
    borderBottomLeftRadius: 13,
    padding: 3,
},
text: {
    fontSize: 12,
    margin: 2,
    color:'#515151',
    borderRadius: 10,
    width:'100%',
    fontFamily: 'OpenSansSemibold',
},
text1: {
    fontSize: 14,
    margin: 4,
    color:'#1d1d1d',
    fontFamily: 'OpenSansBold',
},
text2: {
    fontSize: 12,
    margin: 4,
    color:'#8c8a87',
    fontFamily: 'OpenSansLight',
},
});
