import { useState } from 'react'
import './App.css'

function App() {
	const [text, setText] = useState('')
	return (
		<>
			<h1 className='text-center text-5xl'>
				Config editor for IQ Plugins
			</h1>
			<textarea
				value={text}
				onChange={e => setText(e.target.value)}
			></textarea>
		</>
	)
}

export default App
