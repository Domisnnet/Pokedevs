#!/bin/bash

# Limpa o diretório public
rm -rf public/*

# Copia os arquivos de build para o diretório public
cp index.html public/
cp -r src/ public/

echo "Build concluído. A pasta public está pronta para o deploy."