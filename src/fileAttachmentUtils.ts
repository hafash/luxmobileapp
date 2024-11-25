// fileAttachmentUtils.ts
import {Alert} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// Define a function to handle file attachment
export const handleAttachment = async () => {
  Alert.alert(
    'Attach File',
    'Choose an option',
    [
      {
        text: 'Take a Picture',
        onPress: async () => {
          // Updated to include the callback
          launchCamera({mediaType: 'photo'}, response => {
            if (response.didCancel) {
              console.log('User cancelled camera picker');
            } else if (response.errorCode) {
              console.log('Camera Error: ', response.errorMessage);
            } else if (response.assets) {
              console.log('Camera Result:', response.assets[0]);
              // You can store the result or perform any action
            }
          });
        },
      },
      {
        text: 'Select from Gallery',
        onPress: async () => {
          // Updated to include the callback
          launchImageLibrary({mediaType: 'photo'}, response => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.errorCode) {
              console.log('Image Picker Error: ', response.errorMessage);
            } else if (response.assets) {
              console.log('Gallery Result:', response.assets[0]);
              // You can store the result or perform any action
            }
          });
        },
      },
      {
        text: 'Pick a Document',
        onPress: async () => {
          try {
            const result = await DocumentPicker.pick({
              type: [DocumentPicker.types.allFiles],
            });
            console.log('Document Result:', result);
            // You can store the result or perform any action
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              console.log('User canceled document picker');
            } else {
              throw err;
            }
          }
        },
      },
      {text: 'Cancel', style: 'cancel'},
    ],
    {cancelable: true},
  );
};

// // Function to handle microphone press (record audio)
// export const handleMicrophonePress = async () => {
//   const {status} = await Audio.requestPermissionsAsync();
//   if (status === 'granted') {
//     // Prepare audio recording
//     const recording = new Audio.Recording();
//     try {
//       await recording.prepareToRecordAsync(
//         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
//       );
//       await recording.startAsync();
//       Alert.alert('Recording started, tap again to stop.');

//       // Stop recording after a specified duration or allow user to stop manually
//       setTimeout(async () => {
//         await recording.stopAndUnloadAsync();
//         const uri = recording.getURI(); // Get the URI of the recorded audio
//         const newMessage: Message = {
//           id: (messages.length + 3).toString(),
//           type: 'sent',
//           text: `Audio message sent: ${uri}`, // You might want to handle audio files differently
//           time: new Date().toLocaleTimeString().slice(0, 5),
//         };
//         setMessages([...messages, newMessage]);
//       }, 5000); // Automatically stop after 5 seconds for demo; adjust as needed
//     } catch (error) {
//       console.error('Error recording audio:', error);
//     }
//   } else {
//     Alert.alert('Permission to access microphone is required!');
//   }
