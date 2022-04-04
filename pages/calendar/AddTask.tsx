import { execPath } from 'process'
import { useState } from 'react'

const AddTask = () => {
  const [task, setTask] = useState('')

  const addTaskToDay = e => {
    e.preventDefault()
    console.log('hello')
  }

  return (
    <form
      id='submitForm'
      className='border-2 m-3 border-black rounded-md w-1/2 hover:border-yellow focus:bg-yellow flex flex-nowrap flex-row justify-between items-center'
      onSubmit={e => addTaskToDay(e)}
    >
      <input
        className='w-11/12 outline outline-0 focus:bg-yellow'
        id='tastInput'
        type='text'
        placeholder='task...'
        value={task}
        onChange={e => setTask(e.target.value)}
      ></input>
      <button
        id='tastSubmit'
        type='submit'
        className='w-1/12 text-xl font-black hover:text-green h-full '
      >
        +
      </button>
    </form>
  )
}
export default AddTask
