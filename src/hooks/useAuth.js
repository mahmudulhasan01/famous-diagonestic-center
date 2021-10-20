import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthProvaider"

const useAuth = () =>{
    return useContext(AuthContext);
};

export default useAuth;