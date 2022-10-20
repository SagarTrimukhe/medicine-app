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

## Data model
Medicines information:
```
[
    {
      "description": "Dolo 650 Tablet helps relieve pain and fever by blocking the release of certain chemical messengers responsible for fever and pain. It is used to treat headaches, migraine, nerve pain, toothache, sore throat, period (menstrual) pains, arthritis, muscle aches, and the common cold",
      "id": 1,
      "name": "Dolo 650",
      "price": 5
    },
    {
      "description": "Crocin Advance Tablet helps relieve pain and fever by blocking the release of certain chemical messengers responsible for fever and pain. It is used to treat headaches, migraine, nerve pain, toothache, sore throat, period (menstrual) pains, arthritis, muscle aches, and the common cold.",
      "id": 2,
      "name": "Crocin Advance",
      "price": 10
    }
]
```

Orders information:  
*Todo: Store only the reference to medicine using medicine id.*
```
[
        {
          "description": "Dolo 650 Tablet helps relieve pain and fever by blocking the release of certain chemical messengers responsible for fever and pain. It is used to treat headaches, migraine, nerve pain, toothache, sore throat, period (menstrual) pains, arthritis, muscle aches, and the common cold",
          "name": "Dolo 650",
          "order_id": "e8989f6a-0990-47fb-99cc-2d363ff8aacd",
          "ordered_date": "2022-10-15T07:59:47.069Z",
          "price": 5,
          "quantity": "10"
        },
        {
          "description": "Useful for back pain, stiff neck, frozen shoulder, joint aches, arthritic pain, sprains, and muscle pulls",
          "name": "Systaflam Gel",
          "order_id": "e8989f6a-0990-47fb-99cc-2d363ff8aacd",
          "ordered_date": "2022-10-15T07:59:47.069Z",
          "price": 65,
          "quantity": "2"
        }
      ]
```

## Demo:
https://user-images.githubusercontent.com/46806187/195995966-2475e636-2bbc-4e26-befd-d6ecdd8eb69b.mp4


