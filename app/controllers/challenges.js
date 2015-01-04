/***************************************************************************
 *                Jeux de Génie 2015 - Engineering Games 2015              *
 *    Compétition Génie Informatique - Computer Engineering Competition    *
 *                                                                         *
 * Ce fichier doit contenir votre solution à cette compétition.            *
 * Seul ce dernier doit être modifié, à l'exception du package.json pour   *
 * inclure de nouvelles dépendances si vous le jugez nécessaire.           *
 * À la fin de la compétition, vous devez remettre l'intégralité du projet *
 * aux évaluateurs dans une archive ZIP selon les modalités spécifiées.    *
 *                                                                         *
 *                                  ***                                    *
 *                                                                         *
 * This file must contain your solution to this competition.               *
 * Only this one can be edited, except for the package.json if you wish to *
 * include new dependencies to the project.                                *
 * At the end of the competition, you must hand over the entire project    *
 * to the evaluators using a ZIP archive, as specified in the procedures.  *
 ***************************************************************************
 *                                                                         *
 *  Développeurs / Developers:  [Name 1]                                   *
 *                              [Name 2]                                   *
 *                              [Name 3]                                   *
 *                              [...]                                      *
 *  Université / University:    [School name]                              *
 *                                                                         *
 ***************************************************************************/

/* Dependencies */
var fs = require('fs'),
    _  = require('lodash');

/* Challenges count (do not change unless you want to break something) */
exports.count = 6;

exports.doChallenge1 = function (req, res)
{
	/* ... Your code here ... */
	
	res.json([
		"10/26/1985 01:22",
		"10/26/1985 01:22",
		"10/26/1985 01:22"
	]);
};

/****************************************************************************************/

exports.doChallenge2 = function (req, res)
{
    var dateFilepath = __base + '/data/chall2dates.txt';

    /* ... Your code here ... */

	res.json([null, null, null]);
};

/****************************************************************************************/

exports.doChallenge3 = function (req, res)
{
    var scrambledDatesPath = __base + '/data/scrambled_dates.txt';

    /* ... Your code here ... */

    res.json([null, null, null]);
};

/****************************************************************************************/

