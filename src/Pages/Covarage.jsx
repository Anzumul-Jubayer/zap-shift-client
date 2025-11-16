import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { FiSearch } from "react-icons/fi";
const Covarage = () => {
  const position = [23.685, 90.3563];
  const warehouselocation = useLoaderData();
  const mapRef=useRef(null)
  const handleSearch = (e) => {
      e.preventDefault()
      const search=e.target.search.value
      const district=warehouselocation.find(city=>city.district.toLowerCase().includes(search.toLowerCase()))
      if(district){
       const coord=[district.latitude, district.longitude] 
       mapRef.current.flyTo(coord,14)
      }
  };
  return (
    <div className="my-20">
      <h1 className="font-bold text-secondary text-3xl">
        We are available in 64 districts
      </h1>

      <div className="w-full max-w-3xl my-8 mx-auto flex bg-[#f1f4f8] rounded-full overflow-hidden shadow-md">
        {/* Input Section */}
        <form onSubmit={handleSearch} className="flex w-full">
          <div className="flex items-center flex-1 px-4">
            <FiSearch className="text-gray-600 text-xl mr-2" />
            <input
              type="text"
              placeholder="Search here"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 py-3"
              name='search'
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#d2f26d] hover:bg-[#c4e15a] px-6 sm:px-8 py-3 font-semibold text-black rounded-full transition-all duration-200"
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-full h-[800px] border my-10">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {warehouselocation.map((location, index) => (
            <Marker
              key={index}
              position={[location.latitude, location.longitude]}
            >
              <Popup>
                <strong>
                  {location.district} <br />
                  Service Area: {location.covered_area.join(", ")}
                </strong>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Covarage;
