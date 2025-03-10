'use client'

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"

function VerifyEmailPage() {

    const token = useSearchParams().get('token');
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        if (token) {
            const verifyUserEmail = async () => {
                try {
                    const response = await axios.post('/api/users/verifyemail', { token });
                    console.log('res', response);
                    setVerified(true);
                } catch (error: unknown) {
                    //setError(true);
                    console.log('error', error)
                }
            }
            verifyUserEmail();
        }
    }, [token])

    return (
        <>
            {
                verified && <div className="min-h-screen bg-gray-50 flex flex-col justify-start py-6 sm:px-6 lg:px-8">
                    <div className="mt-24 sm:mx-auto sm:w-full sm:max-w-lg">
                        <Image
                            className="mx-auto h-10 w-auto"
                            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Workflow"
                            height={100}
                            width={100}
                        />
                        <h2 className="mt-6 ml-2 mr-2 text-center text-xl 2xl:text-3xl font-bold text-gray-900">
                            {"Email verified successfully"}
                        </h2>
                    </div>
                    <div className="mt-8 ml-3 mr-3 text-xl sm:mx-auto sm:w-full sm:max-w-lg">
                        <div className="bg-white py-4 px-4 shadow sm:rounded-lg text-sm">
                            <p>
                                <span>
                                    Your email address is verified, please login to enjoy our services.
                                </span>
                            </p>
                            <div className="mt-6 relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    <Link href={'/login'}>
                                        <span className="mt-1 py-1.5 px-2.5 text-xs inline-flex items-center border border-transparent rounded-md shadow-sm  font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none justify-center">
                                            <span className="text-md pr-1">&larr;</span>
                                            {"Go back to login"}
                                        </span>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                !verified &&
                <div className="min-h-screen bg-gray-50 flex flex-col justify-start py-6 sm:px-6 lg:px-8">
                    <div className="mt-24 sm:mx-auto sm:w-full sm:max-w-lg">
                        <Image
                            className="mx-auto h-10 w-auto"
                            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Workflow"
                            height={100}
                            width={100}
                        />
                        <h2 className="mt-6 ml-2 mr-2 text-center text-xl 2xl:text-3xl font-bold text-gray-900">
                            {"Invalid Token"}
                        </h2>
                    </div>
                    <div className="mt-8 ml-3 mr-3 text-xl sm:mx-auto sm:w-full sm:max-w-lg">
                        <div className="bg-white py-4 px-4 shadow sm:rounded-lg text-sm">
                            <p>
                                <span>
                                    Email verification token is invalid, please try again.
                                </span>
                            </p>
                            <div className="mt-6 relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    <Link href={'/login'}>
                                        <span className="mt-1 py-1.5 px-2.5 text-xs inline-flex items-center border border-transparent rounded-md shadow-sm  font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none justify-center">
                                            <span className="text-md pr-1">&larr;</span>
                                            {"Go back to login"}
                                        </span>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default VerifyEmailPage