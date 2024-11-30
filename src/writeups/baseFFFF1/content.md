C'est un petit challenge assez simple. On a un fichier texte, qui, ouvert nous donne:

 ![](baseFFFF1_0.png)

On voit bien que nous somme face à une erreur de décodage.

Assez simplement, il suffit de regarder le nom du challenge: "baseFFFF+1", pour trouver la solution. En effet, si on fait l'addition et que l'on converti en décimal FFFF+1 = 65536.

Il est ensuite facile de trouver un [décodeur de base 65536 en ligne](https://www.better-converter.com/Encoders-Decoders/Base65536-Decode)

![](baseFFFF1_1.png)

qui nous donne tout de suite le flag:
**flag{716abce880f09b7cdc7938eddf273648}**
