export default (count = 0, action) => {
    const type = action.type
    switch(type) {
        case 'INCREMENT': return (count + 1)
        default: return count 
    }
}