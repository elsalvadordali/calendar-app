import { combineReducers, StoreEnhancer } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import Calendar from './calendar/caledar_utils'

type ConfigureEnhancersCallback = (
  defaultEnhancers: StoreEnhancer[]
) => StoreEnhancer[]

const currentDateReducer = date => {
  return 'hi'
}

const datesReducer = () => {
  //let cal = new Calendar()
  //return new Date()
  return 'hi'
}

export const store = configureStore({
  reducer: {
    currentDate: currentDateReducer,
    dates: datesReducer
  }
})
