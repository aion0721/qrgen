import React, {useState} from 'react';
import { useQRCode } from 'react-hook-qrcode'

const Qrcode = () => {

    const [qrUrl, setQrUrl] = useState('');

    const [inputRef] = useQRCode({
    text: qrUrl ? qrUrl : 'https://www.google.co.jp' ,
    options: {
        level: 'M',
        margin: 7,
        scale: 1,
        width: 200,
        colo: {
            dark: '#3FB811',
            light: '#DDDDDD',
        },
    },
    })
    function changeQr(){
        setQrUrl('https://www.yahoo.co.jp')
    }
    return (
        <div>
            <input type="text" placeholder='https://www.google.co.jp' value={qrUrl} onChange={event=>setQrUrl(event.target.value)}/><br />
            <canvas ref={inputRef} />
        </div>
    )
}

export default Qrcode;