const getDefaultValue = (key) => {
    try{
        const item = localStorage.getItem(key)
        return JSON.parse(item)
    }catch(error){
        return []
    }
}

const defaultValue = getDefaultValue('listItems')

const reducer = ( state = defaultValue, action) => {
    switch(action.type){
        case 'list/add' : {
            const newListItems = [...state, action.payload]
            try{
                const value = JSON.stringify(newListItems)
                localStorage.setItem('listItems', value)
                return newListItems
            }catch (error){
                throw new Error (error)
            }
        }
        default:
            return state
    }
}

export default reducer