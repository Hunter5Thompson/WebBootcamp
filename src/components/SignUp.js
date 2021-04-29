/* eslint-disable no-undef */
import React, {useRef} from 'react'
import { Card, Button, Form} from 'react-bootstrap'

export default function SignUp() {
    const emailRef = useRef()
    const passswordRef = useRef()
    const passswordConfirmRef = useRef()

    return (
        <>
          <Card>
            <Card.Body>
                <h2 className="text-center mb4">
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef}  required />
 
                        </Form.Group>
                        <Form.Group id="passsword">
                            <Form.Label>Passwort</Form.Label>
                            <Form.Control type="passsword" ref={passswordRef}  required />
 
                        </Form.Group><Form.Group id="passsword-confirm">
                            <Form.Label>Passwort Bestätigung</Form.Label>
                            <Form.Control type="passsword-confirm" ref={passswordConfirmRef}  required />
 
                        </Form.Group>    
                        <Button className="w-100" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </h2>
            </Card.Body>

          </Card>
          <div className="w-100 text-center mt-2">
              Hast Du schon einen Account? Login
              </div>  

        </>
    )
}
