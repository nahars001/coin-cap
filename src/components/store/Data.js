import React from "react";
import Main from "../sections/Data/Main";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {

        
        fetch(
            "https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=EUR")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json.coins,
                    DataisLoaded: true
                });
            })
      
    }
 
    
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return ;
        return (
          
             <Main data={items}/>
            
        );
    }
}
export default React.memo(Data);