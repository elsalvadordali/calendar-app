import { combineReducers, StoreEnhancer } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import Calendar from './calendar/caledar_utils'

let now = new Date()

//STORE

//ACTIONS
const REPLACE_CLASS = 'REPLACE_CLASS'

// ACTION CREATORS
const updateClassListByReplacement = (toRemove, toAdd) => {
  return {
    type: 'REPLACE_CLASS',
    toRemove,
    toAdd
  }
}

const replaceClass = (state, toRemove, toAdd) => {
  return 'replace you'
}

//Reducer
const designer = (state = [], action) => {
  switch (action.type) {
    case REPLACE_CLASS:
      return replaceClass(state, toRemove, toAdd)
  }
}

const store = createStore(designer)
store.subscribe(() => console.log(store.getState()))
