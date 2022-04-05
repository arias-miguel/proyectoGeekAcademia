export const editar = async (url, id) =>{
    await axios.put(url+id)
}