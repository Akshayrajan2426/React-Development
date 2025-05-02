import React from 'react'
import { useQuery } from 'react-query'

const Test1 = () => {
    const { isLoading, data, error } = useQuery("akhub", apicall);

    function apicall() {
        return fetch("https://v2.jokeapi.dev/categories").then(
            (res) => res.json()
        )

    }

    if (isLoading) {
        return <h1>
            Loading...
        </h1>
    }

    if (error) {
        return <h1>
            An Error Occured!!!!
        </h1>
    }



    console.log(data)
    return (
        <div>
            <h1>name:{data.categories}</h1>
        </div>
    )
}

export default Test1