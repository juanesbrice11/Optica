'use client'
import React, { useState } from 'react';

export default function Clientes() {
    const [dropdownText, setDropdownText] = useState('Click');
    const [isOpen, setIsOpen] = useState(false);
    const [filterBy, setFilterBy] = useState('CC');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSelect = (option: string) => {
        setDropdownText(option);
        setFilterBy(option);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const clientes = [
        { cc: '123456789', nombre: 'Juan Pérez', telefono: '123-456-7890', historia: '1' },
        { cc: '987654321', nombre: 'Ana Gómez', telefono: '987-654-3210', historia: '2' },
        { cc: '456789123', nombre: 'Carlos López', telefono: '456-789-1234', historia: '3' },
    ];

    const filteredClientes = clientes.filter((cliente) => {
        if (filterBy === 'CC') {
            return cliente.cc.includes(searchTerm);
        } else if (filterBy === 'Nombre') {
            return cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (filterBy === 'Teléfono') {
            return cliente.telefono.includes(searchTerm);
        }
        return false;
    });

    return (
        <div className="items-center justify-center text-gray-900 flex flex-col gap-4 p-10">
            <h2 className="text-2xl font-bold">Clientes</h2>

            <div className="flex items-center justify-center gap-4">
                <h3 className="span-2 text-base/7 font-semibold text-gray-900">Tipo de consulta</h3>

                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="text-white btn m-1"
                        onClick={toggleDropdown}
                    >
                        {dropdownText}
                    </div>

                    {isOpen && (
                        <ul
                            tabIndex={0}
                            className="text-white dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                        >
                            <li>
                                <a
                                    onClick={() => handleSelect('CC')}
                                    className="cursor-pointer"
                                >
                                    CC
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => handleSelect('Nombre')}
                                    className="cursor-pointer"
                                >
                                    Nombre
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => handleSelect('Teléfono')}
                                    className="cursor-pointer"
                                >
                                    Teléfono
                                </a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            <label className="flex items-center gap-2 border border-black rounded-lg p-2 w-full max-w-md bg-transparent">
                <input
                    type="text"
                    className="text-sm p-1 flex-grow outline-none bg-transparent"
                    placeholder={`Buscar por ${filterBy}`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 flex-shrink-0"
                >
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            </label>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto mt-6">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">CC</th>
                            <th className="px-4 py-2 text-left">Nombre</th>
                            <th className="px-4 py-2 text-left">Teléfono</th>
                            <th className="px-4 py-2 text-left">Historia Clinica</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredClientes.map((cliente, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-4 py-2">{cliente.cc}</td>
                                <td className="px-4 py-2">{cliente.nombre}</td>
                                <td className="px-4 py-2">{cliente.telefono}</td>
                                <td className="px-4 py-2 text-center">
                                    <a href={`/historiaclinica`} className="text-blue-600 hover:underline">
                                        {cliente.historia}
                                    </a>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
