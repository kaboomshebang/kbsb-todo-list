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
