import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import icon from '../assets/marker.svg';
import iconTransparent from '../assets/marker-transparent.svg';

const containerStyle = {
   width: 'auto',
   height: '100%',
};

const agencyCoords = { lat: 43.486793455921074, lng: -1.4642097082299514 };
const littleBaionaCoords = { lat: 43.4825, lng: -1.466 };
const centerCoords = { lat: 43.4885, lng: -1.468 };

const zoom = () => {
   if (window.innerWidth <= 992) {
      return 14.3;
   } else {
      return 15;
   }
};

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

               <MarkerF
                  label={{
                     text: 'LITTLE BAYONNE',
                     fontSize: '14px',
                     fontWeight: '500',
                  }}
                  position={littleBaionaCoords}
                  icon={iconTransparent}
               />
            </GoogleMap>
         </LoadScript>
      </div>
   );
};

export default Map;