exports.doChallenge4 = function (req, res)
{
    var data =
    {
        msg: "EP4cS1m2FUqCwvzF+HeqzRWE0HNNHTboblqC9A2IRUYvBqi/M+c9g1Y069SmrHiufihQu3ZcMTOne0h6ArtzlRRiLqpuwea+VHarzTRQ/YkLV2OpAqkTUbvfgnRHBUgN7cM5Uv+vjxoclYGVzV3OB8QjufqBXta2TB5E0ocZfNsQpM7X9kdxxMcilmTc61mEZPVAviI/+8XWhqhTGoLxu9NxAek3ZpJenwfKd7SryiqsXrbqg02Mf2ApMeuAQIAIZ3DwduLoMiWhmSu+y6qN849tKx35lWCwGesK+HoF4WOfPto4aDCS6kA1O7ZK1mLqe4lzgvznA5rvj9NOm7Vgrw==",
        key:    '-----BEGIN RSA PRIVATE KEY-----\n'+
        'MIIEpAIBAAKCAQEAp/ay2Mz77ZPF3QHebO6OLIfa1q9x7N4Cd8mGrSa2bHNZZeF6\n'+
        'Y8VH5tX4xnXBrYoacwjtVpxF0IFpY5lB5onBl3SRPwK5kjmnlrmjaY7mraGoIMFO\n'+
        'bj6jrS8DARM0lOYY7t7OJqwOOhHJv9mkU6QDUhC8fZvEUI1jx9rNNU3eqrFgeoN8\n'+
        'HYD57/6RerWBTIyyI7WQjL0ERFF7I1CI+suK7rPsZBJcK0FMtmy2/gWw//MNn1T4\n'+
        'TzwcROKQ4lRI88ZKDiuQp4FyZhlwdCX0QJVXG4RYKW6U240HEOdLsvVWxgyzzGWW\n'+
        '0SJTI6L3ib04KrKvbZn14mZIVZILB6E5/5goewIDAQABAoIBAQCezH3wvXSd/G1A\n'+
        'c0jggnZGobcD7GHwiUGaER1UTVqBlFj8Gr6E33sIQlpu/9w5/2zcP59smFjlNcT3\n'+
        'FmmY1bsDP4EnKqNaHUpWFXLrFOEBXeo/9aL6VhyXWvAjLw4yjI0cIeiT5W2Z90Fg\n'+
        'MhvLvDArgYlD1GY5pkOlKzeCYvnXNEX07Xm4YojZWx9eP+X8IPq3qhhJZM7giZ9O\n'+
        '9pbnm9UCTQiLNQNBcK6uLNS7OejuNlIIF269JUDeuRI9QYO7i25DSyZf+UvynJj5\n'+
        'ufAkwWqH5o1079q2gjfqPrq8jxZcX1/C0KWI+bnCwPG+mjd7P6bkvDy8L1ZrP97a\n'+
        'vwNtse5JAoGBAP5CBKH/zkG0bvINaJj78c4wh1f97BcUMrJYfmzsCDz++l4Bnl8n\n'+
        'qMIsg5RvNWsw3/NoUjUIcgjZ549EN8nSSrloPe2tKDhqO2hyaAJfp7LNuvghraaF\n'+
        'Ky7W4E09SBKone0FfArTUgfIF5nT0s0Zjp+RBaHOKXuNUw9UdzIR4gktAoGBAKkd\n'+
        'UNwy7OZ7iyhZATcMD7mvT58Jbh4QUShncFwhU9Ft3hOJrS47d9nobpl2O1n9zFbF\n'+
        'P6BmJxEAQJ/co/PCG4BTQbqlxGORsL32ZqgKFMaDMAc02m3Ccw4ljFz1B+wzQdDF\n'+
        'SGIC8ryahzhQHdkyoqzakAiiO6xzJDjh9JiKfjFHAoGAWC75gF5CYRN9b0IrRvQK\n'+
        '96JpLqGI4rBErQp4PrrWWKFuoHAbR5FvvHjH4hF4C4dWBQvnhzE4q803vL7CQqNG\n'+
        '+2smH2rxCi/+DsmvPTOD7EXiVPEJUznYslQgU2mvt5j3vR8r2G1WhBBn7xhCgpQc\n'+
        'nUclFut0A8AOUMDQ3nLJXLkCgYEAhfAa95s5tz2HtDfx12gtGDI5zEqKtTLVJDvw\n'+
        'aHdYzBjI9w5mY6Rjwujsl4xla1uwN9TXFLFzJWrew/3auBc28sZ921aomPdtVLZP\n'+
        'Da2WULbcFgkNKjsEJuMkLQc/9BmQecmWD1Iob6mviLEjQr9wyZf81Wmv+1/iA08q\n'+
        'Cpo9YccCgYB2cHy8EIyTQsxiR3fCh1+tdE7MSn/Jg+q+k181hEP8njmmbx9lVpxr\n'+
        'MVr2oFQ7Ej/kCcgtlnPs59QklqX99keKT1VGDKNpTl3PaEnUHfHUkRs/yOdoQiw4\n'+
        'UbRXgWE0v7CUBADedX/t/+t9Lp4uIlsupQfiWSg9V9Fr+c0uNm61WQ==\n'+
        '-----END RSA PRIVATE KEY-----'
    };

    /* ... Your code here ... */

    res.json([null, null, null]);
};

/****************************************************************************************/

exports.doChallenge5 = function (req, res)
{
    /* ... Your code here ... */

    res.json([null, null, null]);
};

/****************************************************************************************/

exports.doChallenge6 = function (req, res)
{
    /* ... Your code here ... */

    res.json([null, null, null]);
};
