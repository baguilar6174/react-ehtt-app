import { v4 as uuidv4 } from 'uuid';

export enum Category {
	EMPLOYEE = 'EMPLOYEE',
	MANAGER = 'MANAGER'
}

export interface Person {
	id: string;
	name: string;
	category: Category;
	company: string;
	happinessLevel: number;
	companyLogo?: string;
}

export const DATA: Person[] = [
	{
		id: uuidv4(),
		name: 'Kerwinn Yerlett',
		category: Category.EMPLOYEE,
		company: 'Flashpoint',
		happinessLevel: 90,
		companyLogo: '/apple.svg'
	},
	{
		id: uuidv4(),
		name: 'Donnie Goade',
		category: Category.EMPLOYEE,
		company: 'Yakijo',
		happinessLevel: 81,
		companyLogo: '/apple.svg'
	},
	{
		id: uuidv4(),
		name: 'Christean Zanolli',
		category: Category.MANAGER,
		company: 'Mudo',
		happinessLevel: 69,
		companyLogo: '/nodejs.svg'
	},
	{
		id: uuidv4(),
		name: 'Oliviero Gummie',
		category: Category.MANAGER,
		company: 'Voomm',
		happinessLevel: 13,
		companyLogo: '/vite.svg'
	},
	{
		id: uuidv4(),
		name: 'Shannon Lattos',
		category: Category.MANAGER,
		company: 'Lazzy',
		happinessLevel: 81,
		companyLogo: '/firefox.svg'
	},
	{
		id: uuidv4(),
		name: 'Carolus Czaja',
		category: Category.MANAGER,
		company: 'Photobug',
		happinessLevel: 39,
		companyLogo: '/zoom.svg'
	},
	{
		id: uuidv4(),
		name: 'Babbie Bridie',
		category: Category.MANAGER,
		company: 'Edgeblab',
		happinessLevel: 36,
		companyLogo: '/google.svg'
	},
	{
		id: uuidv4(),
		name: 'Ruprecht Greste',
		category: Category.MANAGER,
		company: 'Divavu',
		happinessLevel: 68,
		companyLogo: '/notion.svg'
	},
	{
		id: uuidv4(),
		name: 'Devonna Lilleyman',
		category: Category.EMPLOYEE,
		company: 'Eazzy',
		happinessLevel: 71,
		companyLogo: '/firefox.svg'
	},
	{
		id: uuidv4(),
		name: 'Libbi Hankins',
		category: Category.MANAGER,
		company: 'Zoomzone',
		happinessLevel: 3,
		companyLogo: '/google.svg'
	},
	{
		id: uuidv4(),
		name: 'Felicity Falkous',
		category: Category.MANAGER,
		company: 'Thoughtstorm',
		happinessLevel: 74,
		companyLogo: '/zoom.svg'
	},
	{
		id: uuidv4(),
		name: 'Wallis Ortsmann',
		category: Category.EMPLOYEE,
		company: 'Quinu',
		happinessLevel: 14,
		companyLogo: '/notion.svg'
	},
	{
		id: uuidv4(),
		name: 'Loella Margerrison',
		category: Category.MANAGER,
		company: 'Twitterworks',
		happinessLevel: 92,
		companyLogo: '/firefox.svg'
	},
	{
		id: uuidv4(),
		name: 'Gregg Petrusch',
		category: Category.EMPLOYEE,
		company: 'Kanoodle',
		happinessLevel: 30,
		companyLogo: '/apple.svg'
	},
	{
		id: uuidv4(),
		name: 'Mariann Langsdon',
		category: Category.EMPLOYEE,
		company: 'Voolith',
		happinessLevel: 45,
		companyLogo: '/nodejs.svg'
	},
	{
		id: uuidv4(),
		name: 'Tara Rennie',
		category: Category.MANAGER,
		company: 'Thoughtworks',
		happinessLevel: 90,
		companyLogo: '/apple.svg'
	},
	{
		id: uuidv4(),
		name: 'Elbertina Dahler',
		category: Category.MANAGER,
		company: 'Shuffledrive',
		happinessLevel: 61,
		companyLogo: '/firefox.svg'
	},
	{
		id: uuidv4(),
		name: 'Paige Luberto',
		category: Category.EMPLOYEE,
		company: 'Vidoo',
		happinessLevel: 21,
		companyLogo: '/apple.svg'
	},
	{
		id: uuidv4(),
		name: 'Bayard Gentery',
		category: Category.EMPLOYEE,
		company: 'Twinte',
		happinessLevel: 14,
		companyLogo: '/firefox.svg'
	},
	{
		id: uuidv4(),
		name: 'Wilhelmina Sillars',
		category: Category.MANAGER,
		company: 'Skinix',
		happinessLevel: 51,
		companyLogo: '/vite.svg'
	},
	{
		id: uuidv4(),
		name: 'Winna Sepey',
		category: Category.MANAGER,
		company: 'Skinte',
		happinessLevel: 45,
		companyLogo: '/apple.svg'
	},
	{
		id: uuidv4(),
		name: 'Donalt Chanter',
		category: Category.MANAGER,
		company: 'Mita',
		happinessLevel: 9,
		companyLogo: '/firefox.svg'
	},
	{
		id: uuidv4(),
		name: 'Chrysa Mundow',
		category: Category.MANAGER,
		company: 'Youtags',
		happinessLevel: 69,
		companyLogo: '/zoom.svg'
	},
	{
		id: uuidv4(),
		name: 'Pammy Basile',
		category: Category.EMPLOYEE,
		company: 'Kwideo',
		happinessLevel: 40,
		companyLogo: '/google.svg'
	},
	{
		id: uuidv4(),
		name: 'Drud Banfill',
		category: Category.MANAGER,
		company: 'Youbridge',
		happinessLevel: 44,
		companyLogo: '/vite.svg'
	},
	{
		id: uuidv4(),
		name: 'Dolores Eubank',
		category: Category.MANAGER,
		company: 'Babblestorm',
		happinessLevel: 88,
		companyLogo: '/firefox.svg'
	},
	{
		id: uuidv4(),
		name: 'Andrus Thurlborn',
		category: Category.MANAGER,
		company: 'Demizz',
		happinessLevel: 46,
		companyLogo: '/vite.svg'
	},
	{
		id: uuidv4(),
		name: 'Pierrette Baddow',
		category: Category.EMPLOYEE,
		company: 'Dabtype',
		happinessLevel: 79,
		companyLogo: '/nodejs.svg'
	},
	{
		id: uuidv4(),
		name: 'Gavan Kunc',
		category: Category.EMPLOYEE,
		company: 'Jabbersphere',
		happinessLevel: 48,
		companyLogo: '/notion.svg'
	},
	{
		id: uuidv4(),
		name: 'Stu Culcheth',
		category: Category.EMPLOYEE,
		company: 'Fadeo',
		happinessLevel: 51,
		companyLogo: '/firefox.svg'
	},
	{
		id: uuidv4(),
		name: 'Zorine Goldsby',
		category: Category.MANAGER,
		company: 'Riffpath',
		happinessLevel: 28,
		companyLogo: '/vite.svg'
	},
	{
		id: uuidv4(),
		name: 'Timmie Rickersey',
		category: Category.EMPLOYEE,
		company: 'Chatterpoint',
		happinessLevel: 5,
		companyLogo: '/firefox.svg'
	},
	{
		id: uuidv4(),
		name: 'Perry Buncher',
		category: Category.MANAGER,
		company: 'Bluezoom',
		happinessLevel: 75,
		companyLogo: '/zoom.svg'
	},
	{
		id: uuidv4(),
		name: 'Marita Claye',
		category: Category.MANAGER,
		company: 'Fivebridge',
		happinessLevel: 46,
		companyLogo: '/vite.svg'
	},
	{
		id: uuidv4(),
		name: 'Susanne Durram',
		category: Category.MANAGER,
		company: 'Zooveo',
		happinessLevel: 29,
		companyLogo: '/apple.svg'
	},
	{
		id: uuidv4(),
		name: 'Carlie Whitechurch',
		category: Category.MANAGER,
		company: 'Zoovu',
		happinessLevel: 64,
		companyLogo: '/apple.svg'
	},
	{
		id: uuidv4(),
		name: 'Merill Waddell',
		category: Category.MANAGER,
		company: 'Zooxo',
		happinessLevel: 17,
		companyLogo: '/vite.svg'
	},
	{
		id: uuidv4(),
		name: 'Sigmund Dawidowsky',
		category: Category.MANAGER,
		company: 'Miboo',
		happinessLevel: 85,
		companyLogo: '/firefox.svg'
	},
	{
		id: uuidv4(),
		name: 'Marissa Christene',
		category: Category.MANAGER,
		company: 'LiveZ',
		happinessLevel: 60,
		companyLogo: '/firefox.svg'
	},
	{
		id: uuidv4(),
		name: 'Torin Ledamun',
		category: Category.MANAGER,
		company: 'Zooveo',
		happinessLevel: 3,
		companyLogo: '/vite.svg'
	},
	{
		id: uuidv4(),
		name: 'Davidson Dunniom',
		category: Category.EMPLOYEE,
		company: 'Tagopia',
		happinessLevel: 67,
		companyLogo: '/zoom.svg'
	},
	{
		id: uuidv4(),
		name: 'Frederico Sorrell',
		category: Category.EMPLOYEE,
		company: 'Cogidoo',
		happinessLevel: 31,
		companyLogo: '/notion.svg'
	},
	{
		id: uuidv4(),
		name: 'Paulie Kenwell',
		category: Category.EMPLOYEE,
		company: 'Mynte',
		happinessLevel: 5,
		companyLogo: '/nodejs.svg'
	},
	{
		id: uuidv4(),
		name: 'Kellyann Ollivierre',
		category: Category.EMPLOYEE,
		company: 'Katz',
		happinessLevel: 10,
		companyLogo: '/nodejs.svg'
	},
	{
		id: uuidv4(),
		name: 'Evvie Malins',
		category: Category.EMPLOYEE,
		company: 'Riffpedia',
		happinessLevel: 40,
		companyLogo: '/notion.svg'
	},
	{
		id: uuidv4(),
		name: 'Tomas Kinghorne',
		category: Category.MANAGER,
		company: 'Vinte',
		happinessLevel: 36,
		companyLogo: '/notion.svg'
	},
	{
		id: uuidv4(),
		name: 'Thoma Petrol',
		category: Category.MANAGER,
		company: 'Photobean',
		happinessLevel: 73,
		companyLogo: '/notion.svg'
	},
	{
		id: uuidv4(),
		name: 'Gay Gallihaulk',
		category: Category.MANAGER,
		company: 'Browsecat',
		happinessLevel: 85,
		companyLogo: '/firefox.svg'
	}
];
