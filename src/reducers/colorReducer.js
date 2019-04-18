export default (state = "white", action) => {

    switch (action.type) {
        case "BLACK":
            return state = "White"
    
        default:
            return state
    }
}