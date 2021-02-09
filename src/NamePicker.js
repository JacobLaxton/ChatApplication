import {useState} from 'react'

function NamePicker(props){
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState(localStorage.getItem('username' || ''))

    function save(){
        props.saveName(username)
        setShowInput(false)
        localStorage.setItem('username', username)
    }

    if (showInput) {
        return <div className="name-picker">
            <input className="name-input" value={username}
                onChange={e=> setUsername(e.target.value)}
            />
            <button className="ok-button" onClick={save}>OK</button>
        </div>
    }

    return <div className="name-picker">
        <div className="name">{username}</div>
        <button className="edit-button" onClick={()=> setShowInput(true)}>
        </button>
    </div>
}

export default NamePicker