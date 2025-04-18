import React from 'react'
import { Link } from 'react-router-dom'

export default function Departments() {
    return (
        <>
            <h1 className="text-2xl font-bold text-center my-4">Hospital Departments</h1>

            <div className="departments-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                <section className="department text-center shadow p-4 rounded bg-white">
                    <h2 className="text-xl font-semibold mb-2">Cardiology</h2>
                    <Link to="/cardiology">
                        <img src="/images/cardiology.jpg" alt="Cardiology Department" className="w-full h-40 object-cover rounded" />
                    </Link>
                    <p className="mt-2">Here's the story of a lovely lady, who was bringing up three very lovely...</p>
                </section>

                <section className="department text-center shadow p-4 rounded bg-white">
                    <h2 className="text-xl font-semibold mb-2">Dental</h2>
                    <Link to="/dental">
                        <img src="/images/dental.jpeg" alt="Dental Department" className="w-full h-40 object-cover rounded" />
                    </Link>
                    <p className="mt-2">We never thought of finding a place where we belong. Don't have to stand...</p>
                </section>

                <section className="department text-center shadow p-4 rounded bg-white">
                    <h2 className="text-xl font-semibold mb-2">Neurology</h2>
                    <Link to="/neurology">
                        <img src="/images/neurologybg.jpg" alt="Neurology Department" className="w-full h-40 object-cover rounded" />
                    </Link>
                    <p className="mt-2">You unlock this door with the key of imagination. Beyond it is another dimension...</p>
                </section>

                <section className="department text-center shadow p-4 rounded bg-white">
                    <h2 className="text-xl font-semibold mb-2">Dermatology</h2>
                    <Link to="/dermatology">
                        <img src="/images/Dermatology.jpeg" alt="Dermatology Department" className="w-full h-40 object-cover rounded" />
                    </Link>
                    <p className="mt-2">They're creepy and they're kooky, mysterious and spooky...</p>
                </section>
            </div>
        </>
    )
}
