import { useState } from 'react'
import './App.css'
import Logo from './componentes/Logo.jsx'
import ejemploImg from './assets/LogoAreglado.png';
import TextImageSection from './componentes/TextImageSection.jsx';



function App() {
  return (
    <>
      <header>
        <Logo />
        <h1>Mr.Burger</h1>
      </header>
      <main>
        <div className='main-content'>
          <TextImageSection
            title="Hamburguesa  MRBURGER"
            text="Este es un ejemplo de sección con el texto a la izquierda y una imagen a la derecha."
            image={ejemploImg}
            color="#ff5151"
          />
          <TextImageSection
            title="Hamburguesa  MRBURGER"
            text="Este es un ejemplo de sección con el texto a la izquierda y una imagen a la derecha."
            image={ejemploImg}
            reverse = {true}
            color="#00922c"
          />
          <TextImageSection
            title="Hamburguesa  MRBURGER"
            text="Este es un ejemplo de sección con el texto a la izquierda y una imagen a la derecha."
            image={ejemploImg}
            color="#8500be"
          />
        </div>
      </main>
    </>
  )
}

export default App
