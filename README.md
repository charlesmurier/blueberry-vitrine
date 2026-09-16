# Blueberry — site vitrine

Site vitrine de l'ESN Blueberry Digital Services, destiné à remplacer `blueberryds.com`.
Indépendant de `blueberry-platform`.

## Stack

- [Astro 7](https://astro.build) — site statique, aucun JavaScript côté client hormis le menu mobile.
- [Decap CMS](https://decapcms.org) — interface d'administration sur `/admin`, réservée à la rubrique actu.

## Développement

```sh
npm install
npm run dev        # http://localhost:4321
```

## Pages

| URL | Contenu |
| :-- | :-- |
| `/` | Héros, secteurs d'activité, 3 dernières actus, appel au recrutement |
| `/qui-sommes-nous` | Histoire, approche, valeurs |
| `/actus` | Liste des actualités |
| `/actus/<slug>` | Article : couverture, texte, galerie photos |
| `/nous-rejoindre` | Discours de recrutement et candidature spontanée |
| `/contact` | Coordonnées et liens directs |

Il n'y a volontairement **aucune offre d'emploi** sur le site : les candidatures se font
spontanément par email.

Les textes de l'entreprise et les coordonnées sont centralisés dans `src/data/company.ts`.
Les couleurs de la marque sont des variables CSS définies en tête de `src/styles/global.css`.

## Administration des actus

Les articles sont des fichiers Markdown dans `src/content/actus/`, éditables à la main ou via
`/admin`.

### Tester le CMS en local, sans rien déployer

Dans deux terminaux :

```sh
npx decap-server     # proxy local sur le port 8081
npm run dev
```

Puis ouvrir `http://localhost:4321/admin/index.html` et cliquer sur « Se connecter ».

> Le serveur de développement d'Astro ne redirige pas `/admin` vers `/admin/index.html` ;
> en local il faut donc l'URL complète. Sur un vrai hébergement, `/admin` fonctionne.

### Images

Les photos uploadées depuis le CMS vont dans `src/assets/actus/`, et **pas** dans `public/` :
c'est ce qui permet à Astro de les convertir en WebP et de générer plusieurs tailles. Les photos
d'origine sont recopiées telles quelles dans le build par une petite intégration déclarée dans
`astro.config.mjs`, sans quoi l'éditeur afficherait une image cassée à la place de la photo
déjà choisie.

Le CMS refuse les fichiers de plus de 3 Mo. Conseil à donner à l'éditeur : sur iPhone, utiliser
« Partager → Options → Taille réelle : Moyenne » avant d'envoyer une photo.

## Déploiement (à faire)

1. Pousser le dépôt sur GitHub.
2. Connecter Netlify : commande de build `npm run build`, dossier publié `dist`.
3. Activer Netlify Identity puis Git Gateway, et inviter l'éditeur par email — il se connectera
   alors sur `/admin` avec un simple email et mot de passe, sans compte GitHub.
4. Basculer le domaine `blueberryds.com` une fois le site validé, et mettre à jour `site` dans
   `astro.config.mjs`.

## Reste à faire

- **Mentions légales** : absentes de l'ancien site alors qu'elles sont obligatoires. Il faut la
  raison sociale, le SIRET, le directeur de la publication et l'hébergeur.

## Commandes

| Commande | Action |
| :-- | :-- |
| `npm install` | Installe les dépendances |
| `npm run dev` | Serveur local sur `localhost:4321` |
| `npm run build` | Build de production dans `./dist/` |
| `npm run preview` | Prévisualise le build |
