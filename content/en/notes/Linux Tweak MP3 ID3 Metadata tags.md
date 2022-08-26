---  
updated: 2022-06-20 19:38  
created: 2022-06-07 00:00  
title: Linux Tweak MP3 ID3 Metadata tags  
aliases:  
  - Linux Tweak MP3 ID3 Metadata tags  
share: true  
website: en/notes  
tags:  
  - ملاحظة_مؤرشفة  
---  
  
  
المعرفة:: [Linux](Linux)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع::  
  
---  
  
## Checking ID3 Tags  
  
```bash  
eyeD3 file.mp3  
id3tool file.mp3  
id3info file.mp3  
mp3info file.mp3  
```  
  
## Removing All ID3 Tags  
  
### Using id3convert  
  
- Install `libid3-tools` first.  
  
```bash  
id3convert -s file.mp3  
fd .mp3 -x id3convert -s {}  
```  
  
### Using eyeD3  
  
Might not work with all files  
  
```bash  
eyeD3 --remove-all file.mp3  
fd .mp3 -x eyeD3 --remove-all {}  
```  
  
### Using mp3info  
  
```bash  
fd .mp3 -x mp3info -d {}  
```  
  
## Update ID3 Tags For All MP3 Files In Folder  
  
```bash  
fd .mp3 -x eyeD3 {} -a "author" -A "album" -c "comment" -t {.}  
fd .mp3 -x mp3info {} -a "author" -t {/.} -l "album" -y year  
fd .mp3 -x id3tool -r "author" -t {/.} -a "album" -y year {}  
# -t = title  
```  
  
## Update ID3 Tags version to 2.4  
  
```bash  
eyeD3 --to-v2.4 file.mp3  
```  
