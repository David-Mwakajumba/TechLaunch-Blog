import React, { useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
    title?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    message,
    title = "Success",
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-auto max-w-lg mx-auto my-6">
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                    {/* Header */}
                    <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            {title}
                        </h3>
                        <button
                            className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-gray-500 bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                            onClick={onClose}
                        >
                            ×
                        </button>
                    </div>

                    {/* Body */}
                    <div className="relative flex-auto p-6">
                        <p className="my-4 text-lg leading-relaxed text-gray-600">
                            {message}
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                        <button
                            className="px-6 py-2.5 bg-[#FF4D4D] text-white rounded-full hover:bg-[#FF3333] transition-colors"
                            type="button"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
