export enum Category {
	EMPLOYEE = 'EMPLOYEE',
	MANAGER = 'MANAGER'
}

export interface Person {
	name: string;
	category: Category;
	company: string;
	happinessLevel: number;
	companyLogo?: string;
}

export const DATA: Person[] = [
	{
		name: 'Bryan',
		category: Category.EMPLOYEE,
		company: 'Galileo',
		happinessLevel: 5,
		companyLogo: '/vite.svg'
	},
	{
		name: 'Alexander',
		category: Category.MANAGER,
		company: 'ioet',
		happinessLevel: 8
	},
	{
		name: 'Jhon',
		category: Category.EMPLOYEE,
		company: 'eiteck',
		happinessLevel: 3
	},
	{
		name: 'Zeta',
		category: Category.EMPLOYEE,
		company: 'shapepa',
		happinessLevel: 2
	}
];
