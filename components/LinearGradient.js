import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';

function GradientView({ children }) {
  return (
    <LinearGradient
      colors={['rgba(201,95,188,1)', 'rgba(238,175,71,1)']}
      style={styles.wrapper}
    >
      <SafeAreaView>
        {children}
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = EStyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
  }
})

export default GradientView;
