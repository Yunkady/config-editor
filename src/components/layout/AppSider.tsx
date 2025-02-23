import { useState } from 'react'
import { Input } from '../ui/input'
import { Switch } from '../ui/switch'

const AppSider = () => {
	const [first, setFirst] = useState(false)
	const [second, setSecond] = useState(false)
	const [third, setThird] = useState(false)

	const makeConfig = () => {
		const config = {
			'Перключатели функций': {
				'Устанавливать автоматически префикс игроку, когда он получил права на него':
					first,
				'Устанавливать автоматически цвет ника игроку, когда он получил права на него':
					second,
				'Устанавливать автоматически цвет чата игроку, когда он получил права на него':
					third,
				// Если у вас появятся дополнительные переключатели, например для сброса, их можно добавить:
				'Сбрасывать автоматически префикс при окончании прав на него у игрока':
					false,
				'Сбрасывать автоматически цвет ника при окончании прав на него у игрока':
					false,
				'Сбрасывать автоматически цвет чата при окончании прав на него у игрока':
					false,
			},
		}

		console.log(config)
		return config
	}

	return (
		<div className='w-1/2 border-2 flex-col items-center'>
			<div className='mb-1 mt-1 space-x-2'>
				<Switch
					id='1'
					checked={first}
					onCheckedChange={() => {
						setFirst(prev => !prev)
					}}
				/>
				<label htmlFor='1'>
					Устанавливать автоматически префикс игроку, когда он получил права на
					него
				</label>
			</div>
			<div className='mb-1 mt-1 space-x-2'>
				<Switch
					id='2'
					checked={second}
					onCheckedChange={() => setSecond(prev => !prev)}
				/>
				<label htmlFor='2'>
					Устанавливать автоматически цвет ника игроку, когда он получил права
					на него
				</label>
			</div>
			<div className='mb-1 mt-1 space-x-2'>
				<Switch
					id='3'
					checked={third}
					onCheckedChange={() => setThird(prev => !prev)}
				/>
				<label htmlFor='3'>
					Устанавливать автоматически цвет чата игроку, когда он получил права
					на него
				</label>
			</div>
			<div className='grid w-full max-w-sm items-center gap-1.5'>
				<label htmlFor='email'>Email</label>
				<Input type='email' id='email' placeholder='Email' />
			</div>
			<button onClick={makeConfig}>Сгенерировать конфиг</button>
		</div>
	)
}

export default AppSider
