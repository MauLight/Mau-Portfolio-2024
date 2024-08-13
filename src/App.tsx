import { boxWidth } from './layouts/layouts'

const App = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="bg-gray-100 flex">
        <div className={`${boxWidth} lg:w-1/2 h-[50vh] py-10 px-8 lg:py:15 lg:px-12`}>
          <div className="xl:max-w-2xl xl:ml-auto h-full">
            <div className="flex flex-col gap-y-4 h-full justify-center">
              <h1
                className="w-full text-4xl xl:text-6xl font-semibold text-gray-800 leading-tight text-balance text-start"
              >
            If you can imagine it,
                <br className="inline" />
                <span className="text-indigo-500">You can make it real.</span>
              </h1>
              <p className="text-gray-600 sm:text-2xl text-balance text-start">
            My goal is to bring your ideas and ambitions into concrete projects that solve problems in a creative and stilized way.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2"></div>
      </div>
    </div>
  )
}

export default App
