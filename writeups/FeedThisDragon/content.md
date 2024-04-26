![Capture d'écran du jeu](1.png)

Script à coller dans la console du navigateur. Avec achat d'améliorations automatique, ne pas oublier d'ouvrir le menu d'améliorations.

```js
var uuids = []
var time = 0;
var clickFood = () => {
    for (type of ['veggy', 'coin', 'food', 'candy', 'life', 'gem', 'burger', 'lilboo', 'midboo', 'bigboo', 'nyan', 'secret']) {
        var items = document.querySelectorAll("[alt='"+type+" item']");
        for (let item of items) {
            if (uuids.includes(item.dataset.uuid))
                continue;
            console.warn(type);
            item.click();
            if (!['midboo', 'bigboo'].includes(type))
                uuids.push(item.dataset.uuid)
        }
    }
    
    var coins = parseInt(document.querySelector('#ShopMenu div')?.childNodes?.[2]?.data) || 0;
    var bag = parseInt(document.querySelector('#ShopMenu div')?.childNodes?.[4]?.data) || Infinity;
    var feedPrice = parseInt(document.querySelector("[title='Improve feed per food']")?.nextSibling?.nextSibling?.nextSibling?.data) || Infinity;
    var greedPrice = parseInt(document.querySelector("[title='Improve money per coin']")?.nextSibling?.nextSibling?.nextSibling?.data) || Infinity;
    var bagPrice = parseInt(document.querySelector("[title='Improve money bag size']")?.nextSibling?.nextSibling?.nextSibling?.data) || Infinity;
    if (feedPrice > bag && greedPrice > bag && bagPrice < coins) {
        document.querySelector("[title='Improve money bag size']")?.click();
        console.warn("Upgrade bag");
    } else if (feedPrice < coins) {
        document.querySelector("[title='Improve feed per food']")?.click();
        console.warn("Upgrade feed");
    } else if (greedPrice < coins) {
        document.querySelector("[title='Improve money per coin']")?.click();
        console.warn("Upgrade greed");
    }
    time += 1;
    if (time % 10 == 0)
        console.warn(parseInt(time / 600) + ":" + time / 10 % 60);
}
var timer = setInterval(clickFood, 100);
var stop = () => clearInterval(timer);
```

**DGHACK{ThisDragonIsNowStuffed}**