#!/bin/bash

cp public/node_modules/layout-grid/dist/js/layout-grid.min.js public/dist/js/
cp public/node_modules/layout-grid/dist/css/layout-grid.min.css public/dist/css/

go build .
