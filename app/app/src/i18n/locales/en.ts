const defaultLocale =
[
	'What is {0}?',
	'Visit our website',
	'Join our Discord',
	'You like games? This platform will be a way to make accessible to all our members a number of games in a few clicks without having to download anything!',
	'A platform of games between friends allowing you to create your lobby and to share a moment together on a list of games and tools that we created and/or curated',
] as const

type Keys = typeof defaultLocale[number]
type Type = { [key in Keys]: key }

// Default locale uses the key as the value
const locale = defaultLocale
	.reduce<Type>((acc, key) =>
		{
			(acc as any)[key] = key
			return acc
		},
		{} as Type,
	)

export default locale as Readonly<typeof locale>
