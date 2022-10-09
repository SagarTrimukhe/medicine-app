# medicine-app
Prerequistes:
1. Node 
2. Expo
3. Firebase
3. Android Emulator

## Steps to run the project locally.
1. Clone the repo.
2. cd medicine-app
3. Run ```npm install ``` to install all the dependencies
4. Run ```npx expo start --localhost ``` to start the server.
5. Make sure the andriod emulator is running locally. For more info refer this link https://docs.expo.dev/workflow/android-studio-emulator/

More info about the expo: https://docs.expo.dev/

## Firebase configuartion
Export the following environement variables required for firebase connectivity.
```
export API_KEY="your_api_key"
export APP_ID="yout_app_id"
export MSG_SENDER_ID="your_message_sender_id"
```

Additinal configuration related to firebase can be found in the App.js file.