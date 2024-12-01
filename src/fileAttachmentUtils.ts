// fileAttachmentUtils.ts
import {Alert} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player'; // Import the library
import DocumentPicker from 'react-native-document-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions'; // Import permission handling

// Initialize the recorder player
const audioRecorderPlayer = new AudioRecorderPlayer();

// Function to handle file attachment (image, document, etc.)
export const handleAttachment = async () => {
  Alert.alert(
    'Attach File',
    'Choose an option',
    [
      {
        text: 'Take a Picture',
        onPress: async () => {
          // Launch camera to take a photo
          launchCamera({mediaType: 'photo'}, response => {
            if (response.didCancel) {
              console.log('User cancelled camera picker');
            } else if (response.errorCode) {
              console.log('Camera Error: ', response.errorMessage);
            } else if (response.assets) {
              console.log('Camera Result:', response.assets[0]);
            }
          });
        },
      },
      {
        text: 'Select from Gallery',
        onPress: async () => {
          // Launch gallery to pick an image
          launchImageLibrary({mediaType: 'photo'}, response => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.errorCode) {
              console.log('Image Picker Error: ', response.errorMessage);
            } else if (response.assets) {
              console.log('Gallery Result:', response.assets[0]);
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

// Function to handle microphone press (record audio)
// Function to handle microphone press (record audio)
export const handleMicrophonePress = async (
  setMessages: any,
  messages: any,
) => {
  try {
    console.log(PERMISSIONS.ANDROID.MICROPHONE); // Check if this is correct
    // Request microphone permission
    const permissionStatus = await request(PERMISSIONS.ANDROID.MICROPHONE); // For Android
    // If you want to support iOS, use PERMISSIONS.IOS.MICROPHONE

    if (permissionStatus === RESULTS.GRANTED) {
      // Start recording when microphone icon is pressed
      const path = 'audioMessage.m4a'; // Set the path for saving the recording
      const startTime = await audioRecorderPlayer.startRecorder(path);
      console.log('Recording started at', startTime);

      // Show alert to inform the user
      Alert.alert('Recording started', 'Tap again to stop recording.');

      // Optionally, you can use a timeout to stop the recording after a set duration
      setTimeout(async () => {
        const stopTime = await audioRecorderPlayer.stopRecorder();
        console.log('Recording stopped at', stopTime);

        // Use the path where you saved the file for the URI
        const audioUri = path; // Since we are saving it to 'audioMessage.m4a', we use this path directly

        // Create a new message object with the audio file URI
        const newMessage = {
          id: (messages.length + 1).toString(),
          type: 'sent',
          text: 'Audio message sent',
          time: new Date().toLocaleTimeString().slice(0, 5),
          audioUri, // Add the URI of the recorded audio
        };
        setMessages([...messages, newMessage]); // Add new message to state
      }, 5000); // Auto stop after 5 seconds for demo (adjust as needed)
    } else {
      Alert.alert('Permission denied', 'Microphone permission is required.');
    }
  } catch (error) {
    console.error('Error recording audio:', error);
    Alert.alert('Error', 'An error occurred while recording the audio.');
  }
};
