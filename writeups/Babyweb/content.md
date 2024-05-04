On arrive sur le site, et on peut voir cette page


![au cas ou ça s'affiche pas.](underconstruction.png)


en regardant le code source, on trouve ce chemin en commentaire

![au cas ou ça s'affiche pas.](babywep1.png)


Sur ce chemin, on arrive sur cette page 

![au cas ou ça s'affiche pas.](forbidden.png)

Afin de ce faire passer pour Ds Bandit, on ajoute la ligne Cookie: USER=Ds Bandit dans notre requête, grace à BurpSuite


![au cas ou ça s'affiche pas.](DsBandit.png)


Afin de ce faire passer pour la machine DsMobile, on modifie le user agent en DsMobile, toujours grace à BurpSuite


![au cas ou ça s'affiche pas.](DsMobile.png)


On obtient ainsi le flag !

![au cas ou ça s'affiche pas.](token.png)


