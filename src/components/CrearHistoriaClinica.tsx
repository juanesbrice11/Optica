'use client'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'



export default function HistoriaClinica() {
    return (
        <form>
            <div className="space-y-12 text-black p-10 flex-grow lg:mx-20">

                <div className="border-b border-gray-900/10 pb-12">
                    <h1 className="text-base/7 font-bold text-gray-900">Historia Clinica</h1>
                    <h3 className="text-base/7 font-semibold text-gray-900">Informacion Personal</h3>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-9">
                        <div className="sm:col-span-3">
                            <label htmlFor="street" className="block text-sm/6 font-medium text-gray-900">
                                Documento*
                            </label>
                            <div className="mt-2">
                                <input
                                    id="street"
                                    name="street"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="entity" className="block text-sm/6 font-medium text-gray-900">
                                Entidad
                            </label>
                            <div className="mt-2">
                                <input
                                    id="entity"
                                    name="entity"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="time" className="block text-sm font-medium text-gray-900">
                                Hora
                            </label>
                            <div className="mt-2">
                                <select
                                    id="time"
                                    name="time"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                                >
                                    {[...Array(24)].map((_, hour) => (
                                        <>
                                            <option key={`${hour}-00`} value={`${hour}:00`}>
                                                {`${hour.toString().padStart(2, "0")}:00`}
                                            </option>
                                            <option key={`${hour}-30`} value={`${hour}:30`}>
                                                {`${hour.toString().padStart(2, "0")}:30`}
                                            </option>
                                        </>
                                    ))}
                                </select>
                            </div>
                        </div>


                        <div className="sm:col-span-3">
                            <label htmlFor="date" className="block text-sm font-medium text-gray-900">
                                Fecha
                            </label>
                            <div className="mt-2">
                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="street" className="block text-sm/6 font-medium text-gray-900">
                                Telefono*
                            </label>
                            <div className="mt-2">
                                <input
                                    id="street"
                                    name="street"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="street" className="block text-sm/6 font-medium text-gray-900">
                                Dirección                            </label>
                            <div className="mt-2">
                                <input
                                    id="street"
                                    name="street"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="age" className="block text-sm font-medium text-gray-900">
                                Edad
                            </label>
                            <div className="mt-2">
                                <select
                                    id="age"
                                    name="age"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                                >
                                    <option value="">Selecciona tu edad</option>
                                    {[...Array(100).keys()].map((age) => (
                                        <option key={age + 1} value={age + 1}>
                                            {age + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                Nombre*
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                                Apellido
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Correo electronico
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <h3 className="col-span-full text-base/7 font-semibold text-gray-900 ">Agudeza Visual</h3>

                        <table className="col-span-full min-w-full table-auto border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border border-gray-300">Tipo</th>
                                    <th className="px-4 py-2 border border-gray-300">VL</th>
                                    <th className="px-4 py-2 border border-gray-300">VL-CC</th>
                                    <th className="px-4 py-2 border border-gray-300">VP</th>
                                    <th className="px-4 py-2 border border-gray-300">VP-CC</th>
                                    <th className="px-4 py-2 border border-gray-300">PH</th>

                                </tr>
                            </thead>
                            <tbody>
                                {['OD', 'OI', 'AO'].map((tipo, index) => (
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
                                        <td className="px-4 py-2 border border-gray-300">
                                            <input className="w-full bg-transparent focus:outline-none" type="text" placeholder="..." />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="exam" className="block text-sm/6 font-medium text-gray-900">
                        Examen externo
                    </label>
                    <div className="mt-2">
                        <input
                            id="exam"
                            name="exam"
                            type="exam"
                            autoComplete="exam"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                    <div className="sm:col-span-2">
                        <label htmlFor="oftalmoscopia" className="block text-sm font-medium text-gray-900 mb-2">
                            Oftalmoscopia
                        </label>

                        <div>
                            <label htmlFor="oftalmoscopia-od" className="block text-sm font-medium text-gray-900">
                                OD
                            </label>
                            <div className="my-2">
                                <input
                                    id="oftalmoscopia-od"
                                    name="oftalmoscopia-od"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>

                            <label htmlFor="oftalmoscopia-oi" className="block text-sm font-medium text-gray-900">
                                OI
                            </label>
                            <div className="mt-2">
                                <input
                                    id="oftalmoscopia-oi"
                                    name="oftalmoscopia-oi"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="quetatometría" className="block text-sm font-medium text-gray-900 mb-2">
                            Queratometría
                        </label>

                        <div>
                            <label htmlFor="quetatometría-od" className="block text-sm font-medium text-gray-900">
                                OD
                            </label>
                            <div className="my-2">
                                <input
                                    id="quetatometría-od"
                                    name="quetatometría-od"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>

                            <label htmlFor="quetatometría-oi" className="block text-sm font-medium text-gray-900">
                                OI
                            </label>
                            <div className="mt-2">
                                <input
                                    id="quetatometría-oi"
                                    name="quetatometría-oi"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="subjetivo" className="block text-sm font-medium text-gray-900 mb-2">
                            Subjetivo
                        </label>

                        <div>
                            <label htmlFor="subjetivo-od" className="block text-sm font-medium text-gray-900">
                                OD
                            </label>
                            <div className="my-2">
                                <input
                                    id="subjetivo-od"
                                    name="subjetivo-od"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>

                            <label htmlFor="subjetivo-oi" className="block text-sm font-medium text-gray-900">
                                OI
                            </label>
                            <div className="mt-2">
                                <input
                                    id="subjetivo-oi"
                                    name="subjetivo-oi"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="rx-final" className="block text-sm font-medium text-gray-900 mb-2">
                            Rx Final
                        </label>

                        <div>
                            <label htmlFor="rx-final-od" className="block text-sm font-medium text-gray-900">
                                OD
                            </label>
                            <div className="my-2">
                                <input
                                    id="rx-final-od"
                                    name="rx-final-od"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>

                            <label htmlFor="rx-final-oi" className="block text-sm font-medium text-gray-900">
                                OI
                            </label>
                            <div className="mt-2">
                                <input
                                    id="rx-final-oi"
                                    name="rx-final-oi"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="Add" className="block text-sm font-medium text-gray-900 mb-2">
                            Add
                        </label>

                        <div>
                            <label htmlFor="add-od" className="block text-sm font-medium text-gray-900">
                                ---
                            </label>
                            <div className="my-2">
                                <input
                                    id="add-od"
                                    name="add-od"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>

                            <label htmlFor="add-oi" className="block text-sm font-medium text-gray-900">
                                ---
                            </label>
                            <div className="mt-2">
                                <input
                                    id="add-oi"
                                    name="add-oi"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>




                <div className="sm:col-span-4">
                    <label htmlFor="diagnostico" className="block text-sm/6 font-medium text-gray-900">
                        Diagnóstico
                    </label>
                    <div className="mt-2">
                        <input
                            id="diagnostico"
                            name="diagnostico"
                            type="diagnostico"
                            autoComplete="diagnostico"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="observaciones" className="block text-sm/6 font-medium text-gray-900">
                        Observaciones
                    </label>
                    <div className="mt-2">
                        <input
                            id="observaciones"
                            name="observaciones"
                            type="observaciones"
                            autoComplete="observaciones"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="conducta" className="block text-sm/6 font-medium text-gray-900">
                        Conducta
                    </label>
                    <div className="mt-2">
                        <input
                            id="conducta"
                            name="conducta"
                            type="conducta"
                            autoComplete="conducta"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm/6 font-semibold text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </div>


        </form>
    )
}
