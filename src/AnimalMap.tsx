import { useState, useEffect } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';

// 動物園の名前、緯度・経度のデータ
const zooLocations: { [key: string]: { name: string; lat: number; lng: number }[] } = {
    panda: [{ name: '上野動物園', lat: 35.717, lng: 139.771 }],
    rabbit: [
        { name: '多摩動物公園', lat: 35.624, lng: 139.349 },
        { name: '羽村市動物公園', lat: 35.765, lng: 139.311 },
        { name: '江戸川区自然動物園', lat: 35.682, lng: 139.862 },
        { name: '上野動物園', lat: 35.717, lng: 139.771 },
        { name: '板橋区立こども動物園', lat: 35.751, lng: 139.707 }
    ],
    serval: [
        { name: '多摩動物公園', lat: 35.624, lng: 139.349 },
        { name: '羽村市動物公園', lat: 35.765, lng: 139.311 }
    ],
    horse: [
        { name: '上野動物園', lat: 35.717, lng: 139.771 },
        { name: '多摩動物公園', lat: 35.624, lng: 139.349 }
    ],
    sheep: [
        { name: '羽村市動物公園', lat: 35.765, lng: 139.311 },
        { name: '江戸川区自然動物園', lat: 35.682, lng: 139.862 },
        { name: '井の頭自然文化園', lat: 35.701, lng:  139.572 },
        { name: '井の頭自然文化園', lat: 35.793, lng:  139.807},
    ],
    alpaca: [
        { name: '上野動物園', lat: 35.717, lng: 139.771 },
    ],
    lion: [
        { name: '多摩動物公園', lat: 35.624, lng: 139.349 }
    ],
    koala: [
        { name: '多摩動物公園', lat: 35.624, lng: 139.349 }
    ],
    bear: [
        { name: '多摩動物公園', lat: 35.624, lng: 139.349 },
        { name: '上野動物園', lat: 35.717, lng: 139.771 },
    ],
    gorilla: [
        { name: '上野動物園', lat: 35.717, lng: 139.771 },
    ],
    monkey: [
        { name: '上野動物園', lat: 35.717, lng: 139.771 },
        { name: '多摩動物公園', lat: 35.624, lng: 139.349 },
        { name: '羽村市動物公園', lat: 35.765, lng: 139.311 },
        { name: '井の頭自然文化園', lat: 35.701, lng:  139.572 },
        { name: '大島公園', lat: 34.765, lng:  139.433},
    ],
};

//動物園の名前リスト
const zooData: { [key: string]: string[] } = {
    panda: ['上野動物園'],
    rabbit: ['多摩動物公園', '羽村市動物公園', '江戸川区自然動物園', '上野動物園', '板橋区立こども動物園'],
    serval: ['多摩動物公園', '羽村市動物園'],
    horse: ['多摩動物公園','上野動物公園'],
    sheep: ['羽村市動物園', '江戸川区自然動物園','井の頭自然文化園','足立区生物園'],
    alpaca: ['上野動物園'],
    lion: ['多摩動物公園'],
    koala: ['多摩動物公園'],
    bear: ['多摩動物公園','上野動物園'],
    gorilla: ['上野動物園'],
    monkey: ['上野動物園','多摩動物公園','大島公園','羽村市動物公園','井の頭自然文化園'],
};

const AnimalMap = () => {
    const API = import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    if (!API) {
        throw new Error("Google Maps API Key is missing");
      }
    const [zooLocate, setZooLocate] = useState<{ name: string; lat: number; lng: number }[]>([]);
    const { animal } = useParams<{ animal: string }>();
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: API,
    });

    const zooName = animal && zooData[animal] ? zooData[animal] : [];

    // マップの中心位置
    const center = { lat: 35.681, lng: 139.580 };

    //一度空にする(不具合防止)
    useEffect(() => {
        setZooLocate([]); 
        setTimeout(() => {
            if (animal && zooLocations[animal]) {
                setZooLocate(zooLocations[animal]);
            }
        }); 
    }, [animal]);

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div style={{ display: 'flex', width: '100%', height: '450px' }}>
            {/* リストの表示 */}
            <ul className="list1" style={{ width: '20%' }}>
            <h3>{animal}</h3>
                {zooName.map((zoo, index) => ( 
                    <li key={index}>{zoo}</li>
                ))}
            </ul>
            {/* マップの表示 */}
            <GoogleMap 
                mapContainerStyle={{ width: '80%', height: '430px',margin:'15px' }}
                zoom={10}
                center={center}
                
            >
                {zooLocate.map((zoo, index) => (
                    <Marker
                        key={index}
                        position={{ lat: zoo.lat, lng: zoo.lng }}
                        label={zoo.name}
                    />
                ))}
            </GoogleMap>
        </div>
    );
};

export default AnimalMap;
