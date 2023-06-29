import React, { useState, useRef, useEffect }  from 'react';
import { fetchListings, getListings } from "../../listings";
import { useDispatch, useSelector } from "react-redux";
import testPhoto from '../../../../src/assets/l2p1.png';
import white from '../../../../src/assets/white.png'
import './Map.css'


const Map = () => {
    const [map, setMap] = useState();
    const mapRef = useRef();
    const markers = useRef({});
    const [showMap, setShowMap] = useState(false);

    const listings = useSelector(getListings)

    
  useEffect(() => {

    setMap(
      new window.google.maps.Map(
        //have to key into the state actually with refs
        mapRef.current, {
          center: {lat: 37.7749, lng: -122.4149},
          zoom: 5
        }
      )
    )
  }, [])

//   let markerImage = white


  useEffect(() => {
    listings.forEach((listing) => {
// debugger
        const markerIcon = {
            url: white, // Replace with the URL of your custom marker icon image
            scaledSize: new window.google.maps.Size(32, 32), // Adjust the size as needed
            labelOrigin: new window.google.maps.Point(15, 16), // Adjust the label position within the marker
        };

        markers.current[listing.id] = new window.google.maps.Marker(
            {
                position: {lat: Number(listing.latitude), lng: Number(listing.longitude)},
                map: map,
                title: `${listing.title}`,
                label: {
                    text: `$${listing.price}`,
                    fontWeight: 'bold',
                },
                icon: markerIcon
            }
        )

        markers.current[listing.id].addListener("click", () => {
            const infoWindow = new window.google.maps.InfoWindow();
            const content = document.createElement("div");
            content.setAttribute("id", "infowindow-listing-card")
    
            const photoElement = document.createElement("img")
            photoElement.src = testPhoto
            photoElement.setAttribute("id","infowindow-listing-profile-photo")
            content.appendChild(photoElement)
    
            const cityCountryElement = document.createElement("div")
            cityCountryElement.textContent = `${listing.city}, ${listing.country}`
            cityCountryElement.setAttribute("id", "infowindow-listing-city-country")
            content.appendChild(cityCountryElement)

            const priceElement = document.createElement("div")
            priceElement.textContent = `$${listing.price} night`
            priceElement.setAttribute("id", "infowindow-listing-price")
            content.appendChild(priceElement)
    
            infoWindow.setContent(content)
            infoWindow.open(map, markers.current[listing.id])

        })


    })
  }, [listings, map])


    return (
        <>
            <div ref={mapRef} id='map'></div>
        </>
    )

}

export default Map;