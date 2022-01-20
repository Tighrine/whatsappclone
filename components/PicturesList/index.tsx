import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { PagedInfo } from 'expo-media-library';

const PituresList = () => {

    const [hasPermission, setPermission] = useState(false);
    const [photos, setPhotos] = useState<MediaLibrary.Asset[]>();

    useEffect(() => {
        (async () => {
            let status = await MediaLibrary.requestPermissionsAsync();
            setPermission(status?.granted);
            console.log(hasPermission)
            if(hasPermission){
                const photos: MediaLibrary.Asset[] = (await MediaLibrary.getAssetsAsync()).assets;
                setPhotos(photos);
            }
        });
    },[]);

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={photos}
                renderItem={({ item }) => <Image source={{ uri: item.uri }} />}
                inverted
                horizontal={true}
            />
        </View>
    )
}

export default PituresList
