/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useStore } from '../hooks/useStore'
import { useBox } from '@react-three/cannon'
import * as textures from '../images/textures'
import { useState } from 'react'

export const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false)
  const removeCube = useStore(state => state.removeCube)
  const addCube = useStore(state => state.addCube)
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))

  const activeTexture = textures[texture + 'Texture']

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation()
        setIsHovered(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setIsHovered(false)
      }}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation()
        if (e.altKey) {
          console.log(`Quitando bloque con id: ${id}`)
          removeCube(id)
        } else if (e.shiftKey) {
          console.log(`Añadiendo bloque encima del cubo con id: ${id}`)
          const [x, y, z] = position
          addCube(x, y + 1, z) // Añadir bloque encima
        } else {
          console.log('La tecla Alt o Shift no está presionada.')
        }
      }}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial
        color={isHovered ? 'grey' : 'white'}
        transparent
        map={activeTexture}
        attach='material'
      />
    </mesh>
  )
}
