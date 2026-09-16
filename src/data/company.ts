export const company = {
	name: 'Blueberry Digital Services',
	shortName: 'Blueberry',
	tagline: 'Conseil en informatique et numérique',
	email: 'contact@blueberryds.com',
	phoneDisplay: '06 71 17 47 78',
	phoneLink: 'tel:+33671174778',
	whatsapp: 'https://api.whatsapp.com/send?phone=+33671174778',
	linkedin: 'https://www.linkedin.com/company/blueberry-digital-services/',
	address: {
		line1: 'E. Space Park, Bâtiment D',
		line2: '45 allée des Ormes',
		postcode: '06254',
		city: 'Mougins',
		country: 'France',
	},
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
	`${company.address.line1} ${company.address.line2} ${company.address.postcode} ${company.address.city}`
)}`;

export const sectors = [
	{
		icon: '🚗',
		name: 'Automobile',
		description:
			'Systèmes embarqués, connectivité et logiciels critiques pour les acteurs de la mobilité.',
	},
	{
		icon: '✈️',
		name: 'Aérien',
		description:
			'Systèmes avioniques, logiciels embarqués et outils de simulation pour l’aéronautique.',
	},
	{
		icon: '🛡️',
		name: 'Défense',
		description:
			'Projets exigeants où la robustesse, la sûreté de fonctionnement et la confidentialité priment.',
	},
	{
		icon: '🛰️',
		name: 'Espace',
		description:
			'Logiciels sol et bord, traitement de données satellitaires et outils de simulation.',
	},
	{
		icon: '📡',
		name: 'Télécommunications',
		description:
			'Réseaux, protocoles et plateformes capables d’encaisser la montée en charge.',
	},
] as const;
