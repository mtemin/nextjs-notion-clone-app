"use client"
import { useAtom } from 'jotai/react';
import ThemeControllerButtons from './theme-controller-buttons';
import { settingsModalAtom } from '../_stateStore/atoms';


export default function SettingsModal() {
  const [settingsModal, setSettingsModal] = useAtom(settingsModalAtom);
  return (
    <div id="settingsModal" className={settingsModal ? '' : 'hidden'}>
      <div className="z-[9] fixed top-0 left-0 w-full h-full bg-base-200 opacity-70"></div>
      <div className='z-10 translate-x-[-50%] flex flex-col justify-between flex-wrap absolute rounded-xl p-8 max-w-[500px] sm:w-[80vw] h-[60vh] bg-base-300 left-[50vw] top-[25vh]'>
        <button onClick={() => { setSettingsModal(false) }}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <ThemeControllerButtons />

        <div className="flex items-center tooltip " data-tip="Not working yet">
          <p className="text-base-content font-medium">Language :</p>
          <div className="flags flex items-center ml-6">

            <div className="tooltip cursor-pointer" data-tip="English">
              <img src="GB.svg" alt="en-flag" className='opacity-70 w-10 rounded' />
            </div>
            <div className="tooltip cursor-pointer  ml-6" data-tip="Turkish">
              <img src="TR.svg" alt="tr-flag" className='opacity-70 w-10 rounded' data-tip="Turkish" />
            </div>
          </div>
        </div>
        <button onClick={() => { setSettingsModal(false) }}
          className="btn btn-primary ml-auto">Save & Close</button>
      </div>
    </div >
  )
}
