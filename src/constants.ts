import { ContentModule, FaqItem, Testimonial } from './types';

export const CHECKOUT_URL = 'https://declicplus.mychariow.shop/prd_lyawvbla/checkout';

export const CURRENT_PRICE = '17,55 €';
export const REFERENCE_PRICE = '50 €';
export const SAVINGS = '32,45 €';

export const HEADLINE_VARIANTS = {
  A: 'ET SI LE VRAI PROBLÈME N’ÉTAIT PAS TON MANQUE DE DISCIPLINE ?',
  B: 'TU SAIS QUOI FAIRE. ALORS POURQUOI TU N’ARRIVES PAS À COMMENCER ?',
  C: 'ARRÊTE D’ATTENDRE LA MOTIVATION. APPRENDS À COMMENCER.',
};

export const CTA_VARIANTS = {
  A: 'JE VEUX COMMENCER MAINTENANT',
  B: 'JE VEUX ARRÊTER DE PROCRASTINER',
  C: 'JE VEUX LE MOTEUR DE L’ACTION',
};

export const CONTENT_MODULES: ContentModule[] = [
  {
    id: '01',
    number: '01',
    title: 'AUDIT DE PROCRASTINATION',
    tagline: 'Identifier les situations qui déclenchent tes reports',
    description: 'Une grille d’analyse ciblée pour cartographier avec précision les contextes, émotions et déclencheurs spécifiques qui te poussent systématiquement à remettre à plus tard.',
    category: 'Diagnostic',
  },
  {
    id: '02',
    number: '02',
    title: 'CARTE DES FRICTIONS',
    tagline: 'Repérer les obstacles mentaux, physiques, numériques et émotionnels',
    description: 'Déconstruis les 4 types de résistances invisibles qui paralysent ton passage à l’acte avant même que tu n’aies ouvert ton premier dossier.',
    category: 'Diagnostic',
  },
  {
    id: '03',
    number: '03',
    title: 'DÉMARRAGE DE 5 MINUTES',
    tagline: 'Réduire la résistance au premier mouvement',
    description: 'Le protocole cognitif éprouvé pour contourner l’inertie mentale en abaissant la barre d’entrée à un niveau impossible à refuser pour ton cerveau.',
    category: 'Action',
  },
  {
    id: '04',
    number: '04',
    title: 'BLOC D’ACTION DE 20 MINUTES',
    tagline: 'Créer une période d’exécution structurée',
    description: 'Apprends à canaliser un flux d’attention ininterrompu sans suffocation. Un créneau compact et intense qui élimine la sensation de submersion.',
    category: 'Focus',
  },
  {
    id: '05',
    number: '05',
    title: 'RÈGLE DE LA TÂCHE UNIQUE',
    tagline: 'Réduire la dispersion et le multitâche toxique',
    description: 'La méthode pour isoler une priorité nette et interdire le papillonnage mental responsable de la surcharge et de l’épuisement précoce.',
    category: 'Focus',
  },
  {
    id: '06',
    number: '06',
    title: 'AUDIT DES DISTRACTIONS',
    tagline: 'Identifier ce qui détourne ton attention',
    description: 'Passe au crible tes réflexes d’évitement (notifications, scroll compulsif, fausse urgence) pour assainir ton espace de travail physique et digital.',
    category: 'Diagnostic',
  },
  {
    id: '07',
    number: '07',
    title: 'TEST DE LA PEUR',
    tagline: 'Mettre des mots sur certains blocages',
    description: 'Peur de l’échec, perfectionnisme paralysant, peur d’être jugé : nomme exactement le signal émotionnel qui bloque ton élan pour désamorcer son emprise.',
    category: 'Résilience',
  },
  {
    id: '08',
    number: '08',
    title: 'PROTOCOLE DE REDÉMARRAGE',
    tagline: 'Reprendre après une journée ratée',
    description: 'Le filet de sécurité indispensable. Comment réagir immédiatement après une rechute ou une journée sans action sans sombrer dans l’abandon.',
    category: 'Résilience',
  },
  {
    id: '09',
    number: '09',
    title: 'SYSTÈME ZÉRO-JOUR-BLANC',
    tagline: 'Conserver un minimum d’action même lors des journées difficiles',
    description: 'La technique du plancher minimal garanti pour ne jamais laisser une journée se terminer sans un micro-mouvement, préservant ainsi ton momentum.',
    category: 'Régularité',
  },
  {
    id: '10',
    number: '10',
    title: 'CARTE D’ACTION QUOTIDIENNE',
    tagline: 'Savoir quoi faire chaque jour',
    description: 'Une fiche de cadrage matinale de 2 minutes pour démarrer ta journée avec une trajectoire limpide plutôt qu’en réaction passive.',
    category: 'Régularité',
  },
  {
    id: '11',
    number: '11',
    title: 'REVUE HEBDOMADAIRE',
    tagline: 'Observer ce qui fonctionne et ajuster',
    description: 'Un rituel de bilan en 5 questions directes pour célébrer les avancées, diagnostiquer les accrocs et réajuster tes curseurs pour la semaine suivante.',
    category: 'Régularité',
  },
  {
    id: '12',
    number: '12',
    title: 'DÉFI D’ACTION DE 30 JOURS',
    tagline: 'Construire une régularité visible',
    description: 'La feuille de route pas-à-pas pour ancrer durablement le réflexe du démarrage et transformer ton rapport à l’effort sans te brûler les ailes.',
    category: 'Régularité',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Amina K.',
    role: 'Lectrice vérifiée',
    quote: 'Ce guide m’a vraiment aidée à sortir de mon cycle de report. Le plan de 30 jours est simple et efficace !',
    rating: 5,
    avatarBg: 'from-amber-500 to-orange-600',
  },
  {
    id: '2',
    name: 'Yannick T.',
    role: 'Lecteur vérifié',
    quote: 'J’ai enfin compris que je n’étais pas paresseux. J’ai juste un meilleur système maintenant. Merci !',
    rating: 5,
    avatarBg: 'from-emerald-500 to-teal-600',
  },
  {
    id: '3',
    name: 'Laura M.',
    role: 'Lectrice vérifiée',
    quote: 'Des outils concrets, faciles à appliquer. Je vois déjà la différence dans ma productivité et ma confiance en moi.',
    rating: 5,
    avatarBg: 'from-sky-500 to-indigo-600',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: '1. Qu’est-ce que Le Moteur de l’Action ?',
    answer: 'Le Moteur de l’Action est un guide pratique anti-procrastination conçu pour t’aider à comprendre tes blocages, réduire la friction au démarrage et installer une régularité concrète dans tes projets au quotidien.',
  },
  {
    id: 'faq-2',
    question: '2. À qui s’adresse le guide ?',
    answer: 'Il s’adresse à toute personne qui sait ce qu’elle doit accomplir mais repousse régulièrement, accumule les tâches, culpabilise face au temps qui passe et cherche une méthode réaliste sans discours culpabilisant.',
  },
  {
    id: 'faq-3',
    question: '3. Est-ce un ebook ?',
    answer: 'C’est un produit numérique contenant plus de 30 pages de méthode structurée, enrichi d’outils prêts à l’emploi, d’exercices pratiques, de protocoles de démarrage et d’un plan d’action complet.',
  },
  {
    id: 'faq-4',
    question: '4. Que vais-je trouver à l’intérieur ?',
    answer: 'Tu trouveras 12 outils et modules complets : audits de procrastination et de distractions, la méthode des 5 minutes, le bloc d’action de 20 minutes, la règle de la tâche unique, le protocole de redémarrage, le système zéro-jour-blanc et le défi de 30 jours.',
  },
  {
    id: 'faq-5',
    question: '5. Comment fonctionne la méthode des 5 minutes ?',
    answer: 'Elle consiste à remplacer un objectif intimidant par un micro-geste physique ou mental de 5 minutes seulement. Le but initial n’est pas de finir, mais de franchir sans douleur la résistance psychologique du démarrage.',
  },
  {
    id: 'faq-6',
    question: '6. Combien de temps faut-il consacrer au système ?',
    answer: 'Le protocole est conçu pour s’adapter aux journées chargées : les premiers démarrages demandent seulement 5 à 20 minutes d’application ciblée par jour.',
  },
  {
    id: 'faq-7',
    question: '7. Est-ce adapté aux étudiants ?',
    answer: 'Oui. Le système est particulièrement adapté pour réviser sans attendre la veille des examens, rédiger des mémoires et gérer les périodes de révision intenses.',
  },
  {
    id: 'faq-8',
    question: '8. Est-ce adapté aux entrepreneurs ?',
    answer: 'Oui. Les entrepreneurs et freelances y trouvent un cadre solide pour vaincre l’inertie sur les tâches stratégiques ou administratives souvent différées faute de supérieur hiérarchique.',
  },
  {
    id: 'faq-9',
    question: '9. Est-ce adapté aux personnes qui travaillent ?',
    answer: 'Absolument. Il permet de gérer le travail accumulé, d’alléger la charge mentale après le travail et d’avancer sur des projets personnels le soir ou le week-end sans s’épuiser.',
  },
  {
    id: 'faq-10',
    question: '10. Que se passe-t-il si je rate une journée ?',
    answer: 'Tu ne recommences jamais à zéro. Le guide intègre expressément un "Protocole de Redémarrage" conçu pour neutraliser la culpabilité et reprendre le fil dès le lendemain.',
  },
  {
    id: 'faq-11',
    question: '11. Est-ce que les résultats sont garantis ?',
    answer: 'Non. Aucun guide ne peut faire le travail à ta place. Le système est conçu pour t’aider et te fournir les meilleurs outils, mais les résultats dépendent de ton application concrète.',
  },
  {
    id: 'faq-12',
    question: '12. Comment accéder au produit après l’achat ?',
    answer: 'Il s’agit d’un produit numérique à accès immédiat. Dès la validation de ta commande sur la page de paiement sécurisé, tu reçois directement ton accès pour consulter le guide sur smartphone, tablette ou ordinateur.',
  },
];
