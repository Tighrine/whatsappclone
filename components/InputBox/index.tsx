import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import styles from './style';

const InputBox = () => {

    const [message, setMessage] = React.useState('');

    const onMicrophonePress = () => {
        console.log("Recording...");
    }

    const onSendPress = () => {
        console.log("Sending...");
        setMessage('');
    }

    const onPress = () => {
        if (!message)
            onMicrophonePress();
        else
            onSendPress();
    }

    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Message"
                />
                <Entypo name='attachment' size={24} color="grey" style={styles.icons} />
                {!message && <Fontisto name='camera' size={24} color="grey" style={styles.icons} />}
            </SafeAreaView>
            <TouchableOpacity onPress={onPress}>
                <SafeAreaView style={styles.buttonContainer}>
                    {!message
                        ? <MaterialCommunityIcons name='microphone' size={28} color="white" />
                        : <MaterialIcons name='send' size={26} color={"white"} />
                    }
                </SafeAreaView>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default InputBox;
