import { useState } from 'react';

export default function Home() {
  const [scene, setScene] = useState('start');
  const [popularity, setPopularity] = useState(50);
  const [corruption, setCorruption] = useState(0);

  const handleChoice = (choice) => {
    if (choice === 'buildú') {
      setPopularity(popularity - 20);
      setCorruption(corruption + 10);
    } else if (choice === 'yolundia') {
      setPopularity(popularity + 5);
    } else if (choice === 'feijasco') {
      setPopularity(popularity - 30);
      setCorruption(corruption + 5);
    } else {
      setCorruption(corruption + 50);
    }
    setScene('end');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Simulador Político</h1>
      {scene === 'start' && (
        <>
          <p className="mb-4 text-center">
            Has ganado las elecciones. ¿A quién llamas primero para pactar?
          </p>
          <div className="flex flex-col gap-2">
            <button onClick={() => handleChoice('buildú')} className="bg-yellow-500 rounded px-4 py-2">📞 Llamar a Buildú</button>
            <button onClick={() => handleChoice('yolundia')} className="bg-red-500 rounded px-4 py-2">📞 Llamar a Yolundia</button>
            <button onClick={() => handleChoice('feijasco')} className="bg-blue-500 rounded px-4 py-2">📞 Llamar a Feijasco</button>
            <button onClick={() => handleChoice('ia')} className="bg-purple-600 rounded px-4 py-2">📡 Pactar con una IA</button>
          </div>
        </>
      )}
      {scene === 'end' && (
        <div className="text-center">
          <p className="mb-2">📊 Popularidad: {popularity}</p>
          <p className="mb-4">💼 Corrupción: {corruption}</p>
          <p>Fin del primer capítulo.</p>
        </div>
      )}
    </div>
  );
}
