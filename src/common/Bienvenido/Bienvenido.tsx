import './Bienvenido.css'

interface BienvenidoText {
	name?: string;
	lastname?: string;
}

const Bienvenido = ({ name, lastname }: BienvenidoText) => {
	return (
		<>
    <div className="profile">
			<div>Nombre: { name }</div>
			<div>Lastname: { lastname }</div>
    </div>
		</>
	);
};

export default Bienvenido;
