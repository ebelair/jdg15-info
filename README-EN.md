# Engineering Games 2015 - Computer Eng.

## Introduction
### Preamble

Marty McFly used the DeLorean's time machine to get on January 3rd 2015 and he discovered some huge engineering competitions at Université de Sherbrooke. He happens to meet a participant who tells him the story of the Engineering Games. Listening to him, Marty understands that he will have to travel again to 6 different points in time in order to attend the most extraordinary events of this great epic.

Spying on the organizing committee, he then learns about a software containing the dates of these events. He grabs the software and the USB key along to the future and tries to find the dates on his MacPad Pro. After several hours, he realizes that he will need CS experts to crack the dates, as each of them are cleverly hidden through a computer challenge. He proceeds to upload the softwares on a server and asks you to find the dates for him. Good luck, Marty needs you!

### Setup
The competition is to complete the code of a web app developped in Javascript with [node.js](http://nodejs.org)
La compétition consiste à compléter le code d'une application web développée JavaScript avec [node.js](http://nodejs.org). To begin, do the following:

1. Download this whole GitHub repo by clicking on « Download ZIP » on the [landing page](https://github.com/ebelair/jdg15-info). 
2. Browse to the folder `#Software` and install **Chrome**, which is required for the project to work properly.
3. Open the Windows command prompt (`cmd`) and navigate to the repo's folder where you saved it. `cd C:\[path_to_the_repo]\`
4. Execute the following commands:

```
> npm install -g gulp
> npm install
```
You will then be able to run the project with the following command:

```
> gulp
```

The website will then be accessible via Chrome on [localhost:3000](http://localhost:3000).

### How it works
The web app includes an interface that mimics the time machine to travel back in time of the DeLorean. At the bottom are **6 challenge buttons** that send a request to the server to get the 3 dates to display on the board of the machine.

The server code that responds to those requests is available in the folder `app/controllers/challenges.js`. This is the only file you will need to modify during the competition (except the `package.json` file in case you wish to add dependecies to the project).

The instructions of each challenge are shown below. You will solve them in their own function that is already provided (`exports.doChallengeX`). The format of the expected response is:

```
[
    "MM/DD/AAAA HH:mm",  // Date 1 (Destination Time)
    "MM/DD/AAAA HH:mm",  // Date 2 (Present Time)
    "MM/DD/AAAA HH:mm"   // Date 3 (Last Time Departed)
]
```

> **The dates must absolutely follow the indicated format.** It is available in the variable `DF` of the file `challenges.js`

### Submission
At the end of the competition, you will have to archive the code in a ZIP file named `Info-` followed by the name of your university (ex: `Info-Concordia.zip`). You will then be able to 
À la fin de la compétition, vous devrez archiver le code dans un fichier ZIP nommé `Info-` suivi du nom de votre université (ex: `Info-Concordia.zip`). You can then submit it on the submission site of the 2015 Games available here:
[http://www.jeuxdegenie.qc.ca/remise/](http://www.jeuxdegenie.qc.ca/remise/)

> **The file must have been uploaded on the server before the end of the competition (12h00 PM).** Any late submission will be ignored and a score of 0 will be given.

## Challenges
### Challenge #1 - Introduction (10 pts)
Marty must first make sure to understand how the software works before travelling back in time. For this challenge, the board will simply need to display the 3 following dates:

```
1: Date et heure actuelle
2: Date du premier jour du mois actuel à 1:00 AM
3: Date représentée par le timestamp 499228920000
```

***

### Challenge #2 - Roman numbers (10 pts)
Marty receives a file that contains the next 3 dates to enter in his machine, but he doesn't understand them. Here is an example of a few lines:

```
dXXIXyMCMLXXViXXXVIImIXhII
yMCMLXXdXIhIImIXiIII
yMCMLXXIXiXVIIdVIIImXIIhXII
mIVhVIdXIiXXXIIIyMCMLXXVI
mVhXIVyMCMLXXIVdXVIIIiXVI
yMCMLXXVhXVIIIiXXXVIdXXmII
```

Upon reflection, he realizes that each line represents a date expressed in the following format:=

* A lowercase letter indicates that the following letters are the roman reprensetation of that element:
   * `y` represents **the year** (ex: 1993 => `yMCMXCIII`)
   * `m` represents **the month** (ex: january => `mI`)
   * `d` represents **the day** (ex: 16 => `dXVI`)
   * `h` represents **the hour** (ex: 21h => `hXXI`)
   * `i` represents **the minutes** (ex: 14 => `iXIV`)
* The order of the elements can be random, meaning that the date **12/31/1993 14:01** could be one of the following: `yMCMXCIIImXIIdXXXIhXIViI`, `hXImXIIyMCMXCIIIiIdXXXIV`, `iIhXIdXXXIVmXIIyMCMXCIII`, `dXXXIVhXImXIIiIyMCMXCIII`, etc.

In order to know which dates to use, Marty hints you not to go **before the date of the first engineering games**, and not **later than now**. Moreover, he realizes that a few dates aren't "romanly speaking" valid. You will need to validate all those conditions to find the 3 dates to display.
The file and contents are available in `data/chall2dates.txt`.

***

### Challenge #3 - Regular expressions (10 pts)
Marty talks to a regular expressions fan and the latter asked him to use them to solve the next challenge. He also provides him with a file, still hard to read. Some sample lines:

```
04.7x d 05  2007
02..72 d 05  2007
0.2 d .aA 05  2007
```

Marty was told that here again each line represents a date. The valid dates can be found using a regular expression. The specifications are:

* The date is written in the following format (`MM/DD/AAAA`)
* Each **month** can (or not) contain a dot `.` between the two digits, nothing else. 
* Each **day** can (or not) contain a comma `,` repeated 3 to 5 times between the two digits, nothing else. 
* Each **year** is untouched.
* Between the month and the day is *at least* one character, which can be a space, a new line or a capital letter, but nothing else.
* Between the day and year is *at least* one character, which can be anything *but* a digit (0-9)

Based on these rules, Marty asks you to find the only 3 valid dates in the file, which is available in `data/scrambled_dates.txt`. Note that there is no time component to these dates, you can use `00:00`.

***
### Challenge #4 - Security (10 pts)
The next dates to display on the board are confidential and must not be revealed in any case. They are only available on a hosted server protected by the most secure technologies. However, following the *Heartbleed* flaw, a message from this server was caught and could probably contain the 3 dates to display:

```
EP4cS1m2FUqCwvzF+HeqzRWE0HNNHTboblqC9A2IRUYvBqi/M+c9g1Y069SmrHiufihQu3ZcMTOne0h6ArtzlRRiLqpuwea+VHarzTRQ/YkLV2OpAqkTUbvfgnRHBUgN7cM5Uv+vjxoclYGVzV3OB8QjufqBXta2TB5E0ocZfNsQpM7X9kdxxMcilmTc61mEZPVAviI/+8XWhqhTGoLxu9NxAek3ZpJenwfKd7SryiqsXrbqg02Mf2ApMeuAQIAIZ3DwduLoMiWhmSu+y6qN849tKx35lWCwGesK+HoF4WOfPto4aDCS6kA1O7ZK1mLqe4lzgvznA5rvj9NOm7Vgrw==
```
With this message, the following content was also retreived:

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

Marty assumes that you will know what to do with all of this.

***
### Challenge #5 - web services (10 pts)
Marty discovered the online music distribution service, [Spotify](http://spotify.com). He took the opportunity to listen to his favorite album, ["Greatest Hits: Huey Lewis And The News"](https://open.spotify.com/album/0u34k1ANjgZ47uQfG9yaLj).

After a few listens, he realizes that the next date to visit can be obtained from the metadata of this album. He must therefore obtain the date as follows:

* **The year** is the album release year. ["Greatest Hits: Huey Lewis And The News"](https://open.spotify.com/album/0u34k1ANjgZ47uQfG9yaLj)
* **The month** is the number of the track "The Power Of Love" on that album.
* **The day** is the two first digits of the total duration of all the tracks on that album. (ex: if the duration is 243567 ms, then the day will be "24")
* **The hour and minutes** are the duration of the track "The Power Of Love", expressed like so: HH:mm     (ex: if the song duration is 1m20s thent he hour is 01:20)

To solve this, Marty's geek friends suggest to use Spotify's public API. They give him the following informations:

``` 
client_id: 7dab154e6dc945f2ae3612cd5de93260
client_secret: c10a1c60f21f42e59d1f2b2edde8d4e0
```

You should then be able to recover all the information through the API. This will result in a complete date; for the date 2 and 3, you simply add 1 to each of the date components. For example:

```
1: 01/04/2015 10:00
2: 02/05/2016 11:01
3: 03/06/2017 12:02
```

***
### Challenge #6 - Audio file (10 pts)
Marty recovered 3 audio samples containing the 3 last dates to enter in the time machine. However, he was told that he couldn't simply listen and enter the dates himself -- the web app must do it on its own.

His friends tell him that he can use an online service, [wit.ai](https://wit.ai/) to send the audio files and receive back the parsed data. They provide him with the following information:

```
Instance ID: 54a63e68-3ece-4d40-9d05-cb754118666c
Server Access Token: DV2WXREBPIENFGGBUDMW7QS7Y32K6YAU
Client Access Token: 2R36KICGKLDWXWYXOWP2SRTRG4RLEY7S
```

You now have the necessary tools to analyse the contents of the audio files and display the results on the board. The paths to the files:

```
1: data/date1.wav
2: data/date2.wav
3: data/date3.wav
```
***
Have fun JavaScriptin'!
