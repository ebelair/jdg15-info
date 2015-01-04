# JdG2015 - Examen GI

## Introduction
### Préambule
Marty McFly a utilisé la machine à voyager dans le temps de la DeLorean pour se rendre au 3 janvier 2015 et il y a découvert une grande compétition de génie à l’Université de Sherbrooke. Il rencontre alors un participant qui lui raconte l’histoire des Jeux de Génie. En l’écoutant, Marty comprend qu'il devra voyager à nouveau dans le temps à 6 reprises pour assister aux événements les plus extraordinaires de cette grande épopée. Il y a cependant un problème: il ne connait pas les dates exactes de chacun de ces moments mémorables.

En espionnant le comité organisateur, il apprend alors l’existence d’un logiciel contenant les dates de ces événements. Il s’empare alors du logiciel avec sa clé USB du futur et essaie de trouver les dates sur son *MacPad Pro*. Après plusieurs heures, il réalise qu’il aura besoin de gens qui connaissent la programmation pour obtenir les dates, car chacune est habilement cachée à travers une épreuve informatique. Il transfère donc ce logiciel sur un serveur GitHub et demande aux étudiants en génie informatique de trouver les dates pour lui. Chaque épreuve est différente et proposera des défis en lien avec l’algorithmie, le développement web et la sécurité informatique. **Bonne chance, Marty a besoin de vous!**

### Installation
La compétition consiste à compléter le code d'une application web développée JavaScript avec [node.js](http://nodejs.org). Pour commencer, vous devez d'abord suivre les étapes suivantes:

1. Téléchargez l'intégralité de ce repo GitHub en appuyant sur « Download ZIP » sur la [page d'accueil](https://github.com/ebelair/jdg15-info).
2. Naviguez dans le dossier `#Software` de l'archive et installez tous les logiciels fournis. Vous aurez besoin de **node.js** et de **Chrome** pour utiliser le projet.
3. Ouvrez l'invite de commande Windows (`cmd`) et naviguez dans le dossier du repo à l'endroit où vous l'avez téléchargé: `cd C:\[chemin_vers_le_repo]\`
4. Exécutez les commandes suivantes:

```
> npm install -g gulp
> npm install
```
Vous pourrez ensuite exécuter le projet à l'aide de la commande suivante:

```
> gulp
```

Le site sera alors accessible à partir de Chrome à l'adresse [localhost:3000](http://localhost:3000).

### Fonctionnement
L'application web comporte une interface complète qui imite la machine à voyager dans le temps de la DeLorean. Au bas se retrouvent **6 boutons de défi**, qui envoient une requête au serveur pour obtenir les 3 dates à afficher sur l'écran de la machine.

Le code du serveur qui répond à ces requêtes est disponible dans le fichier `app/controllers/challenges.js`. C'est le seul fichier que vous devrez modifier au cours de cette compétition (à part le fichier `package.json`, si vous souhaitez ajouter des dépendances au projet).

Les instructions de chaque défi sont indiqués ci-dessous. Vous effectuerez leur résolution dans leur fonction respective qui est déjà fournie (`exports.doChallengeX`). Le format de réponse attendu par l'interface est le suivant:

```
[
	"MM/DD/AAAA HH:mm",  // Date 1 (Destination Time)
	"MM/DD/AAAA HH:mm",  // Date 2 (Present Time)
	"MM/DD/AAAA HH:mm"   // Date 3 (Last Time Departed)
]
```

> **Les dates doivent absolument respecter le format indiqué.** Il est disponible dans la variable `DF` du fichier `challenges.js`.

### Remise
À la fin de la compétition, vous devrez archiver le code dans un fichier ZIP nommé `Info-` suivi du nom de votre université (ex: `Info-Concordia.zip`). Vous pourrez ensuite le remettre sur le site de remise des Jeux de Génie 2015, disponible ici:

[http://www.jeuxdegenie.qc.ca/remise/](http://www.jeuxdegenie.qc.ca/remise/)

> **Le fichier doit avoir été téléversé sur le serveur avant la fin de la compétition (12h00 PM).** La note de 0 sera automatiquement attribuée aux délégations qui remettent le fichier en retard.

## Les défis
### Défi #1 - Introduction (10 pts)
Marty doit d'abord s'assurer de comprendre le fonctionnement du logiciel avant de voyager dans le temps. Pour ce défi, les cadrans devront donc simplement comporter les 3 dates suivantes:

```
1: Date et heure actuelle
2: Date du premier jour du mois actuel à 1:00 AM
3: Date représentée par le timestamp 499228920000
```

***

### Défi #2 - Chiffres romains (10 pts)
Marty reçoit un fichier qui contient les 3 prochaines dates à entrer dans sa machine, mais il n'arrive pas à les comprendre. Un exemple de quelques lignes, par exemple:

```
dXXIXyMCMLXXViXXXVIImIXhII
yMCMLXXdXIhIImIXiIII
yMCMLXXIXiXVIIdVIIImXIIhXII
mIVhVIdXIiXXXIIIyMCMLXXVI
mVhXIVyMCMLXXIVdXVIIIiXVI
yMCMLXXVhXVIIIiXXXVIdXXmII
```

Après réflexion, il comprend que chaque ligne représente une date, exprimée selon le format suivant:

* Une lettre minscule indique que les lettres qui suivent sont la représentation en chiffre romain de cet élément:
   * `y` représente **l'année** (ex: 1993 => `yMCMXCIII`)
   * `m` représente **le mois** (ex: janvier => `mI`)
   * `d` représente **la date** (ex: 16 => `dXVI`)
   * `h` représente **l'heures** (ex: 21h => `hXXI`)
   * `i` représente **les minutes** (ex: 14 => `iXIV`)
* L'ordre des éléments peut être aléatoire, c'est-à-dire que la date **12/31/1993 14:01** pourrait être représentée par les chaînes suivantes: `yMCMXCIIImXIIdXXXIhXIViI`, `hXImXIIyMCMXCIIIiIdXXXIV`, `iIhXIdXXXIVmXIIyMCMXCIII`, `dXXXIVhXImXIIiIyMCMXCIII`, et ainsi de suite.

Pour savoir quelles dates utiliser, Marty a reçu l'indice pour ce défi de ne pas revenir **avant la date de début des tout premiers Jeux de Génie du Québec**, puis de ne pas aller **plus tard qu'aujourd'hui**. De plus, il réalise que certaines dates ne sont même pas valides en chiffres romains. Il s'agira donc de vérifier toutes ces conditions pour trouver les 3 dates à afficher sur les cadrans de la machine.

Le fichier est disponible dans `data/chall2dates.txt`.
***

### Défi #3 - Expressions régulières (10 pts)
Marty discute avec un adepte des expressions régulières et ce dernier lui demande de les utiliser pour résoudre le prochain défi. Il lui fournit lui aussi un fichier, encore peu facile à lire. Quelques lignes d'exemple:

```
04.7x d 05  2007
02..72 d 05  2007
0.2 d .aA 05  2007
```
On lui explique qu'ici aussi, chaque ligne représente une date, qui peut être retrouvée à l'aide d'une expression régulière. Les spécifications sont les suivantes:

* La date est écrite dans l'ordre (`MM/DD/AAAA`)
* Chaque **mois** peut avoir (ou non) un point `.` entre ses chiffres (mais rien d'autre)
* Chaque **jour** peut avoir (ou non) un maximum de 3 et un maximum de 5 virgules entre ses chiffres (mais rien d'autre)
* Chaque **année** est intouchée
* Entre le mois et le jour il y a *au moins* un caractère, qui peut être un espace, un retour de ligne ou une lettre majuscule (mais rien d'autre)
* Entre le jour et l'année il y a *au moins* un caractère, qui peut être n'importe quoi *sauf* un chiffre (0-9)

À partir de ces règles, Marty vous demande alors de trouver les 3 seules dates valides dans le fichier, qui est disponible dans `data/scrambled_dates.txt`. Notez qu'il n'y a pas de composante horaire à ces dates, vous pouvez utiliser `00:00`.
***
### Défi #4 - Sécurité (10 pts)
Les prochaines dates à afficher sur la machine sont confidentielles et ne peuvent être révélées en aucun cas. Elles ne sont disponibles que sur un serveur protégé par les technologies de sécurité les plus modernes. Cependant, suite à la faille de sécurité *Heartbleed*, un échange a été intercepté avec ce serveur et pourrait probablement contenir les 3 dates à afficher:

```
EP4cS1m2FUqCwvzF+HeqzRWE0HNNHTboblqC9A2IRUYvBqi/M+c9g1Y069SmrHiufihQu3ZcMTOne0h6ArtzlRRiLqpuwea+VHarzTRQ/YkLV2OpAqkTUbvfgnRHBUgN7cM5Uv+vjxoclYGVzV3OB8QjufqBXta2TB5E0ocZfNsQpM7X9kdxxMcilmTc61mEZPVAviI/+8XWhqhTGoLxu9NxAek3ZpJenwfKd7SryiqsXrbqg02Mf2ApMeuAQIAIZ3DwduLoMiWhmSu+y6qN849tKx35lWCwGesK+HoF4WOfPto4aDCS6kA1O7ZK1mLqe4lzgvznA5rvj9NOm7Vgrw==
```
Avec ce message, le fichier suivant a aussi été retrouvé:

```
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAp/ay2Mz77ZPF3QHebO6OLIfa1q9x7N4Cd8mGrSa2bHNZZeF6
Y8VH5tX4xnXBrYoacwjtVpxF0IFpY5lB5onBl3SRPwK5kjmnlrmjaY7mraGoIMFO
bj6jrS8DARM0lOYY7t7OJqwOOhHJv9mkU6QDUhC8fZvEUI1jx9rNNU3eqrFgeoN8
HYD57/6RerWBTIyyI7WQjL0ERFF7I1CI+suK7rPsZBJcK0FMtmy2/gWw//MNn1T4
TzwcROKQ4lRI88ZKDiuQp4FyZhlwdCX0QJVXG4RYKW6U240HEOdLsvVWxgyzzGWW
0SJTI6L3ib04KrKvbZn14mZIVZILB6E5/5goewIDAQABAoIBAQCezH3wvXSd/G1A
c0jggnZGobcD7GHwiUGaER1UTVqBlFj8Gr6E33sIQlpu/9w5/2zcP59smFjlNcT3
FmmY1bsDP4EnKqNaHUpWFXLrFOEBXeo/9aL6VhyXWvAjLw4yjI0cIeiT5W2Z90Fg
MhvLvDArgYlD1GY5pkOlKzeCYvnXNEX07Xm4YojZWx9eP+X8IPq3qhhJZM7giZ9O
9pbnm9UCTQiLNQNBcK6uLNS7OejuNlIIF269JUDeuRI9QYO7i25DSyZf+UvynJj5
ufAkwWqH5o1079q2gjfqPrq8jxZcX1/C0KWI+bnCwPG+mjd7P6bkvDy8L1ZrP97a
vwNtse5JAoGBAP5CBKH/zkG0bvINaJj78c4wh1f97BcUMrJYfmzsCDz++l4Bnl8n
qMIsg5RvNWsw3/NoUjUIcgjZ549EN8nSSrloPe2tKDhqO2hyaAJfp7LNuvghraaF
Ky7W4E09SBKone0FfArTUgfIF5nT0s0Zjp+RBaHOKXuNUw9UdzIR4gktAoGBAKkd
UNwy7OZ7iyhZATcMD7mvT58Jbh4QUShncFwhU9Ft3hOJrS47d9nobpl2O1n9zFbF
P6BmJxEAQJ/co/PCG4BTQbqlxGORsL32ZqgKFMaDMAc02m3Ccw4ljFz1B+wzQdDF
SGIC8ryahzhQHdkyoqzakAiiO6xzJDjh9JiKfjFHAoGAWC75gF5CYRN9b0IrRvQK
96JpLqGI4rBErQp4PrrWWKFuoHAbR5FvvHjH4hF4C4dWBQvnhzE4q803vL7CQqNG
+2smH2rxCi/+DsmvPTOD7EXiVPEJUznYslQgU2mvt5j3vR8r2G1WhBBn7xhCgpQc
nUclFut0A8AOUMDQ3nLJXLkCgYEAhfAa95s5tz2HtDfx12gtGDI5zEqKtTLVJDvw
aHdYzBjI9w5mY6Rjwujsl4xla1uwN9TXFLFzJWrew/3auBc28sZ921aomPdtVLZP
Da2WULbcFgkNKjsEJuMkLQc/9BmQecmWD1Iob6mviLEjQr9wyZf81Wmv+1/iA08q
Cpo9YccCgYB2cHy8EIyTQsxiR3fCh1+tdE7MSn/Jg+q+k181hEP8njmmbx9lVpxr
MVr2oFQ7Ej/kCcgtlnPs59QklqX99keKT1VGDKNpTl3PaEnUHfHUkRs/yOdoQiw4
UbRXgWE0v7CUBADedX/t/+t9Lp4uIlsupQfiWSg9V9Fr+c0uNm61WQ==
-----END RSA PRIVATE KEY-----
```

Marty assume que vous serez en mesure de savoir quoi faire avec tout ça.
***
### Défi 5 - Services web (10 pts)
Marty vient de découvrir le service de distribution de musique en ligne [Spotify](http://spotify.com). Il en profite pour écouter son album préféré, ["Greatest Hits: Huey Lewis And The News"](https://open.spotify.com/album/0u34k1ANjgZ47uQfG9yaLj).

Après quelques écoutes, il réalise que la prochaine date à visiter peut être obtenue à partir de données liées à cet album. Il doit donc obtenir la date suivante:

* **L'année** est l'année de sortie de l'album ["Greatest Hits: Huey Lewis And The News"](https://open.spotify.com/album/0u34k1ANjgZ47uQfG9yaLj)
* **Le mois** est le numéro de piste (position) de la chanson "The Power Of Love" sur cet album
* **Le jour** est les 2 premiers chiffres de la durée totale des chansons de l'album (ex: si la durée de l'album est de 243567 ms, le jour sera "24")
* **L'heure et les minutes** sont la durée de la chanson "The Power Of Love", exprimée en HH:mm (ex: si la chanson dure 1m20s, l'heure sera 01:20)

Pour y arriver, ses amis informaticiens lui suggèrent d'utiliser l'API public de Spotify. Ils lui remettent les informations suivantes:

``` 
client_id: 7dab154e6dc945f2ae3612cd5de93260
client_secret: c10a1c60f21f42e59d1f2b2edde8d4e0
```

Vous devriez être en mesure de récupérer toutes ces informations à partir de l'API. Cela vous retournera une date complète; pour les dates 2 et 3, vous n'avez qu'à additionner 1 à chacune des composantes de la date. Par exemple:

```
1: 01/04/2015 10:00
2: 02/05/2016 11:01
3: 03/06/2017 12:02
```
***
### Défi 6 - Fichiers audio (10 pts)
Marty a récupéré 3 échantillons audio contenant les 3 dernières dates à entrer dans sa machine. Cependant, on lui dit qu'il ne peut pas les écouter et simplement entrer les dates dans la machine - ils doivent être lus directement par l'application web.

Pour y arriver, ses amis lui expliquent qu'il peut utiliser un service en ligne, [wit.ai](https://wit.ai/), pour envoyer les fichiers audio et recevoir les dates au format texte. Ils lui fournissent ces informations:

```
Instance ID: 54a63e68-3ece-4d40-9d05-cb754118666c
Server Access Token: DV2WXREBPIENFGGBUDMW7QS7Y32K6YAU
Client Access Token: 2R36KICGKLDWXWYXOWP2SRTRG4RLEY7S
```

Votre défi sera donc d'utiliser JavaScript pour reconnaître le contenu des fichiers audio, puis afficher les dates résultantes sur les 3 cadrans de la machine à voyager dans le temps:

```
1: Date lue dans le fichier data/date1.wav
2: Date lue dans le fichier data/date2.wav
3: Date lue dans le fichier data/date3.wav
```
***
Bon JavaScript!