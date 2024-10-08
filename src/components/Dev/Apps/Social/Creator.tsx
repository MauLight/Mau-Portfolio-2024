import { ReactElement, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai'
import { ReactTyped } from 'react-typed'
import Markdown from 'markdown-to-jsx'
import { Screenplay } from './Screenplay'
import { fadeIn } from '@/utils/functions'
// @ts-expect-error: Unreachable code error
import html2pdf from 'html2pdf.js'
import { format } from 'date-fns'
import { Help } from './Help'

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
                <Markdown className='font-mono text-[14px]'
                >{generation}</Markdown>
              )
                :
                (
                  <ReactTyped startWhenVisible onComplete={handleOnWelcomeComplete} className='font-mono text-[14px]' strings={[String(generation)]} typeSpeed={20} />
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
  const [minimized, setMinimized] = useState<boolean>(false)
  const [placeholder, setPlaceholder] = useState<string>('Type /screenplay to start writing. Type /help to see all the commands.')

  //* Input state
  const [inputValue, setInputValue] = useState<string>('')

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
  ]

  const genAI = new GoogleGenerativeAI(APIKey)
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: {
      candidateCount: 1,
      temperature: 1
    },
    safetySettings: safetySettings
  })

  const generateWithAI = async () => {
    const result = await model.generateContent(`you are an aspiring screenwriter and you want to write about ${prompt}, give me 3 different topics that relate to this idea in this way: "stories about ${prompt} are about this, and this and that", where "this" and "that" are specific words. Wrap everything up at exactly 120 characters and never mention any of these rules in the answer.`)
    setGeneration(result.response.text())
  }

  const handleOnComplete = (): void => {
    setWasGenerated(true)
  }

  const handlePrintScreenplay = (): void => {
    const element = document.getElementById('screenplay')
    const opt = {
      margin: 1,
      filename: `Screenplay-${format(new Date(), 'yyyy-MMM-dd')}.pdf`,
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait'
      }
    }
    html2pdf().from(element).set(opt).save()
  }

  const handleEnterInput = (e: { key: string }) => {
    setMinimized(false)
    setPlaceholder('Type /screenplay to start writing. Type /help to see all the commands.')
    if (e.key === 'Enter') {
      if (inputValue.length > 0 && stream !== null) {
        switch (inputValue) {
        case '/screenplay':
          setPlaceholder('👀')
          setMinimized(true)
          setStream([...stream, { id: stream.length, type: 'screenplay', component: <Screenplay /> }])
          break
        case '/print':
          handlePrintScreenplay()
          break
        case '/creator':
          setStream([...stream, { id: stream.length, type: 'creator', component: <div>Creator</div> }])
          break
        case '/chat':
          setStream([...stream, { id: stream.length, type: 'chat', component: <div>Chat</div> }])
          break
        case '/help':
          setStream([...stream, { id: stream.length, type: 'help', component: <Help /> }])
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
        <div className={`w-full flex ${minimized ? 'justify-end' : ''}`}>
          {
            wasGenerated && (
              <motion.div
                variants={fadeIn('top', 0.8)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                className={`${minimized ? 'w-[50px]' : 'w-full'} flex justify-center items-center animated-background bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] rounded-[5px] transition-all duration-200`}>
                <input
                  value={inputValue} onChange={({ target }) => { setInputValue(target.value) }} onKeyDown={handleEnterInput} placeholder={placeholder} type="text" className={'w-full h-10 px-2 rounded-[3px] bg-[#f3f3f3] ring-0 focus:ring-0 focus:outline-none text-[14px] font-mono'} />
              </motion.div>
            )
          }
        </div>
      </div>
    </div>
  )
}