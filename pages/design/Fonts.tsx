import Slider from './Slider'

const Fonts = () => {
  const fontSize = {
    title: 'Font Size',
    id: 'text-',
    min: 0,
    max: 5
  }

  return (
    <div>
      <h3 className='text-xl3'>Fonts</h3>
      <Slider info={fontSize} />
    </div>
  )
}
export default Fonts
