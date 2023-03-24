import { useState, useEffect } from "react";
import axios from "axios";





const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)


    const [error, setError] = useState(null);


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': '85c0b98fe0mshfd408db6046bfbep1a3fdbjsn0bb72826f1b8',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

    
    const fetchData =  async () => {
        setLoading(true);

        try{
            const res = await axios.request(options)
            setData(res.data.data);
            setLoading(false);
        }catch(e){
            setError(e);
            alert("Unable to proceed further at the moment")
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    },[])
    
    const refetch = () => {
        setLoading(true);
        fetchData();
    }

    return { data, loading, error, refetch };

}

export default useFetch;
