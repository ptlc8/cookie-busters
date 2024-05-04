On arrive sur le site, et on peut voir cette page


![au cas ou ça s'affiche pas.](cookie-busters/writeups/babyweb/underconstruction.png)


en regardant le code source, on trouve ce chemin en commentaire

![au cas ou ça s'affiche pas.](cookie-busters/writeups/babyweb/babywep1.png)


Sur ce chemin, on arrive sur cette page 

![au cas ou ça s'affiche pas.](cookie-busters/writeups/babyweb/forbidden.png)

Afin de ce faire passer pour Ds Bandit, on ajoute la ligne Cookie: USER=Ds Bandit dans notre requête, grace à BurpSuite


![au cas ou ça s'affiche pas.](cookie-busters/writeups/babyweb/DsBandit.png)


Afin de ce faire passer pour la machine DsMobile, on modifie le user agent en DsMobile, toujours grace à BurpSuite


![au cas ou ça s'affiche pas.](cookie-busters/writeups/babyweb/DsMobile.png)


On obtient ainsi le flag !

![au cas ou ça s'affiche pas.](cookie-busters/writeups/babyweb/token.png)


