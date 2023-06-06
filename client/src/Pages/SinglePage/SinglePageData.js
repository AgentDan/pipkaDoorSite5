import React, {useState, useContext, useCallback, useEffect} from "react"
import axios from "axios"

const SinglePageData = ({userId}) => {
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

    console.log(userDB)

    const pressButton = (num) => {
        setUserNum(num)
    }

    return (
        <div>
            <div>
                UserID {userId}
            </div>
            <div>
                {
                    userDB.map((data, index) => {
                        return (
                            <button key={index} onClick={() => pressButton(index)}>{data.title}</button>
                        )
                    })
                }
            </div>
            <div>
                {
                    userDB.map((data, index) => {
                        return (
                            <div key={index}>
                                {
                                    userNum === index
                                        ?
                                        <div>
                                            {
                                                data.paramA.map((dataNew, index) => {
                                                    return (
                                                        <button key={index}>{dataNew}</button>
                                                    )
                                                })
                                            }
                                            {
                                                data.paramB.map((dataNew, index) => {
                                                    return (
                                                        <button key={index}>{dataNew}</button>
                                                    )
                                                })
                                            }
                                            {
                                                data.paramC.map((dataNew, index) => {
                                                    return (
                                                        <button key={index}>{dataNew}</button>
                                                    )
                                                })
                                            }

                                        </div>
                                        :
                                        <></>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SinglePageData;