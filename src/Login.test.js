import { render,screen } from "@testing-library/react"
import Login from "./components/Login"

test('Login Button', () => { 
    render(<Login/>)
    const login= screen.getByTestId("Login-test")
    
    // expect(login).toHaveTextContent("1")
 })