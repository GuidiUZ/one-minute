import { useEffect, useState } from 'react'
import questions from "./questions.json"

export default function App() {

  const [gotQuestion, setGotQuestion] = useState(false)
  const [question, setQuestion] = useState("")
  const [stopwatch, setStopWatch] = useState(false)
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0)
  const [checkbox, setCheckBox] = useState(false)
  const [shouldRestart, setShouldRestart] = useState(false);

  const maxTime = 60

  const formattedTime = (timeReceveid) => {
    return `${Math.floor(timeReceveid / 60).toString().padStart(1, "0")}:${(timeReceveid % 60).toString().padStart(2, "0")}`;
  }
  

  useEffect(() => {
    let interval = null
    let timeout = null
   if (stopwatch && !isPaused && time < maxTime) {
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 1000)
   } else if (time >= maxTime) {
    clearInterval(interval)
    timeout = setTimeout(() => {
      setStopWatch(false)
    handleReset()
    }, 3000)
    
   }
   return () => {
    if (interval) clearInterval(interval)
    if (timeout) clearTimeout(timeout)
   }
  }, [stopwatch, time, isPaused])

  useEffect(() => {
    if (checkbox && shouldRestart && time === 0 && !stopwatch) {
      setTimeout(() => {
        setStopWatch(true);
        setShouldRestart(false)
      }, 0)
    }
  }, [time, stopwatch, checkbox, shouldRestart]);

  const handleSelectQuestion = () => {
    let numberQuestion = (Math.floor(Math.random() * (349 - 0)))
    let questionSelected = questions[numberQuestion].question
    setQuestion(questionSelected.toString())
    setGotQuestion(true)
    handleReset()
    setShouldRestart(true)
  }

  const handleStopWatch = () => {
    if(!stopwatch) {
      setStopWatch(true)
      setIsPaused(false)
    } else {
      setIsPaused(!isPaused)
    }
    
  }

  const handleReset = () => {
    setStopWatch(false)
    setIsPaused(false);
    setTime(0)
  }

  const handleCheckBox = () => {
    setCheckBox(!checkbox)
  }
    
  return (
    <div className='flex flex-col w-full min-h-dvh h-full m-auto justify-center items-center'>
      <h1 className='text-4xl font-semibold flex justify-center bg-gradient-to-t from-slate-50 to-slate-500 bg-clip-text text-transparent mb-22'>Take one minute</h1>
        <div className='flex flex-col md:flex-row w-full items-center gap-10 justify-center'>
          <div className='flex flex-col justify-center items-center w-full sm:w-[85%] md:w-[100%]'>
              <h1 className='text-white text-center text-2xl font-semibold min-h-[150px] md:min-h-[180px] lg:min-h-[150px] mx-10 sm:text-3xl'>{gotQuestion ? question : "Your question will appear here 😁"}</h1>
              <button onClick={() => handleSelectQuestion()} className='w-[60%] lg:w-[40%] text-white cursor-pointer border-2 rounded-2xl p-1'>Get a random question</button>
              <p className='text-gray-500 text-sm mt-1 animate-pulse'>*More than 300 questions</p>
          </div>
          <div className='flex flex-col justify-center items-center sm:mt-2 md:mx-10 w-1/2'>
              <h1 className='text-white text-7xl sm:text-8xl min-h-[100px] md:min-h-[180px] lg:min-h-[150px] md:text-8xl'>{stopwatch ? formattedTime(time) : formattedTime(0)}</h1>
              <div className='flex flex-row gap-2'>
                <button onClick={() => handleStopWatch()} className='text-white cursor-pointer border-2 rounded-2xl p-1'>{stopwatch ? (isPaused ? "Resume" : "Pause") : "Start Stopwatch"}</button>
                <button onClick={() => handleReset()} className='text-white cursor-pointer border-2 rounded-2xl p-1'>Reset</button>
              </div>
              <div className='flex flex-row mt-2'>
                <input onClick={() => handleCheckBox()} type="checkbox" name='auto-start' value="Auto Start"/> 
                <span className='text-white ml-2'>Auto-Start</span>
              </div>
          </div>
        </div>
      </div>
      
  )
}
