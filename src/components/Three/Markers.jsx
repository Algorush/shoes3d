import { useEffect, useState, useRef, forwardRef } from 'react';
import { Billboard, Plane } from '@react-three/drei';
import { useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';

import { useAppProvider } from '../../contexts/App';
import { useConfigurator } from './context/context';
import React from 'react';
import { isMobile } from 'orientation-check';

const Markers = forwardRef((props, ref) => {

    const camPosParent = ref.current?.camPositions.current || null;
    const markerVisibility = props.visibility || false;

    const { setClickedMesh } = useConfigurator();
    const { activeMarker, setActiveMarker } = useAppProvider();
    const { scene } = useThree();

    const markers = ref.current?.markers.current || null;

    const [markerPositions, setMarkerPositions] = useState({});
    const [spriteMarkers, setSpriteMarkers] = useState({});
    const colorMap = useLoader(TextureLoader, './assets/marker.png');

    const whiteColor = new THREE.Color('#F5F2EF');
    const blackColor = new THREE.Color('#1F1D1B');

    const onHover = (e) => {
        document.body.style.cursor = 'pointer'
    }

    const onHoverOut = (e) => {
        document.body.style.cursor = 'default'
    }

    useEffect(() => {
        if (markers) {
            let newMarkers = {};
            markers.children.forEach((marker) => {
                marker.visible = false;
                newMarkers[marker.name] = marker.position.clone();
                scene.remove(marker);
            });
            setSpriteMarkers(newMarkers)
        }
    }, [markers]);
    

    // Marker Component
    const Marker = ({ position, name }) => {
        return (
            <Billboard
                position={position}
                onPointerOver={e => { onHover() }}
                onPointerOut={e => { onHoverOut() }}
                onClick={(e) => handleMarkerClick(e, name)}
                scale={[3, 3, 3]}
                visible={markerVisibility}
            >
                <Plane args={[1, 1]}>
                    <meshBasicMaterial
                        attach="material"
                        map={colorMap}
                        transparent
                        depthWrite={false}
                        depthTest={false}
                        color={activeMarker.name === name.split('_').at(-1) ? blackColor : whiteColor}
                    />
                </Plane>
            </Billboard>
        );
    };

    const handleMarkerClick = (e, markerName) => {    
        const mesh = e.object;
        const id = markerName.split('_').at(-1);
        const posArray = markerPositions[id] ? markerPositions[id].toArray() : [];
        let fov = isMobile?30:20
        if (id == "logo") {
            fov = isMobile?55:30

            /* Adobe analytics */
            window._satellite.track('univ_int', {
                'event': 'cta_click',
                'event_category': 'hotspot',
                'event_label': 'v-logo',
            });
            console.log("marker track activated", "v-logo");
        } else {
             /* Adobe analytics */
             window._satellite.track('univ_int', {
                'event': 'cta_click',
                'event_category': 'hotspot',
                'event_label': 'shoulder-strap',
            });
            console.log("marker track activated", "shoulder-strap");
        }
        if (id == "solo") {
            fov = isMobile?30:15
        }
        mesh.name=id
        if (posArray.length > 0) {
            setClickedMesh({ mesh: mesh, pos: posArray, fov: fov });
            setActiveMarker({ name: id, pos: posArray, mesh: mesh });
            onHoverOut()
        }
    };

    useEffect(() => {
        if (camPosParent) {
            let newPositions = {}
            camPosParent.children.forEach(child => {
                child.visible = false
                let markerName = child.name.split('_').at(-1)
                if (markerName == "1") { markerName = 'heel' }
                newPositions[markerName] = child.position
            })
            setMarkerPositions(newPositions)
        }
    }, [
        camPosParent
    ])

    if (markerVisibility) {
        return (
            <>
                {Object.entries(spriteMarkers).map(([name, position]) => (
                    <Marker key={name} position={position} name={name} />
                ))}
            </>
        );
    }
    return null
}
)


export default React.memo(Markers)