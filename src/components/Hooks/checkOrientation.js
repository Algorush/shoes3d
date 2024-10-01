import { isMobile as libCheckMobile } from 'react-device-detect';

function getOrientation() {
    // Modern way to get orientation
    if (window.screen.orientation) {
        return window.screen.orientation.type; // e.g., "portrait-primary" or "landscape-primary"
    }

    // iOS fallback for older versions
    if (typeof window.orientation !== 'undefined') {
        return window.orientation === 0 || window.orientation === 180
            ? "portrait-primary"
            : "landscape-primary";
    }

    // Fallback using matchMedia
    if (window.matchMedia("(orientation: portrait)").matches) {
        return "portrait-primary";
    } else if (window.matchMedia("(orientation: landscape)").matches) {
        return "landscape-primary";
    }

    return "unknown";
}

function handleOrientationChange() {
    const currentOrientation = getOrientation();
    console.log("Current Orientation:", currentOrientation);
    // Your logic based on orientation here
}

// Listen to orientation changes
window.addEventListener("orientationchange", handleOrientationChange);

// You can also call it directly
handleOrientationChange();

export function isLandscapeFunction() {
    let orientation = getOrientation()
    if (orientation == 'landscape-primary') { return true }
    return false
}

function checkMobile() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;

    // Consider as mobile if the device is physically mobile (via react-device-detect)
    // AND screen width is less than or equal to 1080px
    if ((libCheckMobile || screenWidth <= 1080) && !isLandscapeFunction()) {
        return true;  // Mobile view
    }
    return false;  // Desktop view
}

export const isLandScape=isLandscapeFunction()
export const isMobile = checkMobile()
