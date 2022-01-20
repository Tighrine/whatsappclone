import { SafeAreaView, ImageBackground, TouchableOpacity, Text } from "react-native";

const CameraPreview = ({ navigation, route }: any) => {
    const photo = route.params.photo;
    return (
        <SafeAreaView
            style={{
                backgroundColor: 'transparent',
                flex: 1
            }}
        >
            <ImageBackground
                source={{ uri: photo?.uri}}
                style={{
                    flex: 1
                }}
            >
                <SafeAreaView
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        padding: 15,
                        justifyContent: 'flex-end'
                    }}
                >
                    <SafeAreaView
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 130,
                                height: 40,

                                alignItems: 'center',
                                borderRadius: 4
                            }}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 20
                                }}
                            >
                                Re-take
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: 130,
                                height: 40,

                                alignItems: 'center',
                                borderRadius: 4
                            }}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 20
                                }}
                            >
                                save photo
                            </Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </SafeAreaView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default CameraPreview;