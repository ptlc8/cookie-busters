# Site web des Cookie Busters

Ce site présente les comptes rendus des différents challenges des CTF auxquels les Cookie Busters ont participé.


## Comment afficher le site web ?

Pour afficher le site web, il suffit de :
 - cloner ce dépôt Git
 - lancer un serveur web local
 - lui indiquer le dossier contenant le dépôt cloné
 - ouvrir un navigateur web et se rendre à l'adresse du serveur web local


## Comment ajouter un challenge ?

Pour ajouter un challenge, il suffit d'ajouter un objet JSON dans le fichiers [writeups.json](writeups.json) avec les champs suivants :
 - id : chaînes de caractères unique pour identifier le challenge
 - title : titre du challenge
 - date : date de publication du challenge (format : "YYYY-MM-DD")
 - authors : liste des auteurs du challenge
 - tags : liste des tags associés au challenge

Il faut ensuite créer un dossier du nom de l'id du challenge dans le dossier [writeups](writeups) et y ajouter un fichier content.md contenant le compte rendu de celui-ci au format markdown. Les images utilisées dans le compte rendu doivent être placées dans le même dossier que le fichier content.md.