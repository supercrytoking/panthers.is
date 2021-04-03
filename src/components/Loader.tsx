import { useEffect, useState } from 'react'
import Typist from 'react-typist'

export default function Loader() {
    const [visible, setVisible] = useState(true)

    const timer = () => {
        setTimeout(() => {
            setVisible(false)
        }, 2000)
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setVisible(false)
    //     }, 2000)
    // }, [])

    if (!visible) return null
    return (
        <div className="absolute z-50 inset-0 bg-black bg-opacity-90 text-white flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/img/bg.jpg")' }}>
            <div className="text-center">
                <img src="/img/panthers_icon.png" className="mx-auto w-44" alt="" />
                <Typist
                    cursor={{ show: false }}
                    onTypingDone={() => {
                        timer()
                    }}
                >
                    <p className="font-mono text-4xl">Panthers...</p>
                </Typist>
            </div>
        </div>
    )
}
