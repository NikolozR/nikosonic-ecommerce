import 'server-only'
 
const dictionaries = {
  en: () => import('./_dictionaries/en.json').then((module) => module.default),
  ka: () => import('./_dictionaries/ka.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: string) => {
 if (locale === 'en' || locale === 'ka') return dictionaries[locale]()
 else return 
}