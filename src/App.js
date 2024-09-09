/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="tree">
          <ul>
            <li>
              <a href="#">
              <img src={require('./assets/postos.jpg')} alt="Postos de Saude" />
                <span>Postos de Saude </span>
              </a>
              <ul>
                <li>
                  <a href="#">
                  <img src={require('./assets/postos.jpg')} alt="Postos de Saude" />
                    <span>Postos Sul</span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                      <img src={require('./assets/postos.jpg')} alt="Postos de Saude" />
                        <span>local Friozada</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <img src={require('./assets/postos.jpg')} alt="Postos de Saude" />
                        <span>local De Jesus</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                  <img src={require('./assets/postos.jpg')} alt="Postos de Saude" />
                    <span>Postos Central</span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                      <img src={require('./assets/postos.jpg')} alt="Postos de Saude" />
                        <span>São local</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <img src={require('./assets/postos.jpg')} alt="Postos de Saude" />
                        <span>local das Saude</span>
                      </a>
                    </li>
                    <li>
                      <a role="button" >
                      <img src={require('./assets/postos.jpg')} alt="Postos de Saude" />
                        <span>local de salete</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a role="button"  >
                  <img src={require('./assets/postos.jpg')} alt="Postos de Saude" />
                    <span>Postos Norte</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
