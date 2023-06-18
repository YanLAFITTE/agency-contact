import {
   GoogleMap,
   InfoBox,
   LoadScript,
   MarkerF,
} from '@react-google-maps/api';
import icon from '../assets/marker.svg';

const containerStyle = {
   width: 'auto',
   height: '100%',
};

const agencyCoords = { lat: 43.486793455921074, lng: -1.4642097082299514 };
const littleBaionaCoords = { lat: 43.4833, lng: -1.47 };
const baionaCoords = { lat: 43.49335, lng: -1.4769 };
const centerCoords = { lat: 43.4885, lng: -1.468 };

const zoom = () => {
   if (window.innerWidth <= 992) {
      return 14.3;
   } else {
      return 15;
   }
};

const options = { closeBoxURL: '' };

const Map = () => {
   return (
      <div className='map'>
         <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
            <GoogleMap
               mapContainerStyle={containerStyle}
               center={centerCoords}
               zoom={zoom()}
               options={{
                  mapId: import.meta.env.VITE_GOOGLE_MAP_ID,
                  fullscreenControl: false,
                  zoomControl: false,
                  // draggable: false,
                  disableDefaultUI: true,
               }}
            >
               <MarkerF icon={icon} position={agencyCoords} />

               <InfoBox options={options} position={baionaCoords}>
                  <div className='baiona'>Bayonne</div>
               </InfoBox>

               <InfoBox options={options} position={littleBaionaCoords}>
                  <div className='little-baiona'>Little Bayonne</div>
               </InfoBox>
            </GoogleMap>
         </LoadScript>
      </div>
   );
};

export default Map;
