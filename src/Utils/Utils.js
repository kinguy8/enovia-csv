import { tempData } from "../Constants/Constants"
// export const parseCSV = async (url) => {
//     try {
//         const res = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'content-type': 'text/csv;charset=UTF-8',
//                 'Access-Control-Allow-Origin': '*'
//             }
//         })
//         if (res.status === 200) {
//             console.log("status 200")
//             const data = await res.text();
//             console.log(data);
//             return data

//         } else {
//             console.log(`Error code ${res.status}`);
//         }
//     }
//     catch (err) {
//         console.log("Error: ", err)
//     }
// }


export const parseCSV = () => {
    console.log("first :",tempData[0].value2)
    tempData.forEach(item => console.log("Name: ", item.value2))
}