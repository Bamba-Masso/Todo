# 📝 To-Do List App (React)

Cette application est une **To-Do List** développée avec **React JS**. Elle permet aux utilisateurs :

- d’ajouter des tâches,
- de marquer les tâches comme terminées ou non,
- de sauvegarder les tâches localement,


---

## 🚀 Fonctionnalités

### Ajouter une tâche
- Saisie du texte dans un champ.
- Appui sur "Add" pour enregistrer une nouvelle tâche.
- Chaque tâche est un objet avec un `id`, un `title`, et un état `completed` (false par défaut).

### Marquer comme faite / non faite
- Chaque tâche a une case à cocher.
- Cliquer dessus change l’état de la tâche .
- L'affichage s’adapte : texte barré si terminé.

###  Sauvegarde automatique (localStorage)
- Les tâches sont stockées dans `localStorage`.
- Lors du rechargement, elles sont restaurées automatiquement.

###  Vider la liste
- Un bouton "Clear All" permet de **supprimer toutes les tâches** d’un seul coup.
- Le `localStorage` est vidé en même temps.

---

## ⚙️ Technologies utilisées

- **React** 
- **localStorage** 
- **Tailwind CSS** 

---

##  Exemple d’objet tâche

```js
{
  id: "1715749217621",
  title: "Réviser React",
  completed: false
}
```

---

##  Utilisation

1. Cloner le projet :

```bash
git clone <url-du-dépôt>
cd nom-du-dossier
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer l'application :

```bash
npm run dev
```

4. Ouvrir :  
`http://localhost:5173`

---



