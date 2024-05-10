import React from 'react';
import './tablicaprikaz.css';
import { Link } from 'react-router-dom';

class PosjecenostTablica extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        podaci: [],
      };
    }
  
    generirajPodatke = () => {
      const mjeseci = ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'];
      const podaci = [];
  
      for (let i = 0; i < mjeseci.length; i++) {
        const posjecenost = {
          mjesec: mjeseci[i],
          muskarci: Math.floor(Math.random() * 25) + 1, // Random broj za muškarce
          zene: Math.floor(Math.random() * 25) + 1, // Random broj za žene
        };
        podaci.push(posjecenost);
      }
  
      this.setState({ podaci: podaci });
    };
  
    componentDidMount() {
      this.generirajPodatke();
    }
  
    render() {
      return (
        <div> 
        <h2>Tablični prikaz prosječnih odlazaka u kafić u pojedinom mjesecu na primjeru muškaraca i žena</h2>
        <Link to="/">Vrati se na početnu stranicu</Link>
        <div className="table-container">
          
          <table className="table">
            <thead>
              <tr>
                <th>Mjesec</th>
                <th>Muškarci</th>
                <th>Žene</th>
              </tr>
            </thead>
            <tbody>
              {this.state.podaci.map((podatak, index) => (
                <tr key={index}>
                  <td>{podatak.mjesec}</td>
                  <td className="muskarci">{podatak.muskarci}</td>
                  <td className="zene">{podatak.zene}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      );
    }
  }
  
  export default PosjecenostTablica;