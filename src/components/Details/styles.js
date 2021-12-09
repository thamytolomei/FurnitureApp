import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
container: {
    height: '17%',
    width:'100%',
    backgroundColor:'#1d1d1d',
    paddingBottom: 20,
    borderRadius: 20,
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    position:'relative',
    top: -75,
},
text: {
    fontFamily:'OpenSansBold',
    color:'#bfbfbf',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 32,
},
text1: {
    fontFamily:'OpenSansBold',
    color:'white',
    fontSize: 16,
    marginTop: 32,
    marginLeft: 5,
},
icon: {
    borderRadius:25,
    cursor:'pointer',
    marginRight: 20,
    marginTop: 35,
    color: 'white',
    backgroundColor: '#ff8533',
    padding: 10,
},
});