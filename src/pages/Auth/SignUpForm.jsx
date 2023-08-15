import {Button, Checkbox, Input} from "@nextui-org/react";
import {useState} from "react";
import {EyeSlashFilledIcon} from "./assets/EyeSlashFilledIcon.jsx";
import {EyeFilledIcon} from "./assets/EyeFilledIcon.jsx";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout.jsx";
import {Link} from "react-router-dom";

export function SignUpForm() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <AuthLayout>
            <div className="max-w-4xl mx-0 w-full px-8 text-justify mt-16 sm:text-none sm:px-0 sm:w-1/2 sm:mx-auto sm:mt-20">
            <h1 className="text-xl sm:text-3xl font-bold mb-8">Sign Up</h1>

                <div className="sm:flex sm:justify-center sm:items-center sm:gap-4">
                    <Input
                        autoFocus
                        label="First Name"
                        placeholder="Enter first name"
                        variant="bordered"
                        labelPlacement="outside"
                        className="my-4 sm:my-0"
                    />
                    <Input
                        label="Last Name"
                        placeholder="Enter last name"
                        variant="bordered"
                        labelPlacement="outside"
                        className="my-4 sm:my-0"
                    />
                </div>

                <Input
                    autoFocus
                    label="Email"
                    placeholder="example:email@email.com"
                    variant="bordered"
                    labelPlacement="outside"
                    className="my-4"
                />
                <Input
                    label="Password"
                    placeholder="Enter a 8+ characters password"
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

                <Checkbox
                    classNames={{
                        label: "text-small",
                    }}
                >
                    By signing up, I agree with terms of Use & Privacy Policy
                </Checkbox>

                <Button className="my-6" variant="flat" style={{width: '100%'}}>
                    Sign up
                </Button>

                <p className="mx-auto text-center"> Already have an account? <Link to="/login"><span className="underline">Sign in</span></Link></p>

            </div>
        </AuthLayout>
    )

}