# Adding a new category

1. Create the dataset at `src/data/<slug>.json` as an array of `{ "name": "..." }`
   items, for example `src/data/vegetables.json`:

   ```json
   [{ "name": "Carrot" }, { "name": "Broccoli" }]
   ```

2. Add a matching icon at `public/images/types/<slug>.png`.

3. Register the slug so it gets a route and a home tile:

   ```bash
   python3 updateEnv.py   # appends the slug to REACT_APP_CATEGORIES in .env
   ```

   (or add the slug to `REACT_APP_CATEGORIES` in `.env` by hand.)

4. Run the app and check the new category:

   ```bash
   npm start
   ```
