import { Image } from 'expo-image';
import { Platform, View, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import DisplayAnImage from '@/components/Image';
import App from '@/components/ui/lista';
import App1 from '@/components/ui/opacity';
import ViewBoxesWithColorAndText from '@/components/view';
import App2 from '@/components/swith';
import App3 from '@/components/scrollview';


export default function HomeScreen() {
  return (
            <View>
              App de Saúde

            <DisplayAnImage/>
            <App3/>
            
            <App2/> 
            </View>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
