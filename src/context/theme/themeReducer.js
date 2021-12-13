import { 
    LIGHT_MODE,
    DARK_MODE 
} from "../../types";

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case LIGHT_MODE:
            return {
                darkmode: false
            }    
        case DARK_MODE: 
            return {
                darkmode: true
            }
    
        default:
            return state;
    }
}
