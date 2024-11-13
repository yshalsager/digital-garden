---
created: 2022-02-23 00:00:00
updated: 2022-02-23 00:00:00
title: ffmpeg copy left audio to right
share: true
cssclass: ltr
website: en/notes
---

# ffmpeg copy left audio to right

الحالة:: #ملاحظة/مؤرشفة
الرابط: <https://superuser.com/a/1592759>
المعرفة:: [[Linux|Linux]]

---

Seems like you have a stereo input, but one channel is silent. You can

- Dump the silent channel and make a mono output (recommended method)
- Or copy the same channel to both channels

# **Mono output from specific channel**

![https://i.stack.imgur.com/eW3bO.png](https://i.stack.imgur.com/eW3bO.png)

Using the [pan filter](https://ffmpeg.org/ffmpeg-filters.html#pan). Example to place the Front Right channel of the stereo input into the mono output:

```
ffmpeg -i input.mp4 -af "pan=mono|FC=FR" -c:v copy output.mp4

```

Or use the [channelsplit filter](https://ffmpeg.org/ffmpeg-filters.html#channelsplit):

```
ffmpeg -i stereo.wav -af "channelsplit=channel_layout=stereo:channels=FR" -c:v copy output.mp4

```

- The video is [stream copied](https://ffmpeg.org/ffmpeg.html#Stream-copy) and is therefore untouched.
- See `ffmpeg -layouts` for accepted layout and channel names.

# **Copy same channel to both left and right**

![https://i.stack.imgur.com/oXd1I.png](https://i.stack.imgur.com/oXd1I.png)

Using the [pan filter](https://ffmpeg.org/ffmpeg-filters.html#pan). Example to place the Front Left channel of the stereo input into both the Front Left and Front Right channels of the stereo output.

```
ffmpeg -i input.mp4 -af "pan=stereo|FL=FL|FR=FL" -c:v copy output.mp4

```

- The video is [stream copied](https://ffmpeg.org/ffmpeg.html#Stream-copy) and is therefore untouched.
- See `ffmpeg -layouts` for accepted layout and channel names.

Also see [FFmpeg Wiki: Audio Channels](https://trac.ffmpeg.org/wiki/AudioChannelManipulation).
