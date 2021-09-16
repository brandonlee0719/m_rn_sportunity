# SPORTUNITY MOBILE APP

## SETUP ANDROID APP
```
npm install
react-native link 
```
- install all devendencies and required api levels to letest as suggested by android studio 

## SETUP IOS APP (xCode v10.2)

```
npm install 
cd ios && pod install 
```

To launch the bundlers, execute those commands in 2 separate terminal tabs : 
```
npm run relay:watch
npm run clear
```

## Modifying files 

To modify any file, please create a new branch from the master : 
```
git checkout master
git pull
git checkout -b features/FEATURE_NAME
```
Then after you finished your modifications, you can push and create a new pull request.

## Testing process

In constants.json, replace all the occurences of https://backendsportunity2017.com by http://51.144.36.27
This will connect you to the dev backend server

If you want to see the logs, you'll have to modify the file .babelrc to remove the plugin `transform-remove-console`, then re-run the script `npm run clear`.

## Deployment for iOS production 
Run `npm run build:ios` to generate a new main.jsbundle file 
Remove previous references of main.jsbundle in "Resources" folder (in left panel) and re-add it
Remove previous references of main.jsbundle in "Copy Bundle Resources" folder (in Build Phases) and re-add it
Then archive from XCode

## Troubleshooting
