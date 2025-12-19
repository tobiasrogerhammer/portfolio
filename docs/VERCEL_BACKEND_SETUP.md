# Vercel Backend Setup Guide

Denne guiden forklarer hvordan backendene for eksamensprosjektet og blackjack-prosjektet er satt opp til å fungere på Vercel.

## Oversikt

Begge backendene er nå konvertert til Next.js API routes som fungerer som serverless functions på Vercel:

1. **Eksamensprosjekt backend** - MongoDB-basert backend for brukerhåndtering, båtregistrering, møter, records og chat
2. **Blackjack backend** - Spillogikk for blackjack-spillet

## API Endpoints

### Eksamensprosjekt API

Alle endpoints er tilgjengelige under `/api/`:

- **User endpoints:**

  - `POST /api/user/create` - Opprett bruker
  - `POST /api/user/login` - Logg inn
  - `POST /api/user/multiple` - Opprett flere brukere
  - `GET /api/user/huddly` - Hent alle brukere

- **Admin endpoints:**

  - `GET /api/admin/seeUsers` - Se alle brukere
  - `PUT /api/admin/updateUser/[userId]` - Oppdater bruker (toggle admin)

- **Boat endpoints:**

  - `POST /api/registerBoat/createBoat` - Registrer båt
  - `GET /api/registerBoat/seeBoats` - Se alle båter

- **Meeting endpoints:**

  - `POST /api/meeting/create` - Opprett møte
  - `GET /api/meeting/fetch` - Hent alle møter
  - `PUT /api/meeting/update/[id]` - Oppdater møte
  - `DELETE /api/meeting/delete/[id]` - Slett møte

- **Record endpoints:**

  - `POST /api/record/make` - Opprett record
  - `GET /api/record/find` - Hent alle records

- **Chat endpoints:**
  - `POST /api/get/create` - Send melding
  - `GET /api/get/messages` - Hent alle meldinger

### Blackjack API

- `POST /api/game/start` - Start nytt spill
- `POST /api/game/hit` - Ta et kort
- `POST /api/game/stand` - Stå
- `POST /api/game/bet` - Plasser innsats
- `GET /api/game/state` - Hent spilltilstand
- `POST /api/game/deal` - Del kort (skjult)
- `POST /api/game/reveal` - Vis kort og start spill

## Miljøvariabler

Opprett en `.env.local` fil i `portfolio/` mappen med følgende:

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/fakeEksamen
```

For Vercel deployment, legg til miljøvariabelen i Vercel dashboard under Project Settings > Environment Variables.

## Frontend Konfigurasjon

### Eksamensprosjekt

Oppdater `API_BASE_URL` i frontend-konfigurasjonen til å bruke Vercel URL:

```javascript
// I eksamen/client/src/config.js
export const API_BASE_URL =
  process.env.REACT_APP_API_URL || "https://your-vercel-app.vercel.app";
```

Eller hvis frontenden også er på samme Vercel-deployment:

```javascript
export const API_BASE_URL = process.env.REACT_APP_API_URL || "";
```

### Blackjack

Blackjack frontend er allerede konfigurert til å bruke `/api/game/*` endpoints, så den vil automatisk fungere med Vercel deployment.

## Installasjon

1. Installer dependencies:

```bash
cd portfolio
npm install
```

2. Sett opp miljøvariabler (se over)

3. Bygg prosjektet:

```bash
npm run build
```

4. Test lokalt:

```bash
npm run dev
```

## Deployment til Vercel

1. Push koden til GitHub
2. Importer prosjektet i Vercel
3. Legg til miljøvariabelen `MONGODB_URI` i Vercel dashboard
4. Deploy!

## Viktige Notater

- **MongoDB Connection**: MongoDB-tilkoblingen er satt opp med caching for serverless functions. Dette forhindrer for mange tilkoblinger.
- **Session Management**: Blackjack-spillet bruker for øyeblikket in-memory session management. For produksjon, vurder å bruke en database eller Redis.
- **CORS**: CORS er ikke konfigurert i API-rutene siden de kjører på samme domene. Hvis du trenger CORS, legg til i hver route.

## Feilsøking

### MongoDB-tilkobling feiler

- Sjekk at `MONGODB_URI` er riktig satt
- Sjekk at MongoDB Atlas IP whitelist inkluderer Vercel IPs (eller bruk 0.0.0.0/0 for testing)

### API routes returnerer 500

- Sjekk Vercel function logs
- Sjekk at alle dependencies er installert
- Sjekk at miljøvariabler er satt riktig

### Blackjack-spillet fungerer ikke

- Sjekk at frontend bruker riktig API base URL
- Sjekk browser console for feil
- Sjekk at alle API routes er deployet

