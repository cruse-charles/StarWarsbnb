import React, { useState, useRef, useEffect }  from 'react';
import { fetchListings, getListings } from "../../listings";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ListingIndexItem from '../Listings/ListingIndexItem';
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
    const [currentInfoWindow, setCurrentInfoWindow] = useState(null);
    const listings = useSelector(getListings);
    const openInfoWindows = [];

    //Redirect to listing page
    const routeChange = (listing) => {
        let path = `/listings/${listing.id}`;
        history.push(path);
    }

    
  useEffect(() => {

    //Create map
    setMap(
      new window.google.maps.Map(
        //have to key into the state with refs
        mapRef.current, {
          center: {lat: 33, lng: -100},
          zoom: 5
        }
      )
    );
  }, []);



  useEffect(() => {

    if (map) {

        //Close any open InfoWindow when clicking on map
        const clickListener = map.addListener("click", (event) => {
            if (currentInfoWindow && !currentInfoWindow.getContent().contains(event.target)) {
              currentInfoWindow.close();
              setCurrentInfoWindow(null);
            }
        })
    
        //Create pin data for each listing 
        listings.forEach((listing) => {
            const markerIcon = {
                url: white,
                scaledSize: new window.google.maps.Size(36, 32),
                labelOrigin: new window.google.maps.Point(17, 15),
            };
    
            //Create marking for each listing
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
    
            //Add event listener for functionality
            markers.current[listing.id].addListener("click", () => {
                
                //close current infowindow
                if(currentInfoWindow) {
                    currentInfoWindow.close();
                    setCurrentInfoWindow(null);
                }

                //Create div that will hold information for infoWindow
                const infoWindow = new window.google.maps.InfoWindow();
                const content = document.createElement("div");
                content.setAttribute("id", "infowindow-listing-card")

                
                // Render ListingIndexItem component inside the info window
                const root = createRoot(content);
                root.render(<ListingIndexItem listing={listing} routeChange={routeChange} context='map'/>);

                //Attach all information to infoWindow
                infoWindow.setContent(content)
                infoWindow.open(map, markers.current[listing.id])

                //Push infowindow into array to read and close later
                openInfoWindows.push(infoWindow)
                setCurrentInfoWindow(infoWindow)
            })
        })
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








