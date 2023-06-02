export type TAddUniqueNumberFunction = (set: Set<number>) => number;

export type TGenerateUniqueNumberFunction = (collection: Map<number, any> | Set<number>) => number;

export type TAddUniqueNumberFactory = (generateUniqueNumber: TGenerateUniqueNumberFunction) => TAddUniqueNumberFunction;

export type TCacheFactory = (lastNumberWeakMap: WeakMap<Map<number, any> | Set<number>, number>) => TCacheFunction;

export type TCacheFunction = (collection: Map<number, any> | Set<number>, nextNumber: number) => number;

export type TGenerateUniqueNumberFactory = (
	cache: TCacheFunction,
	lastNumberWeakMap: WeakMap<Map<number, any> | Set<number>, number>
) => TGenerateUniqueNumberFunction;
