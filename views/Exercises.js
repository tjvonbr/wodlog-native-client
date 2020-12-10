/* 
  I chose this example of code because I think it demonstrates
  my abilitiy to keep a clean, well-documented codebase, my ability to
  style reusable components, and interact with app server and state
  management architecture (Redux, in this case).
*/

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, FlatList, SafeAreaView, Text, TextInput, View } from 'react-native'
import AddExerciseModal from '../components/AddExerciseModal'
import SmIconBtn from '../components/buttons/SmIconBtn'
import ExerciseListItem from '../components/ExerciseListItem'
import { fetchExercises } from '../actions/exercise-actions'
import EStyleSheet from 'react-native-extended-stylesheet'

function Exercises({ isLoading }) {
  const [isVisible, setIsVisible] = useState(false)

  // Toggle modal -- TODO see if this can be exported from component file
  const showModal = () => setIsVisible(true)
  const hideModal = () => setIsVisible(false)

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.innerHeaderWrapper}>
          <View style={{ flex: 2 }}></View>
          <Text style={styles.headerText}>Exercises</Text>
          <SmIconBtn handlePress={showModal} />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={text => setSearch(text)}
          placeholder='Search'
        />
      </View>
      <View style={styles.flatListWrapper}>
        { isLoading ? <ActivityIndicator /> : 
          (exercises < 1) ? 
          <View style={styles.emptyListWrapper}>
            <Text style={styles.emptyList}>
              You haven't added any exercises yet!
            </Text>
          </View> :
          <FlatList 
            data={exercises}
            extraData={exercises}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({ item }) => {
              return <ExerciseListItem item={item} />
            }}
          />
        }
      </View>
      <View>
        <AddExerciseModal visible={isVisible} hide={hideModal} />
      </View>
    </SafeAreaView>
  )
}

const styles = EStyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerHeaderWrapper: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    flex: 6,
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  input: {
    width: '90%',
    padding: '0.5rem',
    fontSize: '1rem',
    color: '$black',
    backgroundColor: '$lightgray',
    borderWidth: 1,
    borderColor: '$lightgray',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    marginTop: 5
  },
  flatListWrapper: {
    width: '100%',
  },
  emptyListWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyList: {
    width: '50%',
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: '600'
  }
})

function mapStateToProps(state) {
  return {
    exercises: state.exercises,
    isLoading: state.isLoading
  }
}

export default connect(
  mapStateToProps,
  { fetchExercises }
)(Exercises)
