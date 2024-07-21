'use client'
import { useState } from "react";
import SignUpModal from "../modals/SignUpModal";
import Button from "../ui/Buttons/Button";
import NewChatButton from "../ui/Buttons/NewChatButton";
import SignInModal from "../modals/SignInModal";

export default function Navbar() {

    const [openSignUp, setOpenSignUp] = useState<boolean>(false);
    const [openSignIn, setOpenSignIn] = useState<boolean>(false);

    const handleClick = () => {
        console.log('Button clicked');
    };

    return (
        <div className='w-full min-h-dvh bg-[#122020] flex flex-col items-center justify-between px-4 py-5'>
            <NewChatButton/>
            <div className="w-full flex flex-col gap-3">
                <Button variant='signUp' onClick={() => setOpenSignUp(true)}>
                    Зарегестрироваться
                </Button>
                <Button variant='signIn' onClick={() => setOpenSignIn(true)}>
                    Войти
                </Button>
            </div>
            <SignUpModal open={openSignUp} handleClose={() => setOpenSignUp(false)}/>
            <SignInModal open={openSignIn} handleClose={() => setOpenSignIn(false)}/>
        </div>
    )
}