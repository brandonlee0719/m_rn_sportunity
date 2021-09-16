import {
    StyleSheet,
  } from 'react-native';
  
  import {
    colors,
    metrics,
    fonts
  } from '../../../../theme';
  
  export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.whiteSmoke,
      marginTop: metrics.baseMargin,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingHorizontal: metrics.baseMargin
    },
    headerCol: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    headerText: {
      fontSize: fonts.size.medium,
      color: colors.darkBlue,
      fontWeight: '500',
    },
    checkboxImage: {
      tintColor: colors.lightGrey,
      height: 20,
      width: 20
  },
    
});
  