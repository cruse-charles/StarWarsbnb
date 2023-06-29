import React, { useState, useRef, useEffect }  from 'react';
import { fetchListings, getListings } from "../../listings";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ListingIndexItem from '../Listings/ListingIndexItem'; // Import the ListingIndexItem component
import testPhoto from '../../../../src/assets/l2p1.png';
import white from '../../../../src/assets/white.jpg';
import black from '../../../../src/assets/black.jpg';
import './Map.css';


const Map = () => {
    const history = useHistory();
    const [map, setMap] = useState();
    const mapRef = useRef();
    const markers = useRef({});
    const [showMap, setShowMap] = useState(false);
    const [currentInfoWindow, setCurrentInfoWindow] = useState(null)
    const listings = useSelector(getListings)
    const openInfoWindows = []

    const routeChange = (listing) => {
// debugger
        let path = `/listings/${listing.id}`;
        history.push(path);
    }

    
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

    // return () => {
    //     window.google.maps.event.clearListeners(map, 'click');
    //   };
  }, [])



  useEffect(() => {

    if (map) {

        const clickListener = map.addListener("click", (event) => {
            if (currentInfoWindow && !currentInfoWindow.getContent().contains(event.target)) {
              currentInfoWindow.close();
              setCurrentInfoWindow(null);
            }
        })
    
        listings.forEach((listing) => {
            const markerIcon = {
                url: white,
                scaledSize: new window.google.maps.Size(36, 32),
                labelOrigin: new window.google.maps.Point(17, 15),
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
                
                if(currentInfoWindow) {
                    currentInfoWindow.close();
                    setCurrentInfoWindow(null);
                }

                const infoWindow = new window.google.maps.InfoWindow();
                const content = document.createElement("div");
                content.setAttribute("id", "infowindow-listing-card")
                content.addEventListener("click", () => {
                    routeChange(listing);
                });


                // new
                // Render ListingIndexItem component inside the info window
                // const root = createRoot(content);
                //     root.render(<ListingIndexItem listing={listing} routeChange={routeChange}/>);
                // new
        
                //old
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
                //old
        
                infoWindow.setContent(content)
                infoWindow.open(map, markers.current[listing.id])
                openInfoWindows.push(infoWindow)
                setCurrentInfoWindow(infoWindow)
            })
        })
    
        // return () => {
        //     window.google.maps.event.removeListener(clickListener);
        //   };
    }

  }, [listings, map, currentInfoWindow])

    return (
        <>
            <div ref={mapRef} id='map'></div>
        </>
    )

}

export default Map;





































//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------






// import React, { useState, useRef, useEffect } from 'react';
// import { fetchListings, getListings } from "../../listings";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import testPhoto from '../../../../src/assets/l2p1.png';
// import white from '../../../../src/assets/white.jpg';
// import black from '../../../../src/assets/black.jpg';
// import './Map.css';
// import ListingIndexItem from '../Listings/ListingIndexItem'; // Import the ListingIndexItem component
// import { createRoot } from 'react-dom';

// const Map = () => {
//   const history = useHistory();
//   const [map, setMap] = useState();
//   const mapRef = useRef();
//   const markers = useRef({});
//   const [showMap, setShowMap] = useState(false);
//   const [currentInfoWindow, setCurrentInfoWindow] = useState(null);
//   const listings = useSelector(getListings);
//   const openInfoWindows = [];
  

//   const routeChange = (listing) => {
//     let path = `/listings/${listing.id}`;
//     history.push(path);
//   };

//   useEffect(() => {
//     setMap(
//       new window.google.maps.Map(mapRef.current, {
//         center: { lat: 37.7749, lng: -122.4149 },
//         zoom: 5,
//       })
//     );
//   }, []);

//   useEffect(() => {
//     if (map) {
//       const clickListener = map.addListener("click", (event) => {
//         if (currentInfoWindow && !currentInfoWindow.getContent().contains(event.target)) {
//           currentInfoWindow.close();
//           setCurrentInfoWindow(null);
//         }
//       });

//       listings.forEach((listing) => {
//         const markerIcon = {
//           url: white,
//           scaledSize: new window.google.maps.Size(36, 32),
//           labelOrigin: new window.google.maps.Point(17, 15),
//         };

//         markers.current[listing.id] = new window.google.maps.Marker({
//           position: { lat: Number(listing.latitude), lng: Number(listing.longitude) },
//           map: map,
//           title: `${listing.title}`,
//           label: {
//             text: `$${listing.price}`,
//             fontWeight: 'bold',
//           },
//           icon: markerIcon,
//         });

//         markers.current[listing.id].addListener("click", () => {
//           if (currentInfoWindow) {
//             currentInfoWindow.close();
//             setCurrentInfoWindow(null);
//           }

//           const infoWindow = new window.google.maps.InfoWindow();
//           const content = document.createElement("div");
//           content.setAttribute("id", "infowindow-listing-card");

//           // Render ListingIndexItem component inside the info window
//           const root = createRoot(content);
//             root.render(<ListingIndexItem listing={listing} />);

//           infoWindow.setContent(content);
//           infoWindow.open(map, markers.current[listing.id]);
//           openInfoWindows.push(infoWindow);
//           setCurrentInfoWindow(infoWindow);

//           // Remove existing marker
//           markers.current[listing.id].setMap(null);

//           // Create a new marker with updated icon
//           const updatedMarker = new window.google.maps.Marker({
//             position: { lat: Number(listing.latitude), lng: Number(listing.longitude) },
//             map: map,
//             title: `${listing.title}`,
//             label: {
//               text: `$${listing.price}`,
//               fontWeight: 'bold',
//             },
//             icon: {
//               url: black,
//               scaledSize: new window.google.maps.Size(36, 32),
//               labelOrigin: new window.google.maps.Point(17, 15),
//             },
//           });

//           // Update the marker reference
//           markers.current[listing.id] = updatedMarker;

//           // Add click listener to the new marker
//           updatedMarker.addListener("click", () => {
//             // Your click handler logic here
//           });
//         });
//       });

//       return () => {
//         window.google.maps.event.removeListener(clickListener);
//       };
//     }
//   }, [listings, map, currentInfoWindow]);

//   return (
//     <>
//       <div ref={mapRef} id='map'></div>
//     </>
//   );
// };

// export default Map;








