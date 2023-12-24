import type { I18n, Diff } from '../type'

const locale =
{
	'What is {0}?': 'Qu\'est-ce que {0} ?',
	'Visit our website': 'Visite notre site web',
	'Join our Discord': 'Rejoins notre Discord',
	'You like games? This platform will be a way to make accessible to all our members a number of games in a few clicks without having to download anything!':
		'Vous aimez les jeux ? Cette plateforme sera un moyen de rendre accessible à tous nos membres un certains nombres de jeux en quelques clics sans avoir à télécharger quoi que ce soit !',
	'A platform of games between friends allowing you to create your lobby and to share a moment together on a list of games and tools that we created and/or curated':
		'Une plateforme de jeux entre amis vous permettant de créer votre lobby et de partager un moment ensemble sur une liste de jeux et d\'outils que nous avons créés et/ou sélectionnés',
} as const

// Static type check
export default locale satisfies
	// Check for missing keys:
	Readonly<Record<Diff<keyof I18n, keyof typeof locale>, string>> &
	// Check for extra keys:
	Readonly<Record<Diff<keyof typeof locale, keyof I18n>, never>>
