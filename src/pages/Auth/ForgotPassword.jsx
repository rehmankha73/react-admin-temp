import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout.jsx";
import {Button, Input} from "@nextui-org/react";
import {Link} from "react-router-dom";

export function ForgotPassword() {
    return (
        <AuthLayout>
            <div className="max-w-4xl mx-0 w-full px-8 text-justify mt-16 sm:text-none sm:px-0 sm:w-1/2 sm:mx-auto sm:mt-20">
            <h1 className="text-xl sm:text-3xl font-bold mb-8">Forgot Password</h1>
                <p className="font-medium my-4">Forgot your password? Enter your Email address here, and we will send
                    you a password reset link.</p>
                <div style={{width: '100%'}}>
                    <Input
                        autoFocus
                        label="Email"
                        placeholder="Enter your email"
                        variant="bordered"
                        labelPlacement="outside"
                        className="mb-4"
                    />
                </div>

                <Button className="my-6" variant="flat" style={{width: '100%'}}>
                    Submit
                </Button>

                <p className="mx-auto text-center"> Already have account? <Link to="/login"><span className="underline">Sign in</span></Link></p>
            </div>
        </AuthLayout>
    )

}