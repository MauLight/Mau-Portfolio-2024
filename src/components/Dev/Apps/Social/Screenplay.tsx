import { ReactElement, SetStateAction, useEffect, useState, KeyboardEvent } from 'react'

interface ScreenplayStreamElement {id: number, type: string, component: ReactElement}

const Description = ({ text, id, onSubmit, isDialogue } : {text: string, id: string, onSubmit: (key: string, isCharacter?: boolean) => void, isDialogue?: boolean}): ReactElement => {
  const [value, setValue] = useState<string>(text)
  const [style, setStyle] = useState<string>('')
  const [isCharacter, setIsCharacter] = useState<boolean>(false)
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value)
  }

  const slugline = 'uppercase w-full h-auto bg-gray-50 font-mono font-semibold text-left text-[14px] text-balance ring-0 focus:ring-0 focus:outline-none resize-none'
  const action = 'w-full bg-gray-50 font-mono text-left text-[14px] text-balance ring-0 focus:ring-0 focus:outline-none resize-none'
  const character = 'bg-gray-50 font-mono text-center uppercase text-[14px] ring-0 focus:ring-0 focus:outline-none resize-none'
  const dialogue = 'w-[350px] h-auto bg-gray-50 font-mono text-[14px] text-center text-balance ring-0 focus:ring-0 focus:outline-none resize-none'
  const transition = 'w-full h-auto bg-gray-50 font-mono text-right text-[14px] text-balance ring-0 focus:ring-0 focus:outline-none resize-none'

  const streamType = () => {
    if (isDialogue) {
      console.log('isDialogue:', isDialogue)
      setStyle(dialogue)
      setIsCharacter(false)
    }
    if (value.length > 2) {
      if (value === value.toUpperCase() && !(value.toUpperCase() === 'INT' || value.toUpperCase() === 'EXT') && value.slice(-1) === ':') {
        setStyle(transition)
      }
      if (value.length > 4 && value === value.toUpperCase() && !(value.slice(0, 4).toUpperCase() === 'INT.' || value.slice(0, 4).toUpperCase() === 'EXT.') && value.slice(-1) !== ':') {
        setIsCharacter(true)
        setStyle(character)
      }
      if (value.slice(0, 4).toUpperCase() === 'INT.' || value.slice(0, 4).toUpperCase() === 'EXT.') {
        setStyle(slugline)
      }
    } else {
      setStyle(action)
    }
  }

  const onSubmitText = (e: KeyboardEvent) => {
    if (value.length > 0 && e.key === 'Enter' && isCharacter) {
      e.preventDefault()
      onSubmit('enter', isCharacter)
    } if (value.length > 0 && e.key === 'Enter' && !isCharacter) {
      console.log('is this triggered?', value, value.length)
      e.preventDefault()
      onSubmit('enter')
    } if (e.key === 'Backspace' && value.length === 0) {
      onSubmit('backspace')
    }
  }

  useEffect(() => {
    streamType()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <div key={id} className={isCharacter || isDialogue ? 'w-full flex justify-center' : 'w-full flex justify-start'}>
      <textarea autoFocus value={value} onChange={handleChange} onKeyDown={onSubmitText} className={style} />
    </div>
  )
}

export const Screenplay = () => {
  const onSubmit = (key: string, isCharacter?: boolean) => {
    if (key === 'enter' && isCharacter) {
      setType('dialogue')
      setAddOne(true)
    } else if (key === 'enter' && !isCharacter) {
      setType('description')
      setAddOne(true)
    }
    if (key === 'backspace') {
      setRemoveOne(true)
    }
  }

  const [stream, setStream] = useState<ScreenplayStreamElement[]>([])
  const [type, setType] = useState<string>('')
  const [addOne, setAddOne] = useState<boolean>(false)
  const [removeOne, setRemoveOne] = useState<boolean>(false)

  const screenplayStream = [
    {
      id: 0,
      type: 'description',
      component: <Description onSubmit={onSubmit} text='INT. LIVING ROOM - DAY' id={'id-0'} />,
    },
  ]

  useEffect(() => {
    setStream([...screenplayStream])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (addOne && type === 'dialogue') {
      setStream([...stream, { id: stream.length, type, component: <Description isDialogue={true} onSubmit={onSubmit} text='' id={`id-${stream.length}`} /> }])
      setAddOne(false)
    }
    if (addOne && type === 'description') {
      setStream([...stream, { id: stream.length, type, component: <Description onSubmit={onSubmit} text='' id={`id-${stream.length}`} /> }])
      setAddOne(false)
      setType('description')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addOne])

  useEffect(() => {
    if (stream. length > 1 && removeOne) {
      const newStream = stream.slice(0, stream.length - 1)
      setStream([...newStream])
      setRemoveOne(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeOne])

  return (
    <div onClick={() => { console.log(type) }} className='w-full min-h-full flex flex-col gap-y-3 p-2 rounded-[5px] bg-gray-50'>
      {
        stream.map((elem, i) => (
          <div key={i} className='w-full h-auto'>
            {elem.component}
          </div>
        ))
      }
    </div>
  )
}
