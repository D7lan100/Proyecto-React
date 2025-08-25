import {useState,  useEffect} from 'react'

export default function Card() {

    const  [darkMode, setDarkMode] = useState(false);


    const toggleTheme = () =>  setDarkMode(!darkMode);



    return (

        <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg">
            <img src="https://i.pravatar.cc/150?img=3" alt="avatar" className="rounded-full w-32 h-32 mx-auto" />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 text-center"> ANA GOMEZ</h2>
            <p  className="mt-2 text-gray-600 text-center">Desarrolladora Front-end  apasionada por React y el diseño UI/UX</p>
            <button onClick={toggleTheme} className={mt-4 px-4 py-2 rounded ${darkMode ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} transition duration-800}>
                cambiar tema
            </button>
        </div>
    );
}