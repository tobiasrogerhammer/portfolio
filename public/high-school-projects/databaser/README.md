# Database Practice
# Oppgave 1:
Jeg hadde allerede en tabell som het 'Elever', denne brukte jeg videre, la til en nye kolonne som jeg kalte datamaskin, jeg byttet og til riktige kolonnenavn på noen andre kolonner for å være mer nøyaktig

# Oppgave 2:
a: for å finne ut hvilke jenter som er i tabellen elever brukte jeg :

```sql
SELECT * FROM `Elever` WHERE `Gender` = "F"
```

b: for å finne ut hvilke gutter som er i andre klasse brukte jeg:

```sql
SELECT `Klassetrinn`, `Gender`, `Fornavn` FROM `Elever` WHERE `Gender` = "M" and `Klassetrinn` = "2" ;
```

c: for å finne ut hvor mange jenter som er i andre klasse brukte jeg:

```sql
SELECT `Klassetrinn`,`Gender` FROM `Elever` WHERE `Gender` = "F" and `Klassetrinn` = "2" ;
```

d: For å finne elever som begynner på `A` brukte jeg koden :

```sql
SELECT * FROM `Elever` WHERE `Fornavn` like "A%";
```

e: For å finne elever som begynner på A i andre klasse brukte jeg :

```sql
SELECT * FROM `Elever` WHERE `Fornavn` like "A%" and `Klassetrinn` = "2";
```

f: For å finne fotballspillerne i tabellen brukte jeg:

```sql
SELECT * FROM `Elever` WHERE `Hobby` = "Fotball"
```

# Oppgave 3:
Så laget jeg en ny tabell som jeg kalte datamaskiner, denne tabellen fikk 3 kolonner, DataID, Datamaskin og DatamaskinMerke Deretter bestemte jeg hva slags innformasjonstype det skulle være i feltene og hvor mange karakterer man kunne bruke i feltene

# Oppgave 4:
Jeg hadde allerede en kolonne som het datamaskin, denne var allerede koblet til tabellen 'Datamaskin', så da måtte jeg bare velge hvilken Datamaskin eleven har i en dropdown meny

# Oppgave 5:
For å lage en foreign key gikk jeg inn på tabellen 'Elever' sin struktur. Deretter på "relation view". Så valgte jeg navnet på nøkkelen. Så valgte jeg hvilken database, tabell og kolonne jeg ville nøkkelen skulle til.

# Oppgave 6:
Min JOIN spørring:

```sql
SELECT Elever.Fornavn, Elever.Datamaskin, Datamaskin.DataID 
FROM Elever 
INNER JOIN Datamaskin ON Elever.Datamaskin=Datamaskin.DataID 
WHERE Fornavn = 'Tobias' OR Fornavn = 'Elliot';
```

# Oppgave 7:
For å sortere Navn i rekkefølge brukte jeg:

```sql
SELECT Fornavn
FROM Elever
ORDER BY Fornavn ASC;
```

# Oppgave 8:

```sql
SELECT Elever.Klassetrinn
FROM Elever
GROUP BY Elever.Klassetrinn 
HAVING COUNT(Klassetrinn) < 2  
ORDER BY `Elever`.`Klassetrinn`  ASC
```

# Oppgave 9:

```sql
UPDATE Elever
SET Hobby = 'Basket'
WHERE ElevID = 2;
```

# Oppgave 10:

```sql
INSERT INTO `Elever` (`ElevID`, `Fornavn`, `Etternavn`, `Klassetrinn`, `Hobby`, `Programfag`, `Gender`, `Datamaskin`) VALUES ('11', 'Redin', 'Ukjent', '4', 'Blomsterplukking', 'IT', 'M', '2');
```

# Oppgave 11:
```sql
DELETE FROM Elever WHERE Fornavn='Redin';
