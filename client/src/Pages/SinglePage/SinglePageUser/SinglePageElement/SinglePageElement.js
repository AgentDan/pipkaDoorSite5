import React, {useState} from 'react';
import GltFrender from "./GLTFrender";

const SinglePageElement = (props) => {
    const [butA, setButA] = useState(0)
    const [butB, setButB] = useState(0)
    const [butC, setButC] = useState(0)

    return (
        <div>
            <div className={"mt-6 ml-2 font-bold"}>
                MODEL ELEMENTS
            </div>
            {
                props.userDB.map((data, index) => {
                    return (
                        <div key={index}>

                            {
                                props.userNum === index
                                    ?
                                    <div>
                                        <div className={"mt-2"}>
                                            {
                                                data.paramA.map((dataNew, index) => {
                                                    let classBut =  ["hover:bg-gray-300 text-gray-400 font-semibold mx-2 my-0.5 py-2 px-4 border border-gray-600 rounded shadow"]
                                                    if (butA === index) {
                                                        classBut.push("bg-gray-500 text-white")
                                                    } else {
                                                        classBut.push("bg-opacity ")
                                                    }
                                                    return (
                                                        <div key={index}>
                                                            <button
                                                                onClick={() => setButA(index)}
                                                                className={classBut.join(' ')}
                                                                key={index}
                                                            >
                                                                {dataNew}
                                                            </button>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className={"mt-2"}>
                                            {
                                                data.paramB.map((dataNew, index) => {
                                                    let classBut =  ["hover:bg-gray-300 text-gray-400 font-semibold mx-2 my-0.5 py-2 px-4 border border-gray-600 rounded shadow"]
                                                    if (butB === index) {
                                                        classBut.push("bg-gray-500 text-white")
                                                    } else {
                                                        classBut.push("bg-opacity ")
                                                    }
                                                    return (
                                                        <div key={index}>
                                                            <button
                                                                onClick={() => setButB(index)}
                                                                className={classBut.join(' ')}
                                                                key={index}>{dataNew}
                                                            </button>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className={"mt-2"}>
                                            {
                                                data.paramC.map((dataNew, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <button
                                                                onClick={() => setButC(index)}
                                                                className={"bg-opacity-20 hover:bg-gray-100 text-gray-400 font-semibold mx-2 my-0.5 py-2 px-4 border border-gray-600 rounded shadow"}
                                                                key={index}>{dataNew}
                                                            </button>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    :
                                    <></>
                            }
                        </div>
                    )
                })}
            <GltFrender
                userNum={props.userNum}
                userDB={props.userDB}
                path={props.path}
                butA={butA}
                butB={butB}
                butC={butC}
            />
            <div>
            </div>
        </div>
    );
};

export default SinglePageElement;