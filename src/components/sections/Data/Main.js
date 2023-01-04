import React from 'react';
import './Main.css';

const Main = (props) => {
// const [items ,setItems] = useState ([]);
//     React.useEffect(
//         () => {
//             fetch(
//                 "https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=EUR")
//                 .then((res) => res.json())
//                 .then((json) =>                     
//                         setItems(json.coins)
                        
                   
//                 )
//         }, [])

   

let tableBody = document.getElementsByTagName("tbody")[0];
   
//const datakey = ['rank' , 'icon' ,'name' , 'price' , 'marketCap' , 'priceChange1d', 'volume' , 'totalSupply'];

  //exp
    function selectFewerProps(show) {
        const { rank,  name, price, marketCap, priceChange1d, volume, totalSupply } = show;
        return { rank,  name, price, marketCap, priceChange1d, volume, totalSupply };
    }

    const fllteredData = props.data.map(selectFewerProps);
    console.log(fllteredData);
    


  //exp end 




    fllteredData.sort((a, b) => a.rank - b.rank)

            .forEach((coin) => {


                    let tr = document.createElement("tr");

                    Object.keys(coin).forEach((key) => {


                    let td = document.createElement("td");

                    td.textContent = coin[key];

                   // td.textContent =  coin.rank;

                    tr.appendChild(td);

                });


                tableBody.appendChild(tr);

            });

    



    return (
        <></>
    );
}


export default React.memo(Main);