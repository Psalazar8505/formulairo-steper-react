import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = () => {
  const [email, setEmail] = useState({
    value: "",
    valid: true
  })

  const [password, setPassword] = useState ({
    value: "",
    valid: true
  })

  return (
      <Box
        component="form"
        // autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          if(email.valid && password.valid){
            console.log(email, password)
            console.log("Siguiente formulario")
          }else{
            console.log("No hacer nada")
          }          
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={!email.valid}
          helperText={!email.valid && "Ingresa un correo electrónico válido"}
          value={ email.value }
          onChange={(input) => {
            const email = input.target.value
            const valido = validarEmail(email)
            setEmail ({ value: email, valid: valido })
          }}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          error={!password.valid}
          helperText={!password.valid && "Ingresa una contraseña  valida, Al menos 8 caracteres y maximo 20" }
          value={ password.value }
          onChange={(input) => {
            const password = input.target.value
            const valido = validarPassword (password)
            setPassword ({ value: password, valid: valido })
          }}
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box> 
  )
}

export default DatosUsuario;
