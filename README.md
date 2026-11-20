# torabo-tsuki keymapper

torabo-tsuki LP（BMP Boost / ZMK）用のブラウザで動くキーマップエディタ。

ZMK Studio は既存の behavior をキーに割り当てるだけで、hold-tap や tap-dance を新しく定義できない。keymap-editor はパラメータの細かい調整がしづらい。その間を埋めるためのツール。

## できること

- 文字配列のプリセット：QWERTY（初期）、Dvorak、Colemak、Colemak-DH、大西配列。切り替えてもホームロウmodなどの修飾はそのまま残る
- S / M / L の物理レイアウトでキー配置を表示・編集（ドラッグで入れ替え、実機のキーを押して指定）
- hold-tap（ホームロウmod）を GUI で定義：flavor、tapping-term、quick-tap、require-prior-idle、反対の手だけでホールド判定する `hold-trigger-key-positions` をキーボードの図から選択
- tap-dance、コンボ、自由記述の behavior（マクロ等）
- 標準 `&mt` の誤爆しやすさ、引数の逆、未定義の behavior などをチェック
- `.keymap` の読み込みと書き出し（`display-name` 付きなので ZMK Studio にも表示される）
- 高分解能ダイヤルのレイヤー別設定：縦／横スクロール、音量調整、スクロール量（5〜200%）をGUIで編集。対応する `sensor-bindings` を `.keymap` に出力

## 使い方

GitHub Pages で `index.html` を開く。編集内容はブラウザの localStorage に保存される。

書き出した `.keymap` を zmk-config に置いてビルドし、セントラル側の UF2 を焼く。ZMK Studio で保存したことがある場合は「Restore Stock Settings」をしてから確認する。

## 高分解能ダイヤルの調整

「ダイヤル」タブで各レイヤーの動作（設定なし／縦スクロール／横スクロール／音量調整）を選び、スクロール時はスライダーで量を調整します。100%は `&hires_dial_scroll 10 1`、50%は `20 1` に相当します。設定はローカル保存とUndo/Redoに対応します。

`.keymap` の書き出しでは、ダイヤル設定があるレイヤーを `TORABO_TSUKI_LP_INPUT_HIRES_DIAL` 条件付きの `sensor-bindings` として出力します。既存の `feature/hires-dial` 設定にある条件付き押し込みキーも、読み込みと書き出しで保持します。読み込んだキーマップの内容を変更しても即座に実機に反映されるわけではなく、対応snippetを有効にして再ビルド・UF2書き込みが必要です。ZMK Studio上でダイヤル感度を直接変更する機能ではありません。

## 位置番号について

このキーボードのキーマップは L レイアウト（66キー）の番号で書かれている。一方 ZMK は、コンボの `key-positions` と hold-tap の `hold-trigger-key-positions` を **選択中の物理レイアウトの番号** で照合する（キーマップの割り当てだけが stock レイアウトに変換される）。

そのためエディタは、画面上では L の番号で扱い、書き出し時に選択中のレイアウト（XS なら S）の番号に変換する。ZMK Studio で選んでいる物理レイアウトとエディタのレイアウトは揃えておくこと。

## 開発

`src/` を編集して `python3 build.py` で `index.html` を生成する。

- `src/template.html` — UI・パーサ・ジェネレータ
- `src/kc.js` — ZMK キーコード表
- `src/layouts.json` — torabo-tsuki LP の物理レイアウトと position map
- `src/initial.keymap` — 初期表示のキーマップ（QWERTY・Base / Num / Nav の3レイヤー）

## ライセンス

GPL-3.0（[LICENSE](LICENSE)）。

`src/layouts.json` の物理レイアウト座標と position map は、GPL-3.0 で公開されている torabo-tsuki LP 用 ZMK ファームウェア（[sekigon-gonnoc/torabo-tsuki-lp](https://github.com/sekigon-gonnoc/torabo-tsuki-lp) 系）の `torabo_tsuki_lp_layouts.dtsi` を元にしているため、本ツールも GPL-3.0 で公開する。
