import React, { useState } from 'react';
import diseases from '../data/diseaseinfo.json'; // Adjust the path if needed

export default function Healthcare() {
  const [selectedDisease, setSelectedDisease] = useState(null);

  const openModal = (disease) => {
    setSelectedDisease(disease);
  };

  const closeModal = () => {
    setSelectedDisease(null);
  };

  return (
    <>
      {/* Gallery Section */}
      <section className="py-8 bg-gray-50">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-screen-xl mx-auto">
          {diseases.map((disease) => (
            <div
              key={disease.name}
              className="cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => openModal(disease)}
            >
              <img src={disease.image} alt={disease.name} className="w-full h-40 object-cover rounded-lg" />
              <p className="text-center mt-2 text-lg font-medium text-gray-800">{disease.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedDisease && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-600"
              onClick={closeModal}
            >
              X
            </button>
            <img src={selectedDisease.image} alt={selectedDisease.name} className="w-full h-56 object-cover rounded-lg" />
            <h2 className="text-2xl font-semibold mt-4">{selectedDisease.name}</h2>
            
            <div className="text-gray-700 mt-4 space-y-4 max-h-80 overflow-y-auto">
              {/* Render symptoms */}
              <div>
                <h3 className="text-lg font-semibold">Symptoms</h3>
                <ul className="list-disc list-inside">
                  {selectedDisease.symptoms.map((symptom, idx) => (
                    <li key={idx}>{symptom}</li>
                  ))}
                </ul>
              </div>

              {/* Render preventive measures */}
              <div>
                <h3 className="text-lg font-semibold">Preventive Measures</h3>
                <ul className="list-disc list-inside">
                  {selectedDisease.preventive_measures.map((measure, idx) => (
                    <li key={idx}>{measure}</li>
                  ))}
                </ul>
              </div>

              {/* Render complication prevention */}
              <div>
                <h3 className="text-lg font-semibold">Complication Prevention</h3>
                <ul className="list-disc list-inside">
                  {selectedDisease.complication_prevention.map((prevention, idx) => (
                    <li key={idx}>{prevention}</li>
                  ))}
                </ul>
              </div>

              {/* Render tips */}
              <div>
                <h3 className="text-lg font-semibold">Tips</h3>
                <ul className="list-disc list-inside">
                  {selectedDisease.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
