

export const TitleText = ({ text } : { text: string }) => {
  return (
    <div className="flex">
      {
        text.split('').map((letter, index) => (
          <h1 key={index} className="text-9xl font-bold text-center z-50 cursor-default hover:text-white transition-color duration-300">{letter}</h1>
        ))
      }
    </div>
  )
}