import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import { useEffect, useMemo } from 'react';

export default function SearchField({ onLocationFound }) {
    const map = useMap();

    const provider = useMemo(() => new OpenStreetMapProvider(), []);

    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider: provider,
            style: 'bar',
            showMarker: false,
            autoClose: true,
            keepResult: true,
            searchLabel: 'Busca una dirección...',
        });

        map.addControl(searchControl);

        map.on('geosearch/showlocation', (result) => {
            // result.location.label es el nombre legible, x e y son coordenadas
            onLocationFound(result.location.label, result.location.y, result.location.x);
        });

        return () => map.removeControl(searchControl);
    }, [map, onLocationFound, provider]);

    return null;
}