import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useEffect } from 'react';


interface NotificationProps {
    show: boolean;
    setShow: (show: boolean) => void;
    duration?: number; // durée en millisecondes
}

const Notification: React.FC<NotificationProps> = ({ show, setShow, duration = 3000 }) => {

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                setShow(false);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [show, duration, setShow]);


    return (
        <div aria-live="assertive" className="pointer-events-none fixed inset-x-0 top-20 flex items-end px-4 py-6 sm:items-start sm:p-6">
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                <Transition
                    show={show}
                    enter="transform ease-out duration-300 transition"
                    enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="pointer-events-auto relative w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="m-1 p-2">
                            <div className=" h-12 w-96 flex items-start">
                                <div className="flex-shrink-0">
                                    <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 w-0 flex-1 pt-0.5">
                                    <p className="text-sm font-medium text-gray-900">Envoyé avec succès!</p>
                                    <p className="mt-1 text-sm text-gray-500">Le message a bien été envoyé.</p>
                                </div>
                                <div className="ml-4 flex flex-shrink-0">
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={() => setShow(false)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-5 w-12" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    );
}

export default Notification;
