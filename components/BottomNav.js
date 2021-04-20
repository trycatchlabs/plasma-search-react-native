import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import Header from '../components/Header';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const RecentsRoute2 = () => <Text>Recents2</Text>;

function BottomNav() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Blood', title: 'Blood', icon: 'water' },
        { key: 'albums', title: 'Oxygen', icon: 'circle' },
        { key: 'recents', title: 'Misc', icon: 'clipboard' },
        { key: 'Profile', title: 'Profile', icon: 'contacts' },
        
      
      ]);
      const renderScene = BottomNavigation.SceneMap({
        Blood: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        Profile: RecentsRoute2,
      });
    return (
            <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
        />


    );
}




export default BottomNav