"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import  Login  from '@/components/molecules/Login/page'

type Props = {
  name: string,
  email:string,
}

export default function ModalButton() {
  let [isOpen, setIsOpen] = useState(false)
  const [loginData, setLoginData] = useState({
    name:"",
    email:"",
  });
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginData((prev)=>{
      return{...prev,[name]: value}
    })
  }

  function closeModal() {
    setIsOpen(false)
  }
  const handleSubmit = () => {
    console.log(loginData);
    // getUser(loginData);

    closeModal();
  }
  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className='px-2'>
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Login
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-primary p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Enter Details
                  </Dialog.Title>
                  <div className="mt-2 ">
                    <p className="text-sm text-primary">
                    <input type="text" name="email" placeholder="Email" aria-label='Email field' 
                    onChange={handleChange}
                    className="input input-bordered input-accent w-full max-w-xs my-2" />
                    <input type="text" name="name" placeholder="Name" aria-label='Name field'
                    onChange={handleChange}
                    className="input input-bordered input-accent w-full max-w-xs my-2" />
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={()=> handleSubmit()}
                    >
                      Login
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
