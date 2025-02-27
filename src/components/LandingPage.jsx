import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../styles/LandingPage.css";

const customIcon = new L.Icon({
  iconUrl: "/assets/marker-icon.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const locations = [
  { id: 1, name: "Hyderabad", lat: 17.43406013111157, lng: 78.37648988421165 },
  { id: 2, name: "Bengaluru", lat: 12.9716, lng: 77.5946 },
  { id: 3, name: "Pune", lat: 18.589927465839004, lng: 73.74800615169852 },
  { id: 4, name: "Loni", lat: 19.577587227732845, lng: 74.46075046891002 },
  { id: 5, name: "Austin, US", lat: 30.2849, lng: -97.7428 },
];

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.flyTo(center, zoom, { animate: true, duration: 2.5 }); 
  return null;
};

const LandingPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [clickCounts, setClickCounts] = useState({});
  const navigate = useNavigate();

  const handleLocationClick = (location) => {
    setSelectedLocation({ lat: location.lat, lng: location.lng });

    setClickCounts((prev) => {
      const newCount = (prev[location.id] || 0) + 1;
      if (newCount === 2) {
        navigate(`/office/${location.id}`); 
      }
      return { ...prev, [location.id]: newCount };
    });
  };

  return (
    <div className="landing-container">
      <h1>Office Locations</h1>
      <div className="content-wrapper">
        <div className="links-container">
          {locations.map((office) => (
            <div key={office.id} className="office-section">
              <h2>{office.name} Office:</h2>
              <button
                className="location-box"
                onClick={() => handleLocationClick(office)}
              >
                {office.name}
              </button>
            </div>
          ))}
        </div>
        <div className="map-container">
          <MapContainer
            center={[17.4483, 78.3915]} 
            zoom={5}
            scrollWheelZoom={true}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
            {selectedLocation && <ChangeView center={[selectedLocation.lat, selectedLocation.lng]} zoom={12} />}
            {locations.map((office) => (
              <Marker
                key={office.id}
                position={[office.lat, office.lng]}
                icon={customIcon}
              >
                <Popup>
                  <Link
                    to="#"
                    className="popup-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLocationClick(office);
                    }}
                  >
                    {office.name}
                  </Link>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
