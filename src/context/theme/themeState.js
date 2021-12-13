import React, { useReducer } from "react";
import themeReducer from "./themeReducer";
import { themeContext } from "./themeContext";

import { 
    LIGHT_MODE, 
    DARK_MODE 
} from "../../types";

const ThemeState = props => {

    const initialState = {
        darkmode: null
    }

    const [state, dispatch] = useReducer(themeReducer, initialState);

    // Functions
    const lightTheme = () => {
        dispatch({
            type: LIGHT_MODE
        });
    };

    const darkTheme = () => {
        dispatch({
            type: DARK_MODE
        });
    };

    return (
        <themeContext.Provider
            value={{
                darkmode: state.darkmode,
                lightTheme,
                darkTheme
            }}
        >
            {props.children}
        </themeContext.Provider>
    );

}

export default ThemeState;



