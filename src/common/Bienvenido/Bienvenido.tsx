import './Bienvenido.css'

interface BienvenidoText {
	name?: string;
	lastname?: string;
}

const Bienvenido = (props: BienvenidoText) => {
	return (
		<>
    <div className="profile">
			<div>Nombre: {props.name}</div>
			<div>Lastname: {props.lastname}</div>
    </div>
		</>
	);
};

export default Bienvenido;
