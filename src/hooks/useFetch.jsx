import { useEffect, useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_ISPENDING":
      return { ...state, isPending: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return;
      state;
  }
}
export function useFetch(url) {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    isPending: false,
    error: null,
  });
  useEffect(() => {
    const getData = async () => {
      dispatch({ type: "SET_ISPENDING", payload: true });
      try {
        const request = await fetch(url);
        if (!request.ok) {
          throw new Error("Hatolik yuz berdi:)");
        }
        const data = await request.json();
        console.log(data);
        dispatch({ type: "SET_DATA", payload: data });
        dispatch({ type: "SET_ERROR", payload: null });
        dispatch({ type: "SET_ISPENDING", payload: false });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
        dispatch({ type: "SET_ISPENDING", payload: false });
      }
    };
    getData();
  }, [url]);
  return { ...state };
}
