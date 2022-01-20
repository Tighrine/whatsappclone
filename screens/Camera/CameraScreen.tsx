import React, { useState, useEffect, useRef } from 'react';
import { Text, SafeAreaView, TouchableOpacity, Touchable, View } from 'react-native';
import { Camera, CameraCapturedPicture } from 'expo-camera';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import PictureList from "../../components/PicturesList";
import styles from "./style";

export default function CameraScreen({ navigation }: any) {

  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [icon, setIcon] = useState<any>('flash-auto');
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.auto);
  let camera: any = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const swipeCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  const takePicture = async () => {
    const photo: CameraCapturedPicture = await camera.takePictureAsync();
    navigation.navigate('Preview', { photo });
  }

  const closeCamera = () => {
    navigation.goBack();
  }

  const switchFlashMode = () => {
    switch (icon) {
      case 'flash-auto':
        setIcon('flash-on');
        setFlashMode(Camera.Constants.FlashMode.on);
        break;
      case 'flash-off':
        setIcon('flash-auto');
        setFlashMode(Camera.Constants.FlashMode.auto);
        break;
      case 'flash-on':
        setIcon('flash-off');
        setFlashMode(Camera.Constants.FlashMode.off);
        break;
      default:
        break;
    }
  }

  if (hasPermission === null) {
    return <SafeAreaView />;
  }
  
  return (
    hasPermission ? 
    <SafeAreaView style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ratio='4:2'
        ref={(r) => {
          camera = r
        }}
        flashMode={flashMode}
      >
        <View style={styles.closeButton}>
          <TouchableOpacity onPress={closeCamera}>
            <MaterialIcons name="close" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <PictureList />
        </View>
        <SafeAreaView style={styles.buttonContainer}>
          <View style={styles.mainButtonContainer}>
            <TouchableOpacity
              onPress={switchFlashMode}
            >
              <MaterialIcons name={icon} size={30} color="white" style={{marginLeft: 15}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={takePicture}>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={swipeCamera}
            >
              <Ionicons name="ios-camera-reverse" size={30} color="white" style={{marginRight: 15}} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Camera>
    </SafeAreaView>
    :
    <Text>No access to camera</Text>
  );
}
