---
title: Change Battery mode and limit charging in Dell laptops on linux
created: 2023-10-19 07:15:26
updated: 2023-10-19 07:28:03
aliases:
  - Change Battery mode and limit charging in Dell laptops on linux
المعرفة: "[[Linux]]"
share: true
cssclass: ltr
website: en/notes
---

الحالة:: #ملاحظة/مؤرشفة  
المراجع:: <<https://aur.archlinux.org/packages/dell-command-configure>,> <https://www.dell.com/support/manuals/de-de/command-configure-v4.1/dcc_cli_4.1.0/-primarybattchargecfg?guid=guid-681d4efe-eed0-4d0f-b290-afdd74e81765&lang=en-us>

---

|   |   |
|---|---|
|**Valid Argument**|Standard, Express, PrimAcUse, Adaptive, Custom|
|**Description**|Configures the primary battery charging.<br><br>- Standard — Charges the battery over a longer period of time.<br>- Express — Charges the battery using the express charging algorithm, Dell's fast charging technology.<br>- PrimAcUse — Charges battery while plugged-in.<br>- Adaptive — Charges the battery based on a periodic evaluation of battery usage to deliver the best balance capacity.<br>- Custom — The battery charging starts and stops based on user input. The start value range should be 50-95 percent, the stop value range should be 55-100 percent, and the difference between the start and stop values should be greater than or equal to 5. |
|**Example**|C:\>cctk --PrimaryBattChargeCfg=Standard<br>PrimaryBattChargeCfg=Standard<br>C:\>cctk --PrimaryBattChargeCfg=Custom:50-70<br>PrimaryBattChargeCfg=Custom:50-70<br><br>- NOTE: The format to set custom option is custom:start value-stop value. The start value range must be 50–95 percentage and the stop value range must be 55–100 percentage. The difference between the start and stop values must be greater than or equal to 5.|
