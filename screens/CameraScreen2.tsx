import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, Alert, ImageBackground, Image} from 'react-native'
import {Camera, CameraCapturedPicture} from 'expo-camera'
let camera: Camera

export default function CameraScreen() {
    const [startCamera, setStartCamera] = React.useState(false)
    const [preSafeAreaViewVisible, setPreSafeAreaViewVisible] = React.useState(false)
    const [capturedImage, setCapturedImage] = React.useState<any>(null)
    const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)
    const [flashMode, setFlashMode] = React.useState('off')
  
    const __startCamera = async () => {
      const {status} = await Camera.requestCameraPermissionsAsync()
      console.log(status)
      if (status === 'granted') {
        setStartCamera(true)
      } else {
        Alert.alert('Access denied')
      }
    }
    const __takePicture = async () => {
      const photo: CameraCapturedPicture = await camera.takePictureAsync()
      console.log(photo)
      setPreSafeAreaViewVisible(true)
      //setStartCamera(false)
      setCapturedImage(photo)
    }
    const __savePhoto = () => {}
    const __retakePicture = () => {
      setCapturedImage(null)
      setPreSafeAreaViewVisible(false)
      __startCamera()
    }
    const __handleFlashMode = () => {
      if (flashMode === 'on') {
        setFlashMode('off')
      } else if (flashMode === 'off') {
        setFlashMode('on')
      } else {
        setFlashMode('auto')
      }
    }
    
    const __switchCamera = () => {
      if (cameraType === 'back') {
        setCameraType('front')
      } else {
        setCameraType('back')
      }
    }
    return (
      <SafeAreaView style={styles.container}>
        {startCamera ? (
          <SafeAreaView
            style={{
              flex: 1,
              width: '100%'
            }}
          >
            {preSafeAreaViewVisible && capturedImage ? (
              <CameraPreSafeAreaView photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />
            ) : (
              <Camera
                type={cameraType}
                flashMode={flashMode}
                style={{flex: 1}}
                ref={(r) => {
                  camera = r
                }}
              >
                <SafeAreaView
                  style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: 'transparent',
                    flexDirection: 'row'
                  }}
                >
                  <SafeAreaView
                    style={{
                      position: 'absolute',
                      left: '5%',
                      top: '10%',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <TouchableOpacity
                      onPress={__handleFlashMode}
                      style={{
                        backgroundColor: flashMode === 'off' ? '#000' : '#fff',
                        borderRadius: 50,
                        height: 25,
                        width: 25
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20
                        }}
                      >
                        ⚡️
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={__switchCamera}
                      style={{
                        marginTop: 20,
                        borderRadius: 50,
                        height: 25,
                        width: 25
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20
                        }}
                      >
                        {cameraType === 'front' ? '🤳' : '📷'}
                      </Text>
                    </TouchableOpacity>
                  </SafeAreaView>
                  <SafeAreaView
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      flexDirection: 'row',
                      flex: 1,
                      width: '100%',
                      padding: 20,
                      justifyContent: 'space-between'
                    }}
                  >
                    <SafeAreaView
                      style={{
                        alignSelf: 'center',
                        flex: 1,
                        alignItems: 'center'
                      }}
                    >
                      <TouchableOpacity
                        onPress={__takePicture}
                        style={{
                          width: 70,
                          height: 70,
                          bottom: 0,
                          borderRadius: 50,
                          backgroundColor: '#fff'
                        }}
                      />
                    </SafeAreaView>
                  </SafeAreaView>
                </SafeAreaView>
              </Camera>
            )}
          </SafeAreaView>
        ) : (
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <TouchableOpacity
              onPress={__startCamera}
              style={{
                width: 130,
                borderRadius: 4,
                backgroundColor: '#14274e',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 40
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >
                Take picture
              </Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}
  
        <StatusBar style="auto" />
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  
  