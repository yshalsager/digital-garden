---  
created: 2021-02-13 00:00  
updated: 2021-02-13 00:00  
title: Android logcat  
share: true  
website: en/notes  
---  
  
التصنيف:: Android  
الحالة:: #ملاحظة_مؤرشفة  
المعرفة:: [Linux](Linux)  
  
---  
  
## How to trim  
  
```bash  
grep -iE 'crash|error|fail|fatal' <yourfulllog> &> <trimmed_log>  
```  
  
- **Types**  
  The three most important log types are:  
  logcat: the logoutput of the Android system  
  radio logcat: the log outpur ot your System / BB / RIL communication  
  kernel log (kmsg / dmesg): the kernel messages  
  Additionally there's the last_kmsg which is a dump of the kernel log until the last shutdown.  
  Normal Logcat:  
  ```bash  
  adb logcat -v time -d > logcat.log  
  ```  
  Radio Logcat:  
  ```bash  
  adb logcat -b radio -v time -d > logcat_radio.log  
  ```  
  Note: Cyanogenmod (based) ROMs require the following setting to export kernel logs via adb:  
  Settings - Developer Options - Root access - choose: "Apps and ADB"  
  Kernel Log:  
  ```bash  
  adb shell su -c dmesg > dmesg.log  
  ```  
  Last_kmsg:  
  ```bash  
  adb shell su -c "cat /proc/last_kmsg" >  
  ```  
  - How to take logs  
    <http://telegra.ph/HOW-TO-TAKE-LOGS-06-11>  
    <https://forum.xda-developers.com/showpost.php?p=70974375&postcount=3>  
    SysLog  
    <https://f-droid.org/app/com.tortel.syslog>  
    Or  
    <https://play.google.com/store/apps/details?id=com.tortel.syslog>  
    AIOlogs Take logs with PC, useful when there are bootloops  
    <https://forum.xda-developers.com/showthread.php?t=1944776>  
    Or  
    <https://forum.xda-developers.com/showthread.php?t=2324411>  
    More log guides:  
    <https://www.xda-developers.com/guide-sending-a-logcat-to-help-debug-your-favorite-app/>  
    <https://plus.google.com/+CharG/posts/LbPX25m61nT>  
- **How to take logs**  
  <http://telegra.ph/HOW-TO-TAKE-LOGS-06-11>  
  <https://forum.xda-developers.com/showpost.php?p=70974375&postcount=3>  
  SysLog  
  <https://f-droid.org/app/com.tortel.syslog>  
  Or  
  <https://play.google.com/store/apps/details?id=com.tortel.syslog>  
  AIOlogs Take logs with PC, useful when there are bootloops  
  <https://forum.xda-developers.com/showthread.php?t=1944776>  
  Or  
  <https://forum.xda-developers.com/showthread.php?t=2324411>  
  More log guides:  
  <https://www.xda-developers.com/guide-sending-a-logcat-to-help-debug-your-favorite-app/>  
  <https://plus.google.com/+CharG/posts/LbPX25m61nT>  
