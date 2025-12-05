
# Engelsk-språklig applikasjon

## Behovsanalyse

#### Hvilke utfordringer har brukeren?
Brukeren har vanskelig for å lære seg språk, spesielt engelsk. Brukeren synes det er vanskelig/slitsomt å pugge. Brukeren sliter ikke med å lese, men liker å ha alternativet å slippe.
#### Hvilke interesser har brukeren?

Brukeren liker spill og har konkurranse-instinkt. Motivasjonen øker når man ser fremgang i læringen, i form av poeng og økt mestringsfølelse.
Siden de ser at engelsk er et nyttig språk, som man ikke kan unngå, var dette interessant. Siden de synes pugging er vanskelig er en quiz med svar alternativer relevant.

## Applikasjon

#### Hva er applikasjonen?

Applikasjonen er et for det meste et TRUE-FALSE spill.
Det er en hovedmeny hvor du kan velge hvilken quiz du vil spille. 
Hver quiz spør spørsmål ved bruk av et bilde og lyd som kan lese opp spørsmålet om ønsket. 
Spørsmålene kommer for det meste til å være liknende dette: Hvilken frukt er det på dette bilde?
Andre spørsmål er mer liknende dette: Trykk på boksene med en verdi du kan se på bilde. Videre forklaring senere...
Brukeren får se en progresjonsbar og hvilket spørsmål man er på eller hvordan man ligger an for hvert spørsmål.
Deretter må man tilbake til hovedmenyen, derifra kan man gå inn på en quiz igjen eller se loggen sin.
Loggen viser resultatene til dine forrige quizzer.

Quiz 1-4:
Bruker et bilde til å spørre et spørsmål. 
Her brukes disse type spørsmål:
-Hvilken frukt er det på dette bilde?
-Hvilket dyr er dette?
-Hva heter dette verktøyet?

Det skal være ett riktig svar og 3 feil svar for hver av de 10 spørsmålene..
Når alle 10 spørsmålene er stilt, får man se hva man har svart riktig og feil, og hva riktig svar er. 

Quiz 5: 
Her får man 4 spørsmål i stede for 10
Man får et spørsmål for hver av de forrige quizzene. 
Her får man et bilde med forskjellig gjenstander du har lært om og et input-felt hvor du skal skrive inn tingene du kjenner igjen, en etter en. 
Når man er ferdig med å skrive så trykker man seg videre til neste oppgave.

## Fremgangsmøte

#### Database


Jeg vil ha en database som kan holde spilleren oppdatert på progresjonen sin. Så spilleren må logge inn hver gang brukeren skal spille quizer. Jeg vil bruke SQL, Mamp og PhP MyAdmin for å lage databasen for dette er jeg kjent med. Så koble sammen frontend og databasen i backend, med JSON, node og express.js.

 Da ville jeg hatt to tabeller, den ene med brukerinformasjon:

  | BrukerID       | Brukernavn    | Passord  |
  | -------------- |:-------------:| -------: |
  | 1              | tobster       |steinbro14|

 Tabell 2 ville vært brukt til å ha oversikt over progresjonen til brukeren, å se hvor mye man har forbedret seg og hvor mye man har spilt:

  | spillID        | Dato          | Poeng | Person |
  | -------------- |:-------------:| -----:| -----: |
  | 1              | 20.08.1991    | 3     | 1      |

  Person-kolonnen i Spill - tabellen er en fremmednøkkel som skal fylles
  på med primærnøkkelen fra Person-tabellen for hvert spill.
  Person-tabellen skal brukes til innlogging.

#### HTML, CSS og Javascript

- Spillet trenger en innloggingsside, som kobler opp informasjon fra databasen
med informasjonen i innloggingsfeltet.
- Stylingen er "clean", med et stort bakgrunnsbilde på alle slides.
- Spillet skal ha en velkommen side (start spillet-side) og start spillet-knapp.
- Når man har svart, så kommer det opp at brukeren har tatt riktig eller feil.
Spilleren blir "tvunget" med til neste spørsmål.
- På Hver side skal det stå hvor langt spilleren har kommet i spillet.
For eksempel 1/10 på først slide, 2/10 på andre slide.

#### Node - backend service.

- Trenger database-tilkobling, og kan både hente og oppdatere databasen.
- Node kan brukes på to måter:
1. Som backend service og API-calls.
2. Som webserver.

Dette har jeg ikke bestemt meg for enda.
