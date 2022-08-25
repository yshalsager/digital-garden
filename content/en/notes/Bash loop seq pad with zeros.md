---  
created: 2022-06-03 20:33  
updated: 2022-06-20 18:34  
title: Bash loop seq pad with zeros  
share: true  
website: en/notes  
---  
  
#ملاحظة_مؤرشفة  
المعرفة:: [](Bash), [Linux](Linux)  
  
```bash  
for i in $(seq -f "%03g" 1 114); do echo "https://audio.qurancomplex.gov.sa/site/library/quran/ayub/$i.mp3"; done  
```  
