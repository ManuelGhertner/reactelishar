import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const Login = (()=>{
const[username, setUsername] = useState("");
const[password, setPassword] = useState("");
// const [error, setError] = useState('');
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password){
        if(username === "usuario" && password === "contraseña"){
          navigate("/dashboard");         
        } else {
            swal("ERROR!", "El usuario o contraseña es invalido!", "error");
        }
    } else{
        swal("ERROR!", "Debe ingresar usuario y contraseña!", "error");
    }
}
return (
   <>
   <h1>Log in</h1>
   <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)}/>
   <input type="text" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
   <button onClick={handleSubmit}>Iniciar sesión</button>
   </>
)

})

export default Login