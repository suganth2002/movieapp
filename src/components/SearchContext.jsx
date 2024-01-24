import { createContext, useState } from "react";
export const MovieContext = createContext();
const MovieContextProvider = ({children}) =>{
    const [search,setSearch] = useState(null)
    return (
        <MovieContext.Provider value={{search,setSearch}}>{children}</MovieContext.Provider>
    )
}
export default MovieContextProvider;