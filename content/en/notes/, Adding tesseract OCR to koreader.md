---
title: Adding tesseract OCR to koreader
created: 2024-11-24 15:21:50
updated: 2024-11-24 15:28:59
aliases:
  - Adding tesseract OCR to koreader
share: true
website: en/notes
cssclass:
  - ltr
---

الحالة:: #ملاحظة/مؤرشفة  
المراجع:: <https://github.com/koreader/koreader/wiki/Dictionary-support#dictionary-lookups-in-scanned-pages>

---

> KOReader has a built-in OCR engine for recognizing words in scanned PDF/DJVU pages. In order to use OCR in scanned pages, you need to install respective Tesseract trained data and add new document languages to `koreader/defaults.lua`, if your language is other than English or Chinese.
>
> 1. Download [language data files for Tesseract 4.00+](https://tesseract-ocr.github.io/tessdoc/Data-Files) and copy the appropriate language data file (e.g. `eng.traineddata` in the `tesseract-fast repository` for English and `spa.traineddata` for Spanish) into `koreader/data/tessdata`.
>
> 2. To add new languages, open `koreader/defaults.custom.lua` and add languages via their `ISO 3-letter code` (important, this needs to match the training data filename!) to the `DKOPTREADER_CONFIG_DOC_LANGS_CODE` array:
>
> ```
> DKOPTREADER_CONFIG_DOC_LANGS_CODE = {"eng", "chi_sim"}    -- language code, make sure you have corresponding training data
> ```
>
> For example, for Kazakh these would be `kaz`; for Russian - `rus`, etc. If you are unsure of the code for your language, look at the tessdata filenames first.
>
> If you've never customized any advanced settings before, the file will _not_ exist, in which case, just follow the directions in the next sentence, any modified entries will appear in bold, and will automatically be added to the file on exit (this will also help making sure that file is syntactically sound).
>
> If you don't need to _add_ new entries, and simply want to modify the existing ones, you can also go to `Tools` > `More tools` > `Advanced settings` in the file-manager's top menu, and find the `DKOPTREADER_CONFIG_DOC_LANGS_CODE` entry there.
>
> `Forced OCR` option make KOReader to ignore any built-in text layers that come with pdf/djvu and use only OCR tessdata instead.
