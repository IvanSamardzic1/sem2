import React from 'react';
import PrvaStranica from './prvaStranica';
import DrugaStranica from './DrugaStranica';
import GrafikonVertikalni from './grafikonVertikalni';
import GrafikonHorizontalni from './grafikonHorizontalni';
import GrafikonKruzni from './grafikonKruzni';
import PosjecenostTablica from './tablica';
import GrafikonLinijski from './grafikonLinijski';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AKDComponent from './fetchanje';
import MyComponent2 from './fetchanje1';






function App() {
    return (

        <Router>
          <h1> Prikaz podataka pomoću Reacta</h1>
      

          <div>
                <nav>
                    <ul>
                     
                        <li>
                            <Link to="/prva">Uvod</Link>
                        </li>
                        <li>
                            <Link to="/druga">Razrada teme</Link>
                        </li>
                        <li>
                            <Link to="/grafikonVertikalni">Vertikalni grafikon</Link>
                        </li>
                        <li>
                            <Link to="/grafikonHorizontalni">Horizontalni grafikon</Link>
                        </li>
                        <li>
                            <Link to="/grafikonKruzni">Kružni grafikon</Link>
                        </li>
                        <li>
                            <Link to="/grafikonLinijski">Linijski grafikon</Link>
                        </li>
                        <li>
                            <Link to="/tablicniPrikaz">Tablični prikaz</Link>
                        </li>
                        <li>
                            <Link to="/fetchaj">Server1 - "https://idissuer-api.akd.hr"</Link>
                        </li>
                        <li>
                            <Link to="/fetchaj1">Server2 - "https://api.idissuer.si"</Link>
                        </li>
                      

                    </ul>
                </nav>

            <Routes>
              <Route path="/" element={
                        <>
                  <div>
                          <p>Ovo je React aplikacija za predmet Seminar 2<br />
                          Student: Ivan Samardžić<br />
                          Mentor: prof. dr. sc. Hrvoje Mlinarić<br />
                          Zadatak je prikazati razne podatke pomoću tablica, grafikona i 
                          sličnih grafičkih prikaza.
                        </p>
                  </div>
                          
                        </>
                    } />
                <Route path="/prva" element={<PrvaStranica />} />
                <Route path="/druga" element={<DrugaStranica />} />
                <Route path="/grafikonVertikalni" element={<GrafikonVertikalni />} />
                <Route path="/grafikonHorizontalni" element={<GrafikonHorizontalni />} />
                <Route path="/grafikonKruzni" element={<GrafikonKruzni />} />
                <Route path="/tablicniPrikaz" element={<PosjecenostTablica />} />
                <Route path="/grafikonLinijski" element={<GrafikonLinijski />} />
                <Route path="/fetchaj" element={<AKDComponent />} />
                <Route path="/fetchaj1" element={<MyComponent2 />} />
            </Routes>
            </div>
        </Router> 
    );
}
export default App;
