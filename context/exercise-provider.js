import React, { useContext } from 'react';
import axios from 'axios';
import client from '../utils/client';
import { useQuery } from 'react-query';
import { config } from '../constants/env-variables';

const apiUrl = config.base;

// Initial request to fetch exercises data
function fetchExercises() {
  client('exercises')
  .then(res => {
    setExercises(res.data);
  })
  .catch(err => console.log(err))
}

const ExercisesContext = createContext();

function ExerciseProvider(props) {
  useEffect(() => {
    const exercises = await fetchExercises()
  })
}