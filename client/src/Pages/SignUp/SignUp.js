import React, {useState} from 'react';
import axios from "axios";

const SignUp = () => {

    const [form, setForm] = useState({
        login: '',
        password: ''
    })

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            await axios.post('/api/auth/registration', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => console.log(response))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={"bg-gradient-to-r from-gray-100 to-gray-400 h-screen"}>
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Sign Up</h1>
                            </div>
                            <form onSubmit={e => e.preventDefault()}>
                                <div className="divide-y divide-gray-200">
                                    <div
                                        className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input autoComplete="off"
                                                   id="email"
                                                   name="login"
                                                   type="text"
                                                   className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                   placeholder="Email address"
                                                   onChange={changeHandler}
                                            />
                                            <label htmlFor="email"
                                                   className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                Name
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input autoComplete="off"
                                                   id="password"
                                                   name="password"
                                                   type="password"
                                                   className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                   placeholder="Password"
                                                   onChange={changeHandler}
                                            />
                                            <label htmlFor="password"
                                                   className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                Password
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <button
                                                className="hover:bg-gray-300 text-gray-400 font-semibold mx-2 my-0.5 py-2 px-4 border border-gray-600 rounded shadow"
                                                onClick={registerHandler}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;