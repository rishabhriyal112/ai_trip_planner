import { useState } from 'react'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { Plane } from 'lucide-react';


function Header() {
  const [openDailog, setOpenDailog] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    console.log(user);
  }, [])

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  })

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDailog(false);
      window.location.reload();
    })
  }

  return (
    <div className='p-2 shadow-sm flex justify-between items-center px-5 '>

      <a href="/">
      <div className='flex gap-2 h-auto w-auto cursor-pointer items-center md:ml-4'>
        <Plane />TravelBuddy
      </div>
      </a>
      <div>
        {user ?
          <div className='flex items-center gap-5'>

            <a href="/create-trip">
              <Button variant="outline" className='rounded-full cursor-pointer'>+ Create Trip</Button>
            </a>

            <a href="/my-trips">
              <Button variant="outline" className='rounded-full cursor-pointer'>My Trips</Button>
            </a>

            <Popover>
              <PopoverTrigger><img src={user?.picture} className='h-[35px] w-[35px] rounded-full cursor-pointer' alt="Profile Picture" /></PopoverTrigger>
              <PopoverContent><h2 onClick={() => {
                googleLogout();
                localStorage.clear();
                window.location.reload();
              }}>Logout</h2>
              </PopoverContent>
            </Popover>
          </div>
          :
          <Button className='cursor-pointer' onClick={() => {
            setOpenDailog(true);
          }}>Sign In</Button>
        }
      </div>
      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="logo" />
              <h2 className='font-bold text-lg mt-7'>Sign In with Google</h2>
              <p>Sign in to the App with Google Authentication</p>
              <Button
                onClick={login}
                className="mt-5 w-full cursor-pointer">
                <FcGoogle className='h-7 w-7 ' />
                Sign In with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Header
