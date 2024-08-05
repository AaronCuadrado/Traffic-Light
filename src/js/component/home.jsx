import React, { useState } from "react";


const Home = () => {
	const [color, setColor] = useState('red');

	const [showPurple, setShowPurple] = useState(false);

	const cambioDeColor = () => {
		if (color === 'red') {
			setColor('yellow');
		} else if (color === 'yellow') {
			setColor('green');
		} else if (color === 'green') {
			if (showPurple) {
				setColor ('purple');
			} else {
				setColor ('red');
			}
		} else if (color === 'purple') {
			setColor('red');
		}
	};
	return (
		<>
			<div id="poste"></div>
			<div id="semaforo">
				<button className={color === 'red' ? 'red light rojo' : 'red light'} onClick={() => setColor('red')}></button>
				<button className={color === 'yellow' ? 'yellow light amarillo' : 'yellow light'} onClick={() => setColor('yellow')}></button>
				<button className={color === 'green' ? 'green light verde' : 'green light'} onClick={() => setColor('green')}></button>
				{showPurple && (
                    <button className={color === 'purple' ? 'purple light moradito' : 'purple light'} onClick={() => setColor('purple')}></button>
                )}
				
			</div>
			<button className="pulsador" onClick={cambioDeColor}>Cambiar color</button>
			<button className="pulsador" onClick={() => setShowPurple(true)}>Añadir 4º color</button>
			<button className="pulsador" onClick={() => setShowPurple(false)}>Quitar 4º color</button>
		</>
	);
};

export default Home;
