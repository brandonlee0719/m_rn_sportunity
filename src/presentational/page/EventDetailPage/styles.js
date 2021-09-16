/**
 * Created by fxpage on 8/18/16.
 */
import { Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window');
import {
   metrics,
   colors,
   fonts,
} from 'sportunity/src/theme';

export const styles = {
  navBarContainerAndroid: {
    height: 50, 
    backgroundColor: colors.skyBlue, 
    flexDirection: 'row',
    // alignItems: 'center',
    alignItems: 'center',
  },
  navBarContainerIOS: {
    height: 64, 
    backgroundColor: colors.skyBlue, 
    flexDirection: 'row',
    // alignItems: 'center',
    alignItems: 'center',
    paddingTop: 14
  },
  navBarTitle: {
    flex: 1,
    color: colors.snow,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: fonts.size.h6,
  },
  navOptionsButton: {
    color: colors.snow,
    fontSize: 25,
    fontWeight: 'bold',
    height: 50,
    paddingTop: 7
  },
  navOptionsButtonIos: {
    color: colors.snow,
    fontSize: 25,
    fontWeight: 'bold',
    height: 50,
    paddingTop: 15
  },
  navBarReturnButton: {
    marginLeft: 10,
    width: 30
  },
  navBarReturnButtonIcon: {
    aspectRatio: 0.5,
    resizeMode: 'contain',
    transform:[ {scaleX: -1}],
    tintColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    position: 'relative',
  },
  scrollView: {
    backgroundColor: colors.silver,
  },
  hbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hblIcon: {
    width: 15,
    height: 15,
  },
  hblTxt: {
    color: colors.lightGreen,
  },
  rowContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: metrics.baseMargin,
    paddingHorizontal: metrics.doubleBaseMargin,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 3,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    // flex: 1
  },
  title: [fonts.style.normal, {
    color: colors.darkGrey,
    paddingRight: 10,
    flex: 1,
  }],
  titleDesc: [fonts.style.normal, {
    color: colors.darkBlue,
    paddingRight: 10,
    marginRight: metrics.baseMargin,
  }],
  joinText: [fonts.style.normal, {
    color: colors.bloodOrange,
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 5,
    fontWeight: 'bold'
  }],  
  participantNumber: [fonts.style.normal, {
    color: colors.darkGrey,
    paddingRight: 10,
    fontSize: 16,
    flex: 1,
    marginTop: 3
  }],
  participant: [fonts.style.normal, {
    color: colors.blue,
    paddingRight: 10,
    fontSize: fonts.size.medium,
  }],
  status: [fonts.style.normal, {
    color: colors.blue,
    paddingRight: 10,
    fontSize: fonts.size.regular,
    marginBottom: 3,
  }],
  numberParticipant: [fonts.style.normal, {
    color: colors.blue,
    paddingRight: 10,
  }],
  price: [fonts.style.normal, {
    color: colors.blue,
  }],
  right_column: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    resizeMode: 'contain',
    width: metrics.icons.tiny,
    height: metrics.icons.tiny,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    tintColor: colors.black,
    //marginTop: 2,
  },
  descContainer:{
    //paddingLeft: 5,
    // flex: 1,
    justifyContent: 'center',
    marginTop: 7,
    marginBottom: 7
  },
  desc: [fonts.style.regular, {
    color: colors.charcoal,
    textAlign: 'justify',
  }],
  cancelation: [fonts.style.small, {
    color: colors.blue,
    textAlign: 'justify',
  }],
  rowPolicy:{
    
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  policy: [fonts.style.small, {
    color: colors.darkBlue,
  }],
  iconDarkBlue:{
    tintColor: colors.darkBlue,
  },
  iconBlue:{
    tintColor: colors.blue,
  },
  iconLightGrey:{
    tintColor: colors.lightGrey,
  },
  priceList: {
    margin: 15
  },
  rowMargin:{
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5
  },
  manOfTheGameModalContainer: {
    marginTop: metrics.baseMargin,
    //flex: 1,
    backgroundColor: colors.background,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  thumbProfile: {
    borderColor: colors.darkGreen,
    borderWidth: 3,
    width: metrics.images.medium,
    height: metrics.images.medium,
    borderRadius: metrics.images.mediumRadius,
    // resizeMode: 'contain',
  },
  smallThumbProfile: {
    borderColor: colors.darkGreen,
    borderWidth: 2,
    width: metrics.images.small,
    height: metrics.images.small,
    borderRadius: metrics.images.smallRadius,
    // resizeMode: 'contain',
  },
  pseudo: [fonts.style.normal, {
    color: colors.darkGrey,
  }],
  smallPseudo: [fonts.style.description, {
    color: colors.darkGrey,
    paddingTop: 3
  }],
  votedFor: {
    color: colors.blue,
    fontWeight: 'bold'
  },
  manOfTheGame: {
    color: colors.red,
    fontWeight: 'bold'
  },
  limitDate: [fonts.style.small, {
    marginTop: 3,
    color: colors.darkGrey
  }],
  manOfTheGameRow: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5
  },
  switchRow: {
    flexDirection: 'row', 
    margin: 15, 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  switchButton: {
    flex: 1,
  },
  imageContainer: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: metrics.baseMargin,
  },
  image: {
    width: metrics.images.medium,
    height: metrics.images.medium,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  members:[fonts.style.small, {
    color: colors.blue,
    fontWeight: 'bold',
    marginLeft: metrics.baseMargin,
  }],
  titleContainer: {
    justifyContent: 'center',
  },
  circleTitle: [
    fonts.style.normal, 
    {
      fontWeight: 'bold',
      color: colors.blue,
    },
  ],
  ownerContainer: {
    //flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  ownerName: {
    color: colors.charcoal,
    marginLeft: 5,
  },
  avatar: {
    width: 20,
    height: 20,
    marginRight: 5,
    //resizeMode: 'contain',
    borderRadius: 10
  },
  type: [
    fonts.style.description, 
    {
      color: colors.charcoal,
      marginTop: 5
    },
  ],
  typeName: [
    fonts.style.description, 
    {
      color: colors.blue,
    },
  ],
  topContent: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  bottomContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    position: 'absolute',
    width: width,
    height: height,
  },
  overlay: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  optionContainer: {
    borderRadius:5,
    width:width*0.8,
    backgroundColor:'rgba(255,255,255,0.8)',
    left:width*0.1,
  },
  optionStyle: {
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center'
  },
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
    marginRight: 10
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  modalPseudo: {
    marginLeft: 10,
    ...fonts.style.regular,
    color: colors.charcoal
  },
  titleContainer: {
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontWeight: '500'
  },
  smallThumb: {
    width: 28,
    height: 28,
    borderRadius: 14,
    resizeMode: 'cover',
  },
  subtitleText: {
    marginLeft: metrics.baseMargin / 2,
    color: colors.charcoal
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  plainButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.baseMargin,
  },
  plainButtonLeft: {
    borderRightWidth: 1,
    borderColor: colors.lightGrey,
  },
  updateButtonText: {
    color: colors.green,
  },
  cancelButtonText: {
    color: colors.red,
  },
  organizerHeading: {
    fontWeight: '500',
    fontSize: fonts.size.regular,
    marginBottom: 5,
  },
  formListSubtitle: {
    color: colors.charcoal,
    fontSize: fonts.size.small,
  },
  buttonCta: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.baseMargin,
    borderColor: colors.lightGrey,
  }
};
