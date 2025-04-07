# mikujepo

A base-32 number naming system. Used as prefixes in [latakama](https://github.com/pumpncode/latakama). Can be written in the base-256 number symbol system [kimisa](https://github.com/pumpncode/kimisa).

## Installation

```bash
deno add jsr:@pumpncode/mikujepo
```

## Usage

### Translate to mikujepo

```js
import mikujepo from "@pumpncode/mikujepo";

mikujepo(12_345); // "tikunu"
```

### Translate from mikujepo

```js
import mikujepo from "@pumpncode/mikujepo";

mikujepo("junenumo"); // 314_159
```

## Words

### Integers

number | word
--- | ---
0 | mi
1 | ku
2 | je
3 | po
4 | ni
5 | tu
6 | le
7 | so
8 | ki
9 | ju
10 | pe
11 | no
12 | ti
13 | lu
14 | se
15 | mo
16 | ji
17 | pu
18 | ne
19 | to
20 | li
21 | su
22 | me
23 | ko
24 | pi
25 | nu
26 | te
27 | lo
28 | si
29 | mu
30 | ke
31 | jo
32 | kumi
33 | kuku
34 | kuje
⋮ | ⋮
64 | jemi
65 | jeku
⋮ | ⋮
96 | pomi
⋮ | ⋮
256 | kimi
⋮ | ⋮
1024 | kumimi
⋮ | ⋮
32768 | kumimimi

### Non-integers

"ba" is the mikujepo syllable for "comma".

number | word
--- | ---
$0.125$ ($\frac{1}{8}$) | mibani
$0.25$ ($\frac{1}{4}$) | mibaki
$0.4342944819032518$ ($\approx\log_{10}{(2)}$) | mibalusimekepisunilonejisi
$0.5$ ($\frac{1}{2}$) | mibaji
$0.6931471805599453$ ($\approx\ln{(2)}$) | mibametunukumomukepunumusi
$0.7071067811865476$ ($\approx\sqrt{\frac{1}{2}}$) | mibamelijemoletijonulonuli
$1.4142135623730951$ ($\approx\sqrt{2}$) | kubalukiniketinujotokotoki
$1.4426950408889634$ ($\approx\log_{2}{(e)}$) | kubasetupesotilisupitujoji
$1.5$ ($1\frac{1}{2}$) | kubaji
$2.302585092994046$ ($\approx\ln{(10)}$) | jebajusuloposemusupelino
$2.718281828459045$ ($\approx e$) | jebamejojisujepilipemuliji
$3.141592653589793$ ($\approx\pi$) | pobanijijomesujenituliti
$123.456$ | polobasenekelelijokonuloji
$1024.03125$ | kumimibaku

## Naming

The name **mikujepo** is constructed from the first four digits ("mi", "ku", "je", "po").
