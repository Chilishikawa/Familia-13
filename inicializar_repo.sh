#!/bin/bash

echo "# Familia-11" >> README.md
rm -rf .git
git init
git add README.md
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Chilishikawa/Familia-11.git

echo "✅ Repositorio inicializado y configurado con GitHub: Familia-11"
