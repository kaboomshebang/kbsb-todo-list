# kbsb-todo-list

A small Typescript todo-list project.

## Build

```bash
# globally install and run the node http-server package
npm install http-server -g
http-server

# run from the `project/todo-list` folder
tsc ./src/main.ts --watch --sourcemap true --target esnext --module esnext --outDir "./dist"

# or run
./compile.sh
```

## Todo's

- [ ] Finish logic for adding and rendering todo's
    - [ ] done button
    - [ ] remove button
- [ ] "Add new project" feature using a modal
- [ ] Make styling prettier (fonts/forms)
- [ ] Add Vercel website
- [ ] Optional: Add NPM config
- [ ] Optional: Add Vite
- [ ] Optional: connect to Airtable, SQLite or local storage
