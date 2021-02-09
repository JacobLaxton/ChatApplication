import {useState} from 'react'
import {FiSend} from 'react-icons/fi'

function TextInput(props) {
    console.log(props)
    const [text, setText] = useState('')

    function sendMessage(){
        if (text==='') return
        props.send(text)
        setText('')
    }

    function keyPressed(e) {
        if(e.key === 'Enter') {
            sendMessage()
        }
    }

    return <footer className="text-input">
        <input className="input"
            placeholder="Message..."
            value={text}
            onChange={e=> setText(e.target.value)}
            onKeyPress={keyPressed}
        />
        <button className="send-button" onClick={sendMessage} disabled={!text} >	
            <FiSend title="send" style={{minWidth:'0.7rem'}} />
        </button>
    </footer>

}

export default TextInput