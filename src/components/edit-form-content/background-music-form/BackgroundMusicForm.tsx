import React, { ChangeEvent, useEffect, useState } from 'react'
import MusicDisplay from '../../music-display/MusicDisplay'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../services/redux/Store'
import { backgroundMusicData } from './BackgroundMusic.data'
import Button from '../../button/Button'
import { SET_BACKGROUND_MUSIC } from '../../../services/redux/template-slice/TemplateSlice'

interface MusicRowProps {
  name: string
  path: string
  isPlayed: boolean
  handleSelectMusic: (title: string) => void
  handlePlayMusic: (path: string) => void
}

const RenderMusicRow = (props: MusicRowProps) => {
  const { name, path, isPlayed, handleSelectMusic, handlePlayMusic } = props
  return (
    <div className='border-b-2 border-custom-pink'>
      <div className='flex items-center justify-center w-full p-5 gap-5'>
        <p className={`${isPlayed ? 'text-custom-pink' : 'text-custom-gray'} w-[50%] font-semibold`}>{name}</p>
        <div className='w-[50%] flex items-center justify-center gap-5'>
          <Button onClick={() => { handlePlayMusic(path) }} className='w-full text-custom-white gap-2'>
            <img src={isPlayed ? "assets/images/stop.png" : "assets/images/play.png"} alt="button" className='w-5' />
            {isPlayed ? 'Stop' : 'Play'}
          </Button>
          <Button onClick={() => { handleSelectMusic(name) }} className='w-full text-custom-white gap-2'>
            <img src="assets/images/select.png" alt="button" className='w-5' />
            Select
          </Button>
        </div>
      </div>
    </div>
  )
}

const BackgroundMusicForm = () => {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null)
  const [currentlyPlayingPath, setCurrentlyPlayingPath] = useState<string | null>(null)
  const { backgroundMusic } = useSelector((state: RootState) => state.template)
  const data = backgroundMusicData;
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      if (currentAudio) {
        currentAudio.pause()
        setCurrentAudio(null)
      }
    }
  }, [currentAudio]) 

  const handlePlayMusic = (path: string) => {
    if (currentAudio && currentlyPlayingPath === path) {
      currentAudio.pause()
      setCurrentAudio(null)
      setCurrentlyPlayingPath(null)
      return
    }
    const audio = new Audio(path)
    audio.play()
    setCurrentAudio(audio)
    setCurrentlyPlayingPath(path)
    audio.onended = () => {
      setCurrentAudio(null)
      setCurrentlyPlayingPath(null)
    }
  }

  const handleSelectMusic = (title: string) => {
    dispatch(SET_BACKGROUND_MUSIC(title))
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      dispatch(SET_BACKGROUND_MUSIC(file.name))
    }
  }

  return (
    <div className='flex flex-col gap-7 overflow-y-auto scrollbar-hidden'>
      <div className='flex flex-col gap-2'>
        <h1 className='font-semibold text-lg text-custom-gray'>The song chosen for the invitation:</h1>
        <MusicDisplay active={backgroundMusic === '' ? false : true} text={backgroundMusic} />
      </div>
      <div className='flex flex-col gap-3'>
        <div>
          <h1 className='font-semibold text-lg text-custom-gray'>Upload a song</h1>
          <p className='font-semibold text-sm text-[#a8a8a8]'>This feature is only accessible to subscribers<span className='text-custom-pink'>*</span></p>
        </div>
        <input className="block w-full border border-custom-pink rounded-lg cursor-pointer focus:outline-none p-3 gap-3" type="file" onChange={handleFileChange}/>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='font-semibold text-lg text-custom-gray'>Select Song:</h1>
        <div className='flex flex-col'>
          {data && data.map((item, index) => (
            <div key={index}>
              <RenderMusicRow
                name={item.name}
                path={item.path}
                isPlayed={currentlyPlayingPath === item.path}
                handleSelectMusic={handleSelectMusic}
                handlePlayMusic={handlePlayMusic}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BackgroundMusicForm
