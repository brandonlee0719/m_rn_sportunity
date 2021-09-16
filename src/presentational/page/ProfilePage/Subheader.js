import React from 'react';
import { pure } from 'sportunity/src/lib/PureComponent'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import ImageResizer from 'react-native-image-resizer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AvatarMutation from './AvatarMutation';
import FollowMutation from './FollowMutation';
import UnfollowMutation from './UnfollowMutation.js';
import { colors, images, metrics, fonts } from 'sportunity/src/theme';
import Toast from 'react-native-simple-toast';
import RNFetchBlob from 'react-native-fetch-blob';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
var Platform = require('react-native').Platform;
import ImagePicker from 'react-native-image-crop-picker';

const SubHeader = pure(({ sportunityNumber, viewer, userId, meId, followers, avatar,
  switchToTab, tab, updateFollowStatus, isFollowing, meBlackList, otherBlackList, navigation }) => {

  const options = {
    title: I18n.t('profileAvatarTitle'),
    cancelButtonTitle: I18n.t('profileAvatarCancel'),
    takePhotoButtonTitle: I18n.t('profileAvatarTakePhoto'),
    chooseFromLibraryButtonTitle: I18n.t('profileAvatarChooseFromLibrary'),
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const updateAvatar = () => {
    /*ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        Toast.show(I18n.t('registerToastImagePickerCanceled'))
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Toast.show(I18n.t('registerToastAvatarFailed'));
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        const avatar = `data:image/jpeg;base64,${response.data}`;
        resizeAvatar(avatar, 100, 100, 'PNG', 70);
      }
    });*/

    ImagePicker.openPicker({
      width: 100,
      height: 100,
      includeBase64: true,
      cropping: true
    }).then(image => {

      const avatar = `data:image/jpeg;base64,${image.data}`
      resizeAvatar(avatar, 100, 100, 'PNG', 70);
    });
  }

  const resizeAvatar = (avatar, maxWidth, maxHeight, compressFormat, quality) => {
    ImageResizer.createResizedImage(avatar, maxWidth, maxHeight, compressFormat, quality)
      .then((avatar) => {
        readFile(avatar);
      }).catch((err) => {
        console.log(err);
        return Toast.show(I18n.t('registerToastResizeFailed'));
      });
  }

  const readFile = (avatar) => {
    RNFetchBlob.fs.readFile(avatar.path, 'base64')
      .then((source) => {
        const avatarVar = `data:image/jpeg;base64,${source}`;
        commitAvatar(viewer, meId, avatarVar);
      })
  }

  const commitAvatar = (viewer, meId, avatarVar) => {
    AvatarMutation.commit({
        userID: meId,
        user: {
          avatar: avatarVar,
        },
      },
      () => {
        Toast.show(I18n.t('profileAvatarUpdateSuccess'));
      },
      error => {
        Toast.show(I18n.t('registerToastAvatarFailed'));
        let errors = JSON.parse(error.getError().source);
        console.log(errors.errors[0].message);
      },
    );
  };


  // const followUser = (viewer, meId, userId) => {
  //   console.log(Relay)
  //   console.log(RelayStore)
  //   RelayStore.mutate({
  //     query: Relay.QL`mutation {
  //       upUser(input: $input) {
  //         user {
  //           id
  //           feedbacks
  //         }
  //       }
  //     }`,
  //     variables: {
  //       input: {
  //         userID: userId,
  //         user: {
  //           followers: meId,
  //         },
  //       },
  //     },
  //     onSuccess: (res) => {
  //       console.log(res)
  //     },
  //     onError: (transaction) => {
  //       console.log('mutation onFailure', transaction);
  //     },
  //   });
  // }


  const followUser = (viewer, meId, userId, ) => {

    FollowMutation.commit({
      userID: userId,
      user: {
        followers: meId,
      },
    },
    () => {
      Toast.show(I18n.t('followSuccess'));
      updateFollowStatus(true);
    },
    error => {
      Toast.show(I18n.t('somethingWentWrong'));
      let errors = JSON.parse(error.getError().source);
      console.log(errors.errors[0].message);
    });
  }

  const unfollowUser = (viewer, userId, ) => {

    UnfollowMutation.commit({
      userID: userId,
    },
    () => {
      Toast.show(I18n.t('unfollowSuccess'));
      updateFollowStatus(false);
    },
    error => {
      Toast.show(I18n.t('somethingWentWrong'));
      let errors = JSON.parse(error.getError().source);
      console.log(errors.errors[0].message);
    });
  }

  const goToChat = (userId, userPseudo, isBlackListed) => {
    isBlackListed ?
      Toast.show(I18n.t('chatNotAllowed'))
    :
      navigation.navigate('chatuser', { id: userId, title: userPseudo, hideNavBar:false });
  }

  const isBlackListed = (meId, otherBlackList) => {
    return otherBlackList.some(item => item.id === meId && true)
  }

  return(
    <View style={styles.container}>
      <View style={styles.upperContainer}>

        {/* 
          <View style={styles.iconContainer}>
              {
                !(viewer.me && ( !viewer.user || viewer.me.id === viewer.user && viewer.user.id)) && isFollowing &&
                  <TouchableOpacity style={styles.followIconContainer} onPress={() => unfollowUser(viewer, userId)}>

                    <Image
                      style={[styles.icon, { 'tintColor': colors.bloodOrange }]}
                      source={images.y_heart}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
              }
              {
                !(viewer.me && ( !viewer.user || viewer.me.id === viewer.user && viewer.user.id)) && !isFollowing &&
                  <TouchableOpacity style={styles.followIconContainer} onPress={() => followUser(viewer, meId, userId)}>

                    <Image
                      style={[styles.icon, { 'tintColor': colors.lightGreen }]}
                      source={images.y_heart}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
              }
              {
                (viewer.me && ( !viewer.user || viewer.me.id === viewer.user && viewer.user.id)) &&
                    <Image
                      style={[styles.icon, { 'tintColor': colors.lightGreen }]}
                      source={images.y_heart}
                      resizeMode="cover"
                    />
              }
            <Text style={styles.text}>
              {followers.length} {followers.length <= 1 ? I18n.t('follower') : I18n.t('followers')}
            </Text>
          </View> */}

        {
          viewer.me && ( !viewer.user || viewer.me.id === viewer.user && viewer.user.id) ?
            <TouchableOpacity
              style={styles.photoContainer}
              onPress={() => updateAvatar(viewer, meId)}
            >
              <Image source={{ uri: avatar }} style={styles.avatar} />
            </TouchableOpacity>
          :
            <TouchableOpacity style={styles.photoContainer}>
              <Image source={{ uri: avatar }} style={styles.avatar} />
            </TouchableOpacity>
        }

        {/* 
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={images.activities}
            resizeMode="cover"
          />
          <Text style={styles.text}>
            {sportunityNumber
            ? sportunityNumber > 1
              ? sportunityNumber + ' ' + I18n.t('activities')
              : sportunityNumber + ' ' + I18n.t('activity')
            : ''
            }
          </Text>
        </View> */}

      </View>


      <View style={styles.lowerContainer}>

        <TouchableOpacity style={[styles.lowerIconContainer, tab === 1 ? { borderColor: colors.snow } : {}]} onPress={() => switchToTab(1)}>
          <Icon name="info-outline" color={colors.snow} size={22} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.lowerIconContainer, tab === 2 ? { borderColor: colors.snow } : {}]} onPress={() => switchToTab(2)}>
          <Image
            style={styles.lowerIcons}
            source={images.stats}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.lowerIconContainer, tab === 3 ? { borderColor: colors.snow } : {}]} onPress={() => switchToTab(3)}>
          <Image
            style={styles.lowerIcons}
            source={images.calendarCheck}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.lowerIconContainer, tab === 4 ? { borderColor: colors.snow } : {}]} onPress={() => viewer.user && viewer.user.pseudo ? goToChat(userId, viewer.user.pseudo, isBlackListed(meId, otherBlackList)) : Toast.show(I18n.t('chatYourselfNotAllowed'))}>
          <Image
            style={styles.lowerIcons}
            source={images.commentsIcon}
            resizeMode="cover"
          />
        </TouchableOpacity>

      </View>

    </View>
  )
})

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.skyBlue,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    height: metrics.icons.tiny,
    width: metrics.icons.tiny,
  },
  followIconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: metrics.baseMargin,
    width: 70,
    height: 70,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: colors.skyBlue,
    backgroundColor: colors.snow,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: 'cover',
  },
  text: {
    marginTop: 4,
    fontSize: fonts.size.small,
    color: colors.snow,
  },
  //
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingTop: metrics.baseMargin,
  },
  lowerIconContainer: {
    width: '22%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderColor: colors.skyBlue,
  },
  lowerIcons: {
    height: metrics.icons.small,
    width: metrics.icons.small,
    tintColor: colors.snow,
  },
});

I18n.fallbacks = true
I18n.translations = translations;
