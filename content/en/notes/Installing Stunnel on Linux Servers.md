---
created: 2021-03-25 00:00:00
updated: 2021-03-25 00:00:00
title: Installing Stunnel on Linux Servers
share: true
cssclass: ltr
website: en/notes
---

# Installing Stunnel on Linux Servers

التصنيف:: Linux
الحالة:: #ملاحظة/مؤرشفة
الرابط: <https://charlesreid1.com/wiki/Stunnel/SSH>
المعرفة:: [[Linux|Linux]]

---

<https://gist.github.com/bwann/82ed679e94972666808d97587d276677>

<https://charlesreid1.com/wiki/Stunnel/SSH>

- Enable port 443 in firewall
- Run

```bash
sudo apt install stunnel4
openssl req -new -x509 -days 365 -nodes -out stunnel.pem -keyout stunnel.pem
```

- Copy the following to /etc/stunnel/stunnel.conf:

```bash
cert = /home/username/stunnel.pem
key = /home/username/stunnel.pem
pid = /var/run/stunnel4/stunnel.pid
client  = no
[ssh]
accept  = 443
connect = 127.0.0.1:22
TIMEOUTclose = 0
```
