import DayView from '../../calendar/day'
import Fonts from '../Fonts'

const DayDesign = () => {
  const fontSize = {
    title: 'Font Size',
    id: 'text-',
    min: 0,
    max: 5
  }

  return (
    <div className='flex flex-row h-screen'>
      <DayView />
      <div id='panel' className='h-full '>
        Sidebar
        <div>
          <h3 className='text-green'>Font</h3>
          <button className='border-2 border-black p-2 pl-4 pr-4 m-2'>
            Heyy
          </button>
          <Fonts />
        </div>
      </div>
    </div>
  )
}

export default DayDesign
