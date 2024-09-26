import { ReactElement, useState } from 'react'

const Slugline = ({ text, id } : {text: string, id: string}): ReactElement => {
  const [value, setValue] = useState<string>(text[0].toUpperCase() + text.slice(1))
  const handleChange = (e: { target: { value: string } }) => {
    setValue(e.target.value)
  }
  return (
    <div key={id} className="w-full flex">
      <textarea value={value} onChange={handleChange} className='w-full h-auto bg-gray-50 uppercase font-mono font-semibold text-left text-[14px] text-balance ring-0 focus:ring-0 focus:outline-none resize-none' />
    </div>
  )
}

const Action = ({ text, id } : {text: string, id: string}): ReactElement => {
  const [value, setValue] = useState<string>(text[0].toUpperCase() + text.slice(1))
  const handleChange = (e: { target: { value: string } }) => {
    setValue(e.target.value)
  }
  return (
    <div key={id} className="w-full flex justify-start">
      <textarea value={value} onChange={handleChange} className='w-full h-auto bg-gray-50 font-mono text-left text-[14px] text-balance ring-0 focus:ring-0 focus:outline-none resize-none' />
    </div>
  )
}

const Character = ({ name, id } : {name: string, id: string}): ReactElement => {
  const [value, setValue] = useState<string>(name)
  const handleChange = (e: { target: { value: string } }) => {
    setValue(e.target.value)
  }
  return (
    (
      <div key={id} className="w-full flex justify-center pt-5">
        <input value={value} onChange={handleChange} className='bg-gray-50 font-mono text-center uppercase text-[14px] ring-0 focus:ring-0 focus:outline-none' />
      </div>
    )
  )
}

const Dialogue = ({ text, id } : {text: string, id: string}): ReactElement => {
  const [value, setValue] = useState<string>(text[0].toUpperCase() + text.slice(1))
  const handleChange = (e: { target: { value: string } }) => {
    setValue(e.target.value)
  }
  return (
    <div key={id} className="w-full flex justify-center pb-5">
      <textarea value={value} onChange={handleChange} className='w-[350px] h-auto bg-gray-50 font-mono text-center text-[14px] text-balance ring-0 focus:ring-0 focus:outline-none resize-none' />
    </div>
  )
}


export const Screenplay = () => {
  return (
    <div className='w-full min-h-full flex flex-col gap-y-3 p-2 rounded-[5px] bg-gray-50'>
      <Slugline text='INT. LIVING ROOM - DAY' id='slugline-1' />
      <Action text='John walks into the room.' id='action-1' />
      <Character name='John' id='character-1' />
      <Dialogue text='Hello, world.' id='dialogue-1' />
      <Action text='He immediately regrets it.' id='action-1' />
    </div>
  )
}
