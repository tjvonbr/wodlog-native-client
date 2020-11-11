import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';

function GradientView({ children }) {
  return (
    <LinearGradient
      colors={['rgba(97,164,199,1)', 'rgba(222,78,168,1)']}
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
    flex: 1
  }
})

export default GradientView;
