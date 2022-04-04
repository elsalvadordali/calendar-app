import { useState } from 'react'
import AddTask from '../AddTask'
import Calendar from '../caledar_utils'

const DayView = () => {
  const cal = new Calendar()
  const [date, setDate] = useState(cal.getWeek)
  console.log(date)
  return (
    <div
      id='container'
      className='h-full w-1/2 border-2 border-black border-radius-xl'
    >
      <header>
        <h1>DATE</h1>
      </header>
      <div>
        <ul className='m-3'>
          <li>Task 1</li>
          <li>Task 2</li>
        </ul>
        <AddTask />
      </div>
    </div>
  )
}

export default DayView
