import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authToggle } from "../../Redux/appReducer";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "./style.module.css";
function Registration() {
  const theme = useSelector((state) => state.appReducer.theme);
  const dispatch = useDispatch((state)=>state.appReducer.dispatch)

  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [regRepassword, setRePassword] = useState('')
  const [infoLabel, setInfoLabel]= useState('')

  function validateForm() {
    if (regEmail.length == 0) {
      setInfoLabel({type:"error", value:"Email cannot be left empty!"})
      return
    }
    if(!regEmail.includes('@') || !regEmail.includes('.')) {
        setInfoLabel({type:"error", value:"Email format is incorrect"})
      return
    }
    if (regPassword.length < 8) {
        setInfoLabel({type:"error", value:"Password needs to be a minimum of 8 characters!"})
      return
    }
    let countUpperCase = 0
    let countLowerCase = 0
    let countDigit = 0
    let countSpecialCharacters = 0

    for (let i = 0; i < regPassword.length; i++) {
      const specialChars = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ]

      if (specialChars.includes(regPassword[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++
      } else if (!isNaN(regPassword[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++
      } else {
        if (regPassword[i] == regPassword[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++
        }
        if (regPassword[i] == regPassword[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++
        }
      }
    }

    if (countLowerCase == 0) {
      // invalid form, 0 lowercase characters
      setInfoLabel({type:"error",value:'Invalid Form, 0 lower case characters in password'})
      return
    }

    if (countUpperCase == 0) {
      // invalid form, 0 upper case characters
      setInfoLabel({type:"error",value:'Invalid Form, 0 upper case characters in password'})
      return
    }

    if (countDigit == 0) {
      // invalid form, 0 digit characters
      setInfoLabel({type:"error",value:'Invalid Form, 0 digit characters in password'})
      return
    }

    if (countSpecialCharacters == 0) {
      // invalid form, 0 special characters characters
      setInfoLabel({type:"error",value:'Invalid Form, 0 special characters in password'})
      return
    }
    if (regPassword != regRepassword) {
        // invalid form, 0 special characters characters
        setInfoLabel({type:"error",value:'Passwords mismatch'})
        return
      }
    setInfoLabel({type:"success",value:"Form is valid"})
  }

  useEffect(()=>{
    validateForm()
  }, [regEmail, regPassword,regRepassword])
  return (
    <Form className={`${styles["auth-form"]}`}>
      <Form.Group className="mb-3" controlId="formRegisterEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          className={`${styles["auth-control"]}`}
          type="email"
          name="Reg Email"
          value = {regEmail}
          onChange={(e)=>setRegEmail(e.target.value)}
          placeholder=""
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className={`${styles["auth-control"]}`}
          type="password"
          name = 'Reg Password'
          placeholder=""
          value = {regPassword}
          onChange={(e)=>setRegPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRepassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          className={`${styles["auth-control"]}`}
          type="password"
          name="Reg Repassword"
          placeholder=""
          value = {regRepassword}
          onChange={(e)=>setRePassword(e.target.value)}
        />
        {infoLabel?<Form.Text className={`${theme}-ter-color ${infoLabel.type}-color`}>
          <b><i>{infoLabel.value}</i></b>
        </Form.Text>:null}
      </Form.Group>
      <Form.Group className="text-center mt-4">
        <Button className={`${styles[`${theme}-auth-button`]}`} onClick={()=>validateForm()} >
          Register
        </Button>
        <div className="text-center mt-3 pointer" >
          <Form.Text className={`text-center ${theme}-ter-color`} onClick={()=>dispatch(authToggle("login"))}>
            Already Have an Account? Sign In
          </Form.Text>
        </div>
      </Form.Group>
    </Form>
  );
}

export default Registration;
