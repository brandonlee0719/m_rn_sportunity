import {
  StyleSheet,
} from 'react-native';

import {
  colors,
  fonts,
  metrics,
} from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    flex: 1, 
    margin: 10, 
    backgroundColor: 'white',
    borderRadius:4,
    elevation: 2, // android shadow
    shadowColor: 'black', // iOS
    shadowOffset: { width: 1, height: 3}, // iOS
    shadowOpacity: 0.1, // iOS
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#BEE7C5',
    paddingLeft: metrics.baseMargin,
    paddingRight: metrics.doubleBaseMargin,
    paddingTop: metrics.baseMargin,
    paddingBottom: metrics.baseMargin,
    borderTopLeftRadius:4,
    borderTopRightRadius:4,
  },
  headerIcon: {
    
  },
  date: {
    flex: 1,
    textAlign: 'right',
    fontSize: 13,
    color: '#285b3c',
  },

  body: {
    flex: 1, 
    flexDirection: "row", 
    alignItems: "center",
    paddingHorizontal: metrics.baseMargin,
    paddingVertical: metrics.doubleBaseMargin,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: {
    width: 36, 
    height: 36,
    borderRadius:18,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#2A7267',
    marginLeft: metrics.smallMargin,
    marginRight: metrics.doubleBaseMargin + metrics.smallMargin,
  },
  sportImage: {
    width: 36, 
    height: 36,
    borderRadius:18,
    marginLeft: metrics.smallMargin,
    marginRight: metrics.doubleBaseMargin + metrics.smallMargin,
  },
  title: {
    flex: 1,
    fontSize: fonts.size.medium,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 10,
    flex: 1,
    fontSize: fonts.size.medium,
  },
});
