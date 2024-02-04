import React from 'react'
import Map from './components/map.jsx'
import data from './assets/data.json'

const generateHTML = (title, location, address, firstAid = [], others = []) => {
  return (
    <div>
      <h1>{title}</h1>
      <p><strong>Lugar: </strong>{location}</p>
      <p><strong>Dirección: </strong>{address}</p>
      {firstAid.length > 0 && <h2>Primeros auxilios</h2>}
      <ul>
        {firstAid.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      {others.length > 0 && <h2>Otros</h2>}
      <ul>
        {others.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

const App = () => {
  const mapLocation = {
    name: 'Región de Valparaíso, Chile',
    location: [40.7128, -74.006],
  }

  const helpAreas = data.map((area) => {
    return {
      html: generateHTML(area.title, area.location, area.address, area.firstAid, area.others),
      location: area.coordinates,
    }
  })

  return (
    <div>
      <Map helpAreas={[mapLocation, ...helpAreas]} />
    </div>
  )
}

export default App
