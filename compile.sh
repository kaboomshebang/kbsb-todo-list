#!/bin/bash

tsc ./src/main.ts --watch --sourcemap true --target esnext --module esnext --outDir "./dist"
