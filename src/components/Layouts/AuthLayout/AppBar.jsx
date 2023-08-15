import {
    Button, Divider,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function AppBar() {
    const router = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Features",
        "Pricing",
        "About us",
        "Contact",
    ];

    return (
        <Navbar className="max-w-7xl mx-auto" onMenuOpenChange={setIsMenuOpen} maxWidth="full">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link to="/" className="flex items-center">
                        <AcmeLogo/>
                        <p className="font-bold text-inherit">ACME</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" to="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link to="#" aria-current="page">
                        Pricing
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" to="#">
                        About us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" to="#">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex" justify="end">
                <NavbarItem>
                    <Link to="/login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button onClick={() => router('/signup')} variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                to="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}

                    <Divider className="mt-4" />

                    <NavbarMenuItem>
                        <Link to="/login">Login</Link>
                    </NavbarMenuItem>

                    <NavbarMenuItem>
                        <Button onClick={() => router('/signup')} variant="flat">
                            Sign Up
                        </Button>
                    </NavbarMenuItem>
                </>
            </NavbarMenu>
        </Navbar>
    )


    // return (
    // <Navbar shouldHideOnScroll>
    //     <NavbarBrand>
    //         <Link to="/" className="flex items-center">
    //             <AcmeLogo/>
    //             <p className="font-bold text-inherit">ACME</p>
    //         </Link>
    //     </NavbarBrand>
    //     <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //         <NavbarItem>
    //             <Link to="#">
    //                 Features
    //             </Link>
    //         </NavbarItem>
    //         <NavbarItem>
    //             <Link color="foreground" to="#" aria-current="page">
    //                 Pricing
    //             </Link>
    //         </NavbarItem>
    //         <NavbarItem>
    //             <Link color="foreground" to="#">
    //                 About Us
    //             </Link>
    //         </NavbarItem>
    //         <NavbarItem>
    //             <Link color="foreground" to="#">
    //                 Contact
    //             </Link>
    //         </NavbarItem>
    //     </NavbarContent>
    //     <NavbarContent justify="end">
    //         <NavbarItem className="hidden lg:flex">
    //             <Link to="/login">Login</Link>
    //         </NavbarItem>
    //         <NavbarItem>
    //             <Button variant="flat" onClick={() => router('/signup')}>
    //                 Sign Up
    // {/*            </Button>*/}
    // {/*        </NavbarItem>*/}
    // {/*    </NavbarContent>*/}
    // {/*</Navbar>*/}
    // <nav className="flex justify-between items-center w-100 px-4 py-1 border-b-1 border-gray-500">
    //     <div>
    //         <Image
    //             width={100}
    //             alt="NextUI hero Image"
    //             src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    //         />
    //     </div>
    //     <div className="flex justify-between gap-5">
    //             <span>Features</span>
    //             <span>Pricing</span>
    //             <span>About us</span>
    //             <span>Contact</span>
    //     </div>
    //     <div className="flex">
    //         <Button variant="light" className="mr-4">
    //             Sign in
    //         </Button>
    //         <Button>
    //             Sign Up
    //         </Button>
    //     </div>
    // </nav>
    // );
}