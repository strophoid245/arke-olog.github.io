#!/bin/bash

#  Türkçe - İngilizce Sözlük

sql="SELECT tr,en FROM sozluk_ingilizce_tr"
result=$(mysql dbase -s -e "$sql" | tail +1)

count=0

while read line
do
    tr=$(cut -f 1 <<< $line)
    en=$(cut -f 2 <<< $line)
    tr2=$(tr " " "-" <<< $tr | tr -s "-" | sed "y/ÇĞİÖŞÜçğıöşü/CGIOSUcgiosu/" | tr "A-Z" "a-z" | tr -dc "a-z0-9-")
    fileName="ingilizce-sozluk/turkce-kelimeler/$tr2.html"
    echo "<!DOCTYPE html><html><head><title>$tr İngilizce anlamı - İngilizce Sözlük - Arkeolog</title><meta charset=\"utf-8\"/><script src=\"/assets/script.js\"></script></head><body><h1>$tr</h1><p>$en</p></body></html>" > $fileName
    let count++
    echo "$count: $fileName"
done <<< $result