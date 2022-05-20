export const createUuid = ( min = 10000, max = 99999 ) => Math.floor(Math.random() * (max - min) + min)

export const getLocalStorage = ( key ) => {
    try{
        const localData = localStorage.getItem(key)
        return JSON.parse(localData)
    }catch(error){
        throw new Error(error)
    }
}

export const setLocalStorage = ( key, value ) => {
    try{
        const newLocalData = JSON.stringify(value)
        localStorage.setItem(key, newLocalData)
        return true
    }catch (error){
        throw new Error (error)
    }
}