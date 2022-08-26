---  
created: 2021-12-15 00:00  
updated: 2022-01-10 00:00  
title: JavaScript Essential Training Study Notes  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
---  
  
  
# JavaScript Essential Training Study Notes  
  
التصنيف:: ملاحظات كورسات  
الحالة:: #ملاحظة_مؤرشفة  
  
## Where to put JS code?  
  
[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)  
  
### Inline: in an HTML document  
  
```html  
<script>  
  const allCode = document.querySelectorAll("code");  
  
  for (let item of allCode) {  
    item.innerHTML = `&lt;${item.innerHTML}&gt;`;  
  }  
</script>  
```  
  
### External file  
  
```html  
<script src="script.js"></script>  
```  
  
