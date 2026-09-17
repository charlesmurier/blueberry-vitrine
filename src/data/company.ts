import automobile from '../assets/illus/secteur-automobile.png';
import aerien from '../assets/illus/secteur-aerien.png';
import defense from '../assets/illus/secteur-defense.png';
import espace from '../assets/illus/secteur-espace.png';
import telecoms from '../assets/illus/secteur-telecommunications.png';

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
	{ illus: automobile, name: 'Automobile' },
	{ illus: aerien, name: 'Aérien' },
	{ illus: defense, name: 'Défense' },
	{ illus: espace, name: 'Espace' },
	{ illus: telecoms, name: 'Télécommunications' },
] as const;

/** Libellé court des secteurs, pour la fiche « en bref ». */
export const sectorsLabel = sectors.map((s) => s.name).join(' · ');
