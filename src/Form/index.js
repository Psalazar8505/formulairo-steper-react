import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";
//validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";

const Form = () => {
  const [step, setStep] = useState(0)
  const [pasos, setPasos] = useState({})
  
  useEffect(() => { 
    console.log("useEffect")
  })

  useEffect( () => {
    console.log("se ha actualizado el step", step)
  }, [step])

  // useEffect(async () => {
  //   try{
  //     const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  //     const posts = await data.json();
  //     console.log(posts)
  //   }catch(e){
  //     console.log(e)
  //   }
  // }, [])

  //step = 0 --> <DatosUsuario/>
  //step = 1 --> <DatosPersonales/>
  //step = 2 --> <DatosEntrega/>
  //step = 3 --> <Complete/>

  const updateStep = (step) => {
    console.log("actualizar paso", step)
    setStep(step)
  }
 
  const steps = {
    0: <DatosUsuario updateStep={updateStep}/>,
    1: <DatosPersonales updateStep={updateStep}/>,
    2: <DatosEntrega updateStep={updateStep}/>,
    3: <Complete/>
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let newStep = step + 1
    setStep(newStep)
    console.log("newStep", newStep)
    console.log(step)
  }

  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value
    const valid = validator(value)
    console.log(value)
    console.log(valid)
    console.log("position", position)
    console.log("currentStep", currentStep)
    console.log("validator", validator)

    stepsFlow[0].inputs[0].label = "Nombre"
    console.log(stepsFlow)

  }

  const stepsFlow = {
    0: {
      inputs : [
        {
          label: "Correo electronico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperTex: "Ingresar un correo valido",
          validator: validarEmail
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperTex: "Ingresa una contraseña  valida, Al menos 8 caracteres y maximo 20",
          validator: validarPassword
        }
      ],
      buttonText: 'Siguiente',
      onSubmit
    },
    1: {
      inputs : [
        {
          label: "Correo electronico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperTex: "Ingresar un correo valido",
          validator: validarEmail
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperTex: "Ingresa una contraseña  valida, Al menos 8 caracteres y maximo 20",
          validator: validarPassword
        }
      ],
      buttonText: 'Siguiente',
      onSubmit
    },
  };

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        { step < 3 && <Stepper step={step}/>}        
        {/* {steps[step]} */}
        <Step data={ stepsFlow[step] } step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;