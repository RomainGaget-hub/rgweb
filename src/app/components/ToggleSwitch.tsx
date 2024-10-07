// components/ToggleSwitch.tsx
import React from 'react';

const ToggleSwitch = ({ toggleTheme }: { toggleTheme: () => void }) => {
    return (
        <button onClick={toggleTheme}>
            Toggle Theme
        </button>
    );
};

export default ToggleSwitch;
