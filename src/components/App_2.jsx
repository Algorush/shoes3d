// @ts-nocheck
import { isMobileOnly } from "react-device-detect";
import { useAppProvider } from "../contexts/App";
import { isMobile } from "./Hooks/checkOrientation";
import { Page_5 } from "./Pages/Page5"
import { Page_5_mobile } from "./Pages/Page5_mobile"
import { Page_6 } from "./Pages/Page6"
import { Page_6_mobile } from "./Pages/Page6_mobile"
import { Page_7 } from "./Pages/Page7"
import { Page_8 } from "./Pages/Page8"
import { Page_8_mobile } from "./Pages/Page8_mobile"
import { Page_9 } from "./Pages/Page9"
import { Footer } from './Pages/shared/footer';
import { SectionContainer } from './Pages/styles/SectionContainer.styled';


export const App_2 = () => {

    const { intro } = useAppProvider()

    const appStyles = {
        position: 'relative',
        height: "100%",
        marginTop: "-100vh",
        background: '#e9e3d8',
        color: '#000000'
    }

    if (intro) {
        return (
            <div id="App_2" style={appStyles}>    
                <SectionContainer $height='100%'>
                    {isMobileOnly&&<Page_5_mobile/>}
                    {!isMobileOnly&&<Page_5/>}
                </SectionContainer>
                <SectionContainer style={{ zIndex: 1,pointerEvents:'none' }} $height='100vh'>
                    {isMobileOnly&&<Page_6_mobile/>}
                    {!isMobileOnly&&<Page_6/>}
                </SectionContainer>
                <SectionContainer style={{zIndex: 2, background:"#e9e3d8"}} $height='125vh'>
                    <Page_7 />
                </SectionContainer>
                <SectionContainer style={{zIndex: 2,pointerEvents:'none'}} $height='125vh'>
                    {isMobile&&<Page_8_mobile/>}
                    {!isMobile&&<Page_8/>}
                </SectionContainer>
                <SectionContainer style={{zIndex: 2, background:"#F1ECEC"}} $height='100vh'>
                    <Page_9 />
                    <Footer/>
                </SectionContainer>
           
            </div>
        )
    }
}