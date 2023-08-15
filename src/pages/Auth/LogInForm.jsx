import {Button, Input} from "@nextui-org/react";
import {useState} from "react";
import {EyeSlashFilledIcon} from "./assets/EyeSlashFilledIcon.jsx";
import {EyeFilledIcon} from "./assets/EyeFilledIcon.jsx";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout.jsx";
import {Link, useNavigate} from "react-router-dom";

export function LogInForm() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    const novigation = useNavigate();

    return (
        <AuthLayout>
            <div className="max-w-4xl mx-0 w-full px-8 text-justify mt-16 sm:text-none sm:px-0 sm:w-1/2 sm:mx-auto sm:mt-20">
            <h1 className="text-xl sm:text-3xl font-bold mb-8">Log in</h1>
                <div style={{width: '100%'}}>
                    <Input
                        autoFocus
                        label="Email"
                        placeholder="Enter your email"
                        variant="bordered"
                        labelPlacement="outside"
                        className="my-4"
                    />
                    <Input
                        label="Password"
                        placeholder="Enter your password"
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

                <p className="text-right"><Link to="/forgot-password">Forgot password?</Link></p>

                <Button className="my-6" variant="flat" style={{width: '100%'}} onClick={() => novigation('/')}>
                    Login
                </Button>

                <p className="mx-auto text-center"> Don&apos;t have account yet, <Link to="/signup"><span
                    className="underline">Join us</span></Link></p>

            </div>
        </AuthLayout>
    )

}