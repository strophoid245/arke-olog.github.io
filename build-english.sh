#!/bin/bash

# İngilizce - İngilizce Sözlük

sql="SELECT word,gloss FROM sozluk_english"
result=$(mysql dbase -s -e "$sql" | tail +1)

count=0

while read line
do
    en=$(cut -f 1 <<< $line)
    tr=$(cut -f 2 <<< $line)
    en2=$(tr " " "-" <<< $en | tr -s "-" | tr "A-Z" "a-z" | tr -dc "a-z0-9-")
    fileName="ingilizce-sozluk/english-dictionary/$en2.html"
    echo "<!DOCTYPE html><html><head><title>$en İngilizce anlamı - İngilizce Sözlük - Arkeolog</title><meta charset=\"utf-8\"/><script src=\"/assets/script.js\"></script></head><body><h1>$en</h1><p>$tr</p></body></html>" > $fileName
    let count++
    echo "$count: $fileName"
done <<< $result