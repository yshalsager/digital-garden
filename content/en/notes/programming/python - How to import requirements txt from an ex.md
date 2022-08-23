---  
created: 2021-05-01 00:00  
updated: 2021-05-01 00:00  
title: python - How to import requirements txt from an ex  
share: true  
website: en/notes/programming  
---  
  
# python - How to import requirements.txt from an existing project using Poetry  
  
الحالة:: #ملاحظة/مؤرشفة  
الرابط: https://stackoverflow.com/a/62787881/10371745  
المعرفة:: [Python](Python)  
  
`poetry` doesn't support this directly. But if you have a handmade list of required packages (at best without any version numbers), that only contain the main dependencies and not the dependencies of a dependency you could do this:  
  
```bash  
cat requirements.txt | xargs poetry add  
```  
