export const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_THEME':
        return {
          ...state,
          theme: action.payload,
        };
      case 'SET_FAVS':
        return {
          ...state,
          favs: Array.isArray(action.payload) ? action.payload : [], // Asegurarse de que sea un array
        };
      case 'SET_DENTIST':
        return {
          ...state,
          dentist: action.payload,
        };
      case 'TOGGLE_THEME':
        return {
          ...state,
          theme: state.theme === 'light' ? 'dark' : 'light',
        };
      default:
        return state;
    }
  };
  