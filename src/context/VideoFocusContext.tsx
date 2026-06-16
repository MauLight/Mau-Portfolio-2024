import { createContext, useContext, useState, type ReactNode } from 'react'

interface VideoFocusContextType {
  focused: boolean
  setFocused: (v: boolean) => void
}

const VideoFocusContext = createContext<VideoFocusContextType>({
  focused: false,
  setFocused: () => {},
})

export const VideoFocusProvider = ({ children }: { children: ReactNode }) => {
  const [focused, setFocused] = useState(false)
  return (
    <VideoFocusContext.Provider value={{ focused, setFocused }}>
      {children}
    </VideoFocusContext.Provider>
  )
}

export const useVideoFocus = () => useContext(VideoFocusContext)