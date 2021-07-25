import React, {useContext} from 'react'
import { UserContext } from '../../UserContext'

const Home = () => {

    const {user, setUser} = useContext(UserContext)

    const setAsJohn = () => {
        const john = {
            name:'John',
            email:'john@gmail.com',
            password:'123',
            id:'1'
        }

        setUser(john)
    }

    const setAsTom = () => {
        const tom = {
            name:'Tom',
            email:'Tom@gmail.com',
            password:'123',
            id:'2'
        }

        setUser(tom)
    }

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home