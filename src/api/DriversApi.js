import axios from "axios";

// export async function getDrivers(){
//     axios.get('http://ergast.com/api/f1/2021/drivers.json').then(response => {
//         //TODO :: Set up API endpoint as an environment variable
//     }
// }

export default class Api {
    static getDrivers(){ //only can be called without instantiating the class itself
        return axios.get('http://ergast.com/api/f1/2021/drivers.json').then(response => {
            return response.data.MRData.DriverTable.Drivers
        });
    }
}
