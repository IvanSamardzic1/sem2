import React from 'react';
import { Link } from 'react-router-dom';

function PrvaStranica() {
    return (
        <div>
            <h2>Uvod</h2>
            <h3>U kontekstu dinamične ugostiteljske industrije, razumijevanje ponašanja posjetitelja
                 kafića ključno je za uspješno vođenje poslovanja. Analiza podataka o prisutnosti ljudi 
                 u kafićima po mjesecima pruža dublji uvid u sezonske varijacije, trendove potrošnje i 
                 preferencije posjetitelja. Kroz sustavno prikupljanje i analizu podataka, moguće je 
                 identificirati ključne obrasce koji mogu informirati marketinške strategije, upravljanje
                  zalihama i pružanje boljeg iskustva posjetiteljima. U ovom prikazu podataka istražujemo 
                  prisutnost ljudi u kafićima tijekom različitih mjeseci, ističući važnost sezonskih varijacija 
                  i trendova koji oblikuju kafićsku industriju.</h3>
            <Link to="/">Vrati se na početnu stranicu</Link>
        </div>
    );
}

export default PrvaStranica;
