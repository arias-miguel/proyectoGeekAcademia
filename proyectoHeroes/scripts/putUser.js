export const editar = async (url,obje) =>{
    await axios.put(url+obje.id,obje)
}