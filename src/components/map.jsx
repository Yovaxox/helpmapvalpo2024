import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import ReactDOMServer from 'react-dom/server'

const Map = ({ helpAreas }) => {
  useEffect(() => {
    // Map configuration
    const map = L.map('map').setView(
      [-33.02948877071879, -71.49634736680606],
      13
    )

    // Base map layout
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors | Made by @Yovaxox',
    }).addTo(map)

    // Define un icono personalizado
    const customIcon = new L.Icon({
      iconUrl: '../../marker-icon.png',
      iconSize: [32, 48], // Tamaño del ícono
      iconAnchor: [16, 32], // Punto de anclaje del ícono (la parte del ícono que se alinea con la ubicación del marcador)
      popupAnchor: [0, -32], // Punto de anclaje del popup (la parte del popup que se alinea con la ubicación del marcador)
      shadowUrl: '../../marker-shadow.png',
    })

    // Itera sobre los lugares y agrega marcadores con el ícono personalizado
    helpAreas.forEach((place) => {
      L.marker(place.location, { icon: customIcon }) // Usa el ícono personalizado
        .addTo(map)
        .bindPopup(ReactDOMServer.renderToString(place.html), { minWidth: 300 })
    })

    // Clear map when component dismounts
    return () => {
      map.remove()
    }
  }, [helpAreas])

  return <div id='map' style={{ height: '100vh', width: '100vw' }}></div>
}

export default Map
