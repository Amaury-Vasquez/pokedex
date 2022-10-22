#!/bin/bash
route=$1;
mkdir $route;

index="${route}/index.tsx";
styles="${route}/${route,,}.module.css";

touch $index $styles;