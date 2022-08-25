---  
updated: 2022-06-20 19:38  
created: 2022-06-11 00:00  
title: Regex Match Arabic Letters  
  
aliases:  
  - Regex Match Arabic Letters  
share: true  
website: en/notes  
---  
  
المعرفة:: [](Regex)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: <https://gist.githubusercontent.com/Humoud/f40f58cd85c5935a444c/raw/c77dffa4c2ab75411f0c70c6bfcd6e1bcdbaf3e1/regex-arabic.md>  
  
---  
  
## Detect all Arabic Characters:  
  
`/[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD]/`  
  
Better: `[\u0600-\u06ff\u0750-\u077f\ufb50-\ufbc1\ufbd3-\ufd3f\ufd50-\ufd8f\ufd92-\ufdc7\ufe70-\ufefc\uFDF0-\uFDFD]`  
  
## Summary:  
  
```ruby  
  Arabic (0600—06FF, 225 characters)  
  
  Arabic Supplement (0750—077F, 48 characters)  
  
  Arabic Extended-A (08A0—08FF, 39 characters)  
  
  Arabic Presentation Forms-A (FB50—FDFF, 608 characters)  
  
  Arabic Presentation Forms-B (FE70—FEFF, 140 characters)  
  
  Rumi Numeral Symbols (10E60—10E7F, 31 characters)  
  
  Arabic Mathematical Alphabetic Symbols (1EE00—1EEFF, 143 characters)  
```  
  
For more info check this Wiki link to see Arabic letters in Unicode:  
  
<https://en.wikipedia.org/wiki/Arabic_(Unicode_block)>  
  
### References:  
  
<http://stackoverflow.com/questions/11323596/regular-expression-for-arabic-language>  
