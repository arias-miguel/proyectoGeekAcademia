export const eliminarUser = async (url, id) =>{
    await axios.delete(url+id)
}