import React from 'react'
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import { Marker } from 'react-native-maps';

export default function Direction(){

return(
<MapView initialRegion={{
  latitude: 25.2623,
  longitude: 82.9894,
  latitudeDelta: 0.009,
    longitudeDelta: 0.009,}} style={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0, height:810, }}>
  <Marker
     coordinate={{latitude:25.2623,longitude:82.9894}}
     title="Library"
     description="This is library location"
   />
</MapView>)

}
