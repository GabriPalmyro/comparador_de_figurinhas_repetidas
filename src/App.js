import './App.css';
import React, { useState } from 'react';

function App() {

  const [repetidas, setRepetidas] = useState('')
  const [faltantes, setFaltantes] = useState('')
  const [trocas, setTrocas] = useState([])

  function comparaFigurinhas() {
    const rep = repetidas.split(',')
    const falt = faltantes.split(',')
    var trocasTemp = []

    console.log(rep)
    console.log(falt)

    if (rep[0] !== '' && falt[0] !== '') {
      rep.forEach(function (fig, i) {
        rep[i] = rep[i].replace(/ /g, '')
      })
      falt.forEach(function (fig, i) {
        falt[i] = falt[i].replace(/ /g, '')
      })

      rep.sort()
      falt.sort()

      rep.forEach(function (figRep, i) {
        falt.forEach(function (figFalt, i) {
          if (figRep === figFalt) {
            trocasTemp.push(figRep)
          }
        })
      })
    } else {
      trocasTemp = []
    }

    console.log(trocasTemp)
    setTrocas(trocasTemp)
    // setRepetidas('')
    // setFaltantes('')

  }

  return (
    <div>
      <header className='container__header'>
        <h1>
          Compara Figurinhas
        </h1>
        <div className='infos'>
          <p>Adicione suas figurinhas nos campos abaixos da seguinte forma:</p>
          <p className='example'>'ARG11, BRA6, CAT8, COC5'</p>
          <p>Utilize apenas ',' para separar as suas figurinhas</p>
        </div>
      </header>
      <body>
        <div className='container__body'>
          <div className='left-side'><h3>Repetidas</h3>
            <textarea
              rows="2"
              cols="25"
              placeholder="ARG11, BRA6, CAT8, COC5"
              name="textValue"
              className="fig_input"
              value={repetidas}
              onChange={e => setRepetidas(e.target.value)}>
            </textarea>
            <h3>Faltantes</h3>
            <textarea
              rows="2"
              cols="25"
              placeholder="BRA6"
              name="textValue"
              className="fig_input"
              value={faltantes}
              onChange={e => setFaltantes(e.target.value)}>s
            </textarea>
          </div>
          <div className='right-side'>
            <button onClick={comparaFigurinhas}>Mostrar resultado</button>
            <div className='trocas_list'>
              {trocas.length > 0 ? trocas.join(', ') : (<div><p>Nenhuma figurinha</p></div>)}
            </div>
          </div>
        </div>
      </body>
      </div>
  );
}

export default App;
