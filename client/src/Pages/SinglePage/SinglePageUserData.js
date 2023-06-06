import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import SinglePageUser from "./SinglePageUser/SinglePageUser";

const SinglePageUserData = ({userId}) => {
    const [userNum, setUserNum] = useState(0)
    const [userDB, setUserDB] = useState([])

    const getKey = useCallback(async () => {
        try {
            await axios.get('/api/post/', {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {userId}
            })
                .then((response) => setUserDB(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getKey()
    }, [getKey])

    return (
        <div>
            <SinglePageUser userDB={userDB}/>
        </div>
    );
};

export default SinglePageUserData;