import React from 'react';
import { Link } from 'react-router-dom';

function DrugaStranica() {
    return (
        <div>
            <h2>Razrada teme</h2>
            <h3> U analizi prisutnosti ljudi u kafićima po mjesecima, 
                svaki mjesec nosi sa sobom svoje karakteristike i dinamiku koja 
                utječe na posjećenost kafića. Početak godine obično donosi porast
                aktivnosti u kafićima, s ljudima koji se okupljaju kako bi započeli 
                novu godinu s prijateljima i kolegama. Siječanj tako može biti razdoblje 
                visoke posjećenosti, dok se u veljači trendovi mijenjaju s pristupom Valentinovu,
                što može rezultirati većim brojem parova u kafićima.U proljeće, s dolaskom toplijeg vremena, 
                kafići često postaju omiljena destinacija za opuštanje na otvorenom. Ožujak i travanj mogu 
                donijeti porast aktivnosti na terasama kafića, dok se u svibnju trendovi mogu mijenjati s pristupom
                proljetnim praznicima i manifestacijama. Ljetni mjeseci, poput lipnja, srpnja i kolovoza,
                obično donose stabilnu ili čak povećanu posjećenost kafića, posebno u turističkim destinacijama. 
                Ljudi traže osvježenje u kafićima dok se opuštaju tijekom vrućih ljetnih dana. Jesen, s dolaskom 
                hladnijeg vremena, može donijeti promjene u ponašanju posjetitelja. Rujan može biti mjesec prijelaza 
                s ljetnih na jesenske aktivnosti, dok listopad i studeni mogu vidjeti veću posjećenost kafića zbog 
                druženja tijekom jesenskih praznika i priprema za zimu. Zima zatvara godinu s različitim praznicima 
                i proslavama, što može rezultirati povećanom posjećenošću kafića u prosincu, dok se prelazi u novu godinu.
                Sezonske varijacije u prisutnosti ljudi u kafićima odražavaju široku paletu faktora koji utječu na ponašanje 
                posjetitelja, pružajući vrijedan uvid za upravljanje poslovanjem i prilagodbu usluga prema potrebama tržišta.</h3>
            <Link to="/">Vrati se na početnu stranicu</Link>
        </div>
    );
}

export default DrugaStranica;
