import React from "react";
import Header from './components/local/header/index';
// Pode importar o footer aqui
import Carousel from '../src/components/local/carousel';
import MiniBanners from '../src/components/local/miniBanners';
import CardsScrool from './components/global/cardsScrool';
// Este componente App é onde vamos importar as páginas e criar nossas rotas

function App() {
    return (
        <>
            
            <Header/>
            <Carousel/>
            <MiniBanners/>
            <CardsScrool/>

            {/*...*/}
        </>
    )
}

export default App;