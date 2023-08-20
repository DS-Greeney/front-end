import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default function Map() {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.65197605,
          longitude: 127.01580525,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 37.65197611, longitude: 127.01580531}}
          title="테스트"
          description="상세한 설명"
          pinColor="green"
        />
      </MapView>
    </View>
  );
}
