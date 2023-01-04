import './App.css';

import Data from './components/store/Data';

function App() {
  return (
    <>
 
    <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>VWAP (24Hr)</th>
                    <th>Supply</th>                   
                    <th> Volume (24Hr)</th>
                    <th>Chnage (24Hr)</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>

      <Data /> 
    </>
  );
}

export default App;
