import Slider from './Slider'

const Fonts = () => {
  const fontSize = {
    title: 'Font Size',
    id: 'text-',
    min: 0,
    max: 5
  }

  const setFontSize = num => {
    let className = ''
    if (num === 0) className = 'text-sm'
    else if (num === 1) className = 'text-md'
    else if (num === 2) className = 'text-lg'
    else if (num === 3) className = 'text-xl'
    else if (num === 4) className = 'text-xl1'
    else className = 'text-xl2'

    //changeClassList('text-', className)
  }
  const setFontColor = color => {}

  return (
    <div>
      <h3 className='text-xl3'>Fonts</h3>
      <Slider info={fontSize} />
    </div>
  )
}
export default Fonts
