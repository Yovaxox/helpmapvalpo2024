import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import ReactDOMServer from 'react-dom/server';

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

    // Markers for help locations
    helpAreas.forEach((place) => {
      L.marker(place.location)
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
