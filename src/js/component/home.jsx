import React, { useState } from "react";


const Home = () => {
	const [color, setColor] = useState('red');


	const cambioDeColor = () => {
		if (color === 'red') {
			setColor('yellow');
		} else if (color === 'yellow') {
			setColor('green');
		} else if (color === 'green') {
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
				<button className={color === 'purple' ? 'purple light morado' : 'purple light'} onClick={() => setColor('purple')}>{color !== 'purple' && 'Morado'}</button>
				
			</div>
			<button className="pulsador" onClick={cambioDeColor}>Cambiar color</button>
		</>
	);
};

export default Home;
