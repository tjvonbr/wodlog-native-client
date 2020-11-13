import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import EStyleSheet from 'react-native-extended-stylesheet';

const BoxCalendar = () => {
  return (
    <SafeAreaView>
      <View>
        <Calendar 
          maxDate={'2020-12-31'}
          enableSwipeMonths={true}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = EStyleSheet.create({

})

export default BoxCalendar;
