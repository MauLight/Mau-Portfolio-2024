import { ReactElement, useEffect, useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { ReactTyped } from 'react-typed'
import Markdown from 'markdown-to-jsx'
import { Screenplay } from './Screenplay'

const APIKey = import.meta.env.VITE_GEMINI_API_KEY

type WelcomeProps = {
  generation: string
  wasGenerated: boolean
  handleOnComplete: () => void
}

type StreamElementProps = {
  id: number
  type: string
  component: ReactElement
}

const Welcome = ({ generation, handleOnComplete } : WelcomeProps) => {
  const [ready, setReady] = useState<boolean>(false)
  const handleOnWelcomeComplete = (): void => {
    handleOnComplete()
    setReady(true)
  }
  return (
    <div className="w-full h-full">
      {
        generation.length > 0 && (
          <>
            {
              ready ? (
                <Markdown className='font-mono'
                >{generation}</Markdown>
              )
                :
                (
                  <ReactTyped startWhenVisible onComplete={handleOnWelcomeComplete} className='font-body' strings={[String(generation)]} typeSpeed={20} />
                )
            }
          </>
        )
      }
    </div>
  )
}

export const Creator = ({ prompt } : { prompt: string }): ReactElement => {
  const [stream, setStream] = useState<StreamElementProps[] | null>(null)
  const [generation, setGeneration] = useState<string>('')
  const [wasGenerated, setWasGenerated] = useState<boolean>(false)

  //* Input state
  const [inputValue, setInputValue] = useState<string>('')

  const genAI = new GoogleGenerativeAI(APIKey)
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

  const generateWithAI = async () => {
    const result = await model.generateContent(`I am an aspiring screenwriter and i want to write about ${prompt}, give me 3 different topics that relate to my idea in this way: "stories about ${prompt} are about this, and this and that", where "this" and "that" are specific words. Wrap everything up at exactly 120 characters and add markdown to the text.`)
    setGeneration(result.response.text())
  }

  const handleOnComplete = (): void => {
    setWasGenerated(true)
  }

  const handlePlaceholder = (): string => {
    console.log(stream)
    if (stream !== null) ''
    if (stream !== null && stream[stream.length - 1].type === 'welcome') {
      return 'Type /screenplay to start writing. Type /creator to enter Creator Mode. Type /chat to open the Chat. Type /help to see all commands.'
    }
    return ''
  }

  const handleEnterInput = (e: { key: string }) => {
    if (e.key === 'Enter') {
      if (inputValue.length > 0 && stream !== null) {
        switch (inputValue) {
        case '/screenplay':
          setStream([...stream, { id: stream.length, type: 'screenplay', component: <Screenplay /> }])
          break
        case '/creator':
          setStream([...stream, { id: stream.length, type: 'creator', component: <div>Creator</div> }])
          break
        case '/chat':
          setStream([...stream, { id: stream.length, type: 'chat', component: <div>Chat</div> }])
          break
        case '/help':
          setStream([...stream, { id: stream.length, type: 'help', component: <div>Help</div> }])
          break
        default:
          setStream([...stream, { id: stream.length, type: 'warning', component: <div>Help with warning.</div> }])
          break
        }
        setInputValue('')
      }
    }
  }

  const streamX = [
    {
      id: 0,
      type: 'welcome',
      component: <Welcome generation={generation} wasGenerated={wasGenerated} handleOnComplete={handleOnComplete} />,
    }
  ]

  useEffect(() => {
    generateWithAI()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setStream([...streamX])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generation])


  return (
    <div className="w-full min-h-full flex flex-col px-20">
      <div className="w-full min-h-[500px] border rounded-[10px] p-20 shadow-xl shadow-gray-50 flex flex-col gap-y-5">
        {
          stream !== null && stream.map((item) => (
            <div key={item.id} className="w-full h-full">
              {item.component}
            </div>
          ))
        }
        {
          wasGenerated && (
            <input value={inputValue} onChange={({ target }) => { setInputValue(target.value) }} onKeyDown={handleEnterInput} placeholder={handlePlaceholder()} type="text" className='w-full h-10 px-2 rounded-[5px] bg-[#f3f3f3] ring-0 focus:ring-0 focus:outline-none text-[14px] font-mono' />
          )
        }
      </div>
    </div>
  )
}