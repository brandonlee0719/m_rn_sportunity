/**
 * Created by Mohamed Anouar KOTTI
 * kottianouar@gmail.com
 */
import {
   metrics,
   colors,
   fonts,
} from 'sportunity/src/theme';

export const styles = {
  header: {
    backgroundColor: colors.blue,
    // paddingTop: 20,
    marginBottom: metrics.baseMargin,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  title: {
    alignSelf: 'center',
    color: colors.snow,
    fontSize: fonts.size.h6,
    marginBottom: 15,
    //marginHorizontal: metrics.baseMargin,
    textAlign: 'center',
  },
  sportName: {
    //alignSelf: 'center',
    color: colors.black,
    fontSize: 14,
    marginTop: 10,
    //marginHorizontal: metrics.baseMargin,
    textAlign: 'center',
  },
  headerTop: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 15, 
    justifyContent: 'space-between',
  },
  headerTopLeft: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 15,
    flex: 1
  },
  headerBottom: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 8,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitleContainer: {
    //alignItems: 'center',
  },
  headerTxtDesc: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  shareContainer: {
    paddingHorizontal: 8,
  },
  // share: {
  //   alignSelf: 'flex-start',
  //   width: 20,
  //   height: 20,
  // },
  share: {
    alignSelf: 'flex-start',
    fontSize: fonts.size.regular,
    color: 'white',
  },
  status: {
    fontSize: fonts.size.regular,
    alignSelf: 'flex-end',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  headerTxtDescTop: {
    color: colors.white,
    fontSize: 15,
  },
  headerTxtDescBottom: {
    color: colors.black,
    fontSize: 18,
  },
  headerImage: {
    width: 60,
    height: 60,
    tintColor: colors.black,
  },
  icon: {
    width: 12,
    height: 12,
    tintColor: colors.white,
    marginRight: 5
  },
  levelContainer: {
    /*flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    */
  },
  column :{
    /*flex: 1,
    flexDirection: 'column',*/
  },
}
