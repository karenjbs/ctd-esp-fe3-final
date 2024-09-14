<<<<<<< HEAD
import axios from "axios";
import { createContext, useEffect, useReducer, useMemo } from "react";
import { reducer } from "../../Reducer/reducer";

export const ContextGlobal = createContext(undefined);

const initialState = {
  theme: 'light',
  favs: JSON.parse(localStorage.getItem("favs")) || [],
  dentist: [],
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url).then((res) => {
      dispatch({ type: 'SET_DENTIST', payload: res.data });
    }).catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const setTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
  };

  const setFavs = (favs) => {
    dispatch({ type: 'SET_FAVS', payload: favs });
  };

  const contextValue = useMemo(() => ({
    theme: state.theme,
    toggleTheme,
    setTheme,
    favs: state.favs,
    setFavs,
    dentist: state.dentist,
    setDentist: (dentist) => dispatch({ type: 'SET_DENTIST', payload: dentist }),
  }), [state.theme, state.favs, state.dentist]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
=======
import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
>>>>>>> 6760254ed6b09c7865f90022f05344b326c232aa
