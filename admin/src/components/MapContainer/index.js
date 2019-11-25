import React, { Component } from "react";
import Dimensions from "react-dimensions";
import { Container } from "./styles";
import MapGL from "react-map-gl";
import PropTypes from "prop-types";

const TOKEN =
  "pk.eyJ1IjoicGF1bG9zcGlndWVsIiwiYSI6ImNrMzJ4dm9tdzBtdnQzbnMzaTZuZzdydmIifQ.8q2izyr7Pw-kZsRc-jY7JA";

class Map extends Component {
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  };

  state = {
    viewport: {
      latitude:  -22.8213384,
      longitude:  -51.59498164,
      zoom: 12.8,
      bearing: 0,
      pitch: 0
    }
  };
  render() {
    const { containerWidth: width, containerHeight: height } = this.props;
    return (
      <MapGL
        width={width}
        height={height}
        {...this.state.viewport}
        mapStyle="mapbox://styles/paulospiguel/ck32yfo842jmh1cm7cwbkn047"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

const DimensionedMap = Dimensions()(Map);
const MapContainer = () => (
  <Container>
    <DimensionedMap />
  </Container>
);

export default MapContainer;

/** ############################################################## */

// /* eslint-disable no-await-in-loop */
// import React from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from 'react-google-maps';
// import { toast } from 'react-toastify';
// import { API_GOOGLE_KEY } from '~/config/mapKey';

// const list = [
//   {
//     zip_code: '86630000',
//     street: 'Rua Bruno Poleto',
//     number: 100,
//     district: 'Centro',
//   },
//   {
//     zip_code: '86630000',
//     street: 'Rua Atilho Podestá',
//     number: 410,
//     district: 'Centro',
//   },
//   {
//     zip_code: '86630000',
//     street: 'Avenida Wanderley Antunes de Moraes',
//     number: 1166,
//     district: 'Centro',
//   },
//   {
//     zip_code: '86630000',
//     street: 'Rua Dom Geraldo Fernandes',
//     number: 464,
//     district: 'Conj. Maximinus Perreira dos Santos',
//   },
// ];

// export default function MapContainer() {
//   const [addressList, setAddressList] = React.useState(list);
//   const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
//   const API_KEY = 'AIzaSyCITPI8--udnq2OU0VZxQXCdCi6NKGe8wk';
//   const addresses = addressList.map(
//     address => `${address.street},
//   ${address.number},
//   ${address.district},
//   ${address.zip_code}`
//   );
//   const locates = [];

//   const getApiUrl = address => {
//     return `${API_URL}?key=${API_KEY}&address=${encodeURI(address)}`;
//   };

//   const doRequest = url => {
//     const promisseCallback = (resolve, reject) => {
//       axios
//         .get(url)
//         .then(result => {
//           resolve(result.data);
//         })
//         .catch(reject);
//     };
//     return new Promise(promisseCallback);
//   };

//   addresses.map((address, i) =>
//     (async () => {
//       const apiUrl = getApiUrl(address);
//       const data = await doRequest(apiUrl);

//       if (!data || data.error_message) {
//         const message =
//           data && data.error_message ? data.error_message : 'Api Error';
//         console.tron.log(message);
//       }

//       locates.push(data.results[0]);
//     })()
//   );

//   function Map() {
//     return (
//       <GoogleMap
//         defaultZoom={14}
//         defaultCenter={{ lat: -22.8213384, lng: -51.5949816 }}
//       >
//         {locates.map((place, i) => (
//           <Marker
//             key={i}
//             position={{
//               lat: place.geometry.location.lat,
//               lng: place.geometry.location.lng,
//             }}
//           />
//         ))}
//       </GoogleMap>
//     );
//   }

//   const WrapperMap = withScriptjs(withGoogleMap(Map));

//   return (
//     <div style={{ width: '100%', height: '100%' }}>
//       <WrapperMap
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_GOOGLE_KEY}`}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `400px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     </div>
//   );
// }

/* global google */
// import React from 'react';
// import { compose, withProps, withHandlers, withState } from 'recompose';
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from 'react-google-maps';

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL:
//       'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap,
//   withState('places', 'updatePlaces', ''),
//   withHandlers(() => {
//     const refs = {
//       map: undefined,
//     };

//     return {
//       onMapMounted: () => ref => {
//         refs.map = ref;
//       },
//       fetchPlaces: ({ updatePlaces }) => {
//         let places;
//         const bounds = refs.map.getBounds();
//         const service = new google.maps.places.PlacesService(
//           refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
//         );
//         const request = {
//           bounds,
//           type: ['hotel'],
//         };
//         service.nearbySearch(request, (results, status) => {
//           if (status === google.maps.places.PlacesServiceStatus.OK) {
//             console.tron.log(results);
//             updatePlaces(results);
//           }
//         });
//       },
//     };
//   })
// )(props => {
//   return (
//     <GoogleMap
//       onTilesLoaded={props.fetchPlaces}
//       ref={props.onMapMounted}
//       onBoundsChanged={props.fetchPlaces}
//       defaultZoom={8}
//       defaultCenter={{ lat: 51.50853, lng: -0.076132 }}
//     >
//       {props.places &&
//         props.places.map((place, i) => (
//           <Marker
//             key={i}
//             position={{
//               lat: place.geometry.location.lat(),
//               lng: place.geometry.location.lng(),
//             }}
//           />
//         ))}
//     </GoogleMap>
//   );
// });

// export default class MyFancyComponent extends React.PureComponent {
//   render() {
//     return <MyMapComponent />;
//   }
// }
