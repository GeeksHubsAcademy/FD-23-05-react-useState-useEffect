const CharacterCard = ({ name, image }: any) => {
	return (
		<>
			<h1>{name}</h1>
			<img src={image} alt="" />
		</>
	);
};

export default CharacterCard;
