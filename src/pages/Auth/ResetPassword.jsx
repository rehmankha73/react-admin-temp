import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout.jsx";
import {Button, Input} from "@nextui-org/react";
import {EyeSlashFilledIcon} from "./assets/EyeSlashFilledIcon.jsx";
import {EyeFilledIcon} from "./assets/EyeFilledIcon.jsx";
import {useState} from "react";
import {Link} from "react-router-dom";

export function ResetPassword() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <AuthLayout>
            <div className="max-w-4xl mx-0 w-full px-8 text-justify mt-16 sm:text-none sm:px-0 sm:w-1/2 sm:mx-auto sm:mt-20">
            <h1 className="text-xl sm:text-3xl font-bold mb-8">Reset Password</h1>
                <p className="font-medium my-2">Don&apos;t have account yet, <span className="underline">Join us</span>.
                </p>
                <div style={{width: '100%'}}>
                    <Input
                        label="New Password"
                        placeholder="Your new password"
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                )}
                            </button>
                        }
                        type={isVisible ? "text" : "password"}
                        variant="bordered"
                        labelPlacement="outside"
                        className="my-4"
                    />
                    <Input
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                )}
                            </button>
                        }
                        type={isVisible ? "text" : "password"}
                        variant="bordered"
                        labelPlacement="outside"
                        className="my-4"
                    />
                </div>

                <Button className="my-6" variant="flat" style={{width: '100%'}}>
                    Reset
                </Button>

                <p className="mx-auto text-center"> Already have account? <Link to="/login"><span className="underline">Sign in</span></Link></p>
            </div>
        </AuthLayout>
    )

}