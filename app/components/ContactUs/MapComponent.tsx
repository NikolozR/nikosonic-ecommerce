import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const location = { lat: 42.209186350152635, lng: 42.716665575079816 };

  const containerStyle = {
    width: "100%",
    height: "500px",
  };
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API ?? ""}>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={14}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
