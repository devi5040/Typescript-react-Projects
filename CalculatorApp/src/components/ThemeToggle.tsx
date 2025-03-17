import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { grey } from '@mui/material/colors';
import { useState } from 'react';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
    const toggleHandler = () => {
        if (isDarkMode === false)
            document.querySelector('html')?.classList.add('dark');
        else
            document.querySelector('html')?.classList.remove('dark')
        setIsDarkMode(currentMode => !currentMode)
    }
    return <div className="flex justify-center items-center my-16 sm:my-6">
        <div className='flex gap-5 border dark:border-gray-200 px-5 py-2 rounded-full'>
            <p onClick={toggleHandler} className='cursor-pointer '>{isDarkMode ? (<LightModeIcon sx={{ color: grey[500] }} />) : (<LightModeIcon />)}</p>
            <p onClick={toggleHandler} className='cursor-pointer'>{isDarkMode ? (<DarkModeIcon sx={{ color: 'white' }} />) : (<DarkModeIcon sx={{ color: grey[400] }} />)}</p>
        </div>
    </div>
}

export default ThemeToggle;