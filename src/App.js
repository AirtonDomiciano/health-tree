/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import resumeData from "./context/context";
import renderItem from "./components/renderItem";
// import BrowserSync from "browser-sync";

function App() {
  const items = resumeData.items;
  
  // TODO
  // const bs = new BrowserSync();
  // Store the items array in localStorage
  // const itemsString = JSON.stringify(items);
  // localStorage.setItem("items", itemsString);

  // Sync the items array with other browsers
  // bs.sync("items", itemsString);

  // On the other machine, retrieve the synced items array
  // bs.on("sync", (data) => {
  //   if (data.key === "items") {
  //     const itemsString = data.value;
  //     const items = JSON.parse(itemsString);
  //     // Update the local items array with the synced data
  //     localStorage.setItem("items", itemsString);
  //   }
  // });
  // TODO FIM

  return (
    <div className="container">
      <div className="row">
        <div className="tree">
          <ul>
            <li>
              <a href="#">
                <img
                  src={require("./assets/postos.jpg")}
                  alt="Postos de Saude"
                />
                <span> {resumeData.name} </span>
              </a>
              <ul>
                {items.map((item) => (
                  <li key={item.id}>{renderItem(item)}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
