import './App.css';
import Content from './components/Content/Content';

function App() {

  // const product = {
  //   "URL": "https://3dex-exp.ru/3dspace/ecg/docs/PersonStatisticReport.csv"
  // }

  // useEffect(() => {
  //   console.log("before request")
  //   axios.post('http://3dex-exp.ru:8070/internal/resources/external/csvparse', product, { 
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'X-Requested-With': 'XMLHttpRequest',
  //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  //     }})
  //     .then(res => {
  //       if (res.status === 200) {
  //         console.log("successful")
  //       } else if(res.status === 403){
  //         console.log("status 403")
  //       }
  //     })
  // }, [])
  return (
    <Content />
  )
}

export default App;
