import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
container: {
    width: '100%',
    height: '15%',
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
    position:'relative',
    zIndex: 2,
    top: -45,
    borderRadius: 20,
},
total: {
    fontFamily: 'OpenSansSemibold',
    color:'#bfbfbf',
    flex: 1,
    alignContent:'flex-start',
    marginLeft: 20,
    fontSize: 12,
},
total1: {
    fontFamily: 'OpenSansBold',
    color:'#1d1d1d',
    flex: 1,
    alignContent:'flex-end',
    marginRight: 20,
    fontSize: 20,
},
});