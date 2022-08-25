#!/usr/bin/env bash
cd content/
find . -name "*.md" -exec perl -pi -e 's|^created: (\d+-\d+-\d+) (\d+:\d+)|date: \1|g' -i '{}' \; -exec perl -pi -e 's|^updated: (\d+-\d+-\d+) (\d+:\d+)(?:.*)?|lastmod: \1|g' -i '{}' \; -exec perl -pi -e 's|#(\S+?)/(\S+)|#\1_\2|g' -i '{}' \;
cd ..
