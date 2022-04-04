import { useState } from 'react'

type SliderInfo = {
  id: string
  title: string
  min: number
  max: number
}

const Slider = ({ info }: SliderInfo) => {
  const returnProp = e => {}

  const [setting, setSetting] = useState(0)
  console.log(setting)
  return (
    <form className='m-2'>
      <label className='text-xl block'>
        {info.title} : {2 * setting}
      </label>
      <input
        type='range'
        name={info.id}
        id={info.id}
        min={info.min}
        max={info.max}
        onChange={e => setSetting(e.target.value)}
      />
      <output className='' htmlFor={info.id}></output>
    </form>
  )
}

export default Slider
