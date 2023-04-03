import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

const LoadingContainer = () => <div style={{}}>Loading Maps...</div>;

const gMapConfigs = {
	// initialCenter: { lng: 7.9465, lat: -1.0232 },
	containerStyle: { width: '100%', height: '100%' },
	centerAroundCurrentLocation: true,
	style: {
		width: '100%',
		height: '100%',
	},

	zoom: 14,
};
const CustomMap = (props: any) => {
	return (
		<div
			style={{
				position: 'absolute',
				height: '100%',
				width: '100%',
				zIndex: 0,
				left: '0',
				top: '0',
			}}>
			<Map
				{...{
					google: props.google,
					...gMapConfigs,
				}}>
				<InfoWindow
					visible={true}
					google={props.google}
					marker={<Marker></Marker>}
					map={{}}
				/>
			</Map>
		</div>
	);
};

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCmck0WEpTtDeEuFHNDnh451YfG8NBU6Bk',
	LoadingContainer,
})(CustomMap);
