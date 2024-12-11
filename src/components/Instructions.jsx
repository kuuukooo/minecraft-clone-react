import '../styles/instructions.css'
import { useState, useEffect } from 'react'

export default function Instructions () {
  const [isVisible, setIsVisible] = useState(true)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 'h') {
        toggleVisibility()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className='instructions-menu'>
      <div className='instructions-close-menu'>
        <button onClick={toggleVisibility}>X</button>
      </div>
      <h1>Controles del Juego</h1>
      <ul className='instructions-list'>
        <li>
          <span className='key'>Alt</span> + <span className='key'>Click</span>: Destruir Bloques
        </li>
        <li>
          <span className='key'>Shift</span> + <span className='key'>Click</span>: Añadir Bloques Encima
        </li>
        <li>
          <span className='key'>Click</span> en el Suelo: Añadir Bloques
        </li>
        <li>
          <span className='key'>Numeros 1 al 5</span>: Cambiar bloques
        </li>
      </ul>
      <p>Presiona <span className='key'>H</span> para mostrar/ocultar este menú.</p>
    </div>
  )
}
