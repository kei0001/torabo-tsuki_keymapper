#!/usr/bin/env python3
"""Inline src/* into a single self-contained index.html."""
import json, pathlib
s = pathlib.Path(__file__).parent / "src"
t = (s / "template.html").read_text()
t = (t.replace("/*KC*/", (s / "kc.js").read_text())
      .replace("/*LAYOUTS*/", (s / "layouts.json").read_text())
      .replace("/*INITIAL*/", json.dumps((s / "initial.keymap").read_text())))
body = t
page = ('<!doctype html>\n<html lang="ja">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n</head>\n<body>\n'
        + body + '\n</body>\n</html>\n')
(pathlib.Path(__file__).parent / "index.html").write_text(page)
print("wrote index.html", len(page), "bytes")
