'use client'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Formula() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            {/* El contenedor del formulario tiene la clase .printable */}
            <form className="printable">
                <div className="space-y-12 text-black p-10 flex-grow lg:mx-20">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h1 className="text-lg font-bold text-gray-900">Formula</h1>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-9">
                            <div className="sm:col-span-3">
                                <label htmlFor="street" className="block text-sm font-medium text-gray-900">
                                    Documento*
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="street"
                                        name="street"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                    Nombre Completo*
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <h3 className="col-span-full text-lg font-semibold text-gray-900 ">RX</h3>
                            <table className="col-span-full min-w-full table-auto border-collapse border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 border border-gray-300"></th>
                                        <th className="px-4 py-2 border border-gray-300">Esfera</th>
                                        <th className="px-4 py-2 border border-gray-300">Cilindro</th>
                                        <th className="px-4 py-2 border border-gray-300">Eje</th>
                                        <th className="px-4 py-2 border border-gray-300">Adición</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {['OD', 'OI'].map((tipo, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-2 border border-gray-300">{tipo}</td>
                                            <td className="px-4 py-2 border border-gray-300">
                                                <input className="w-full bg-transparent focus:outline-none" type="text" placeholder="..." />
                                            </td>
                                            <td className="px-4 py-2 border border-gray-300">
                                                <input className="w-full bg-transparent focus:outline-none" type="text" placeholder="..." />
                                            </td>
                                            <td className="px-4 py-2 border border-gray-300">
                                                <input className="w-full bg-transparent focus:outline-none" type="text" placeholder="..." />
                                            </td>
                                            <td className="px-4 py-2 border border-gray-300">
                                                <input className="w-full bg-transparent focus:outline-none" type="text" placeholder="..." />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-9">
                            <div className="sm:col-span-3">
                                <label htmlFor="street" className="block text-sm font-medium text-gray-900">
                                    DP
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="street"
                                        name="street"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                    ALT
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                    Control
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                Observaciones
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botón de impresión solo visible en pantalla */}
                <button onClick={handlePrint} className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md no-print">
                    Imprimir
                </button>
            </form>

            {/* Estilos para la impresión */}
            <style>
                {`
                  @media print {
                    @page {
                      size: A4;
                      margin: 20mm;
                    }

                    body {
                      visibility: hidden;
                    }

                    .printable, .printable * {
                      visibility: visible;
                    }

                    .printable {
                      transform: scale(0.8); /* Ajustar el contenido a una página */
                      margin: 0 auto;
                      width: 100%;
                    }

                    .no-print {
                      display: none;
                    }

                    table, th, td {
                      font-size: 10px;
                    }

                    input {
                      font-size: 10px;
                    }
                  }
                `}
            </style>
        </>
    );
}
