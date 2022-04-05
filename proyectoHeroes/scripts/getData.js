/*
export const get = async (url)=>{
   const resp = await fetch(url)
   const data = await resp.json()
   console.log(data)
    return data
}*/

//------------Axios ----------//

export const leerApi = async (url) =>{
    let listarApi = await axios.get(url)
    let {data} = listarApi
    console.log(data)
    return data
   
}