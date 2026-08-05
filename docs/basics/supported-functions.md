---
title: 使用できる関数一覧
description: Desmosグラフ計算機と3D計算機で使用できる主な関数の一覧。
---

# 使用できる関数一覧

## グラフ計算機

### 三角関数

| 関数           | 入力例   | 意味                        |
| -------------- | -------- | --------------------------- |
| $\mathrm{sin}$ | `sin(x)` | サイン                      |
| $\mathrm{cos}$ | `cos(x)` | コサイン                    |
| $\mathrm{tan}$ | `tan(x)` | タンジェント                |
| $\mathrm{csc}$ | `csc(x)` | コセカント $(1/\sin x)$     |
| $\mathrm{sec}$ | `sec(x)` | セカント $(1/\cos x)$       |
| $\mathrm{cot}$ | `cot(x)` | コタンジェント $(1/\tan x)$ |

### 逆三角関数

| 関数                             | 入力例      | 意味                 |
| -------------------------------- | ----------- | -------------------- |
| $\mathrm{arcsin}$                | `arcsin(x)` | アークサイン         |
| $\mathrm{arccos}$                | `arccos(x)` | アークコサイン       |
| $\mathrm{arctan}$                | `arctan(x)` | アークタンジェント   |
| $\mathrm{\operatorname{arccsc}}$ | `arccsc(x)` | アークコセカント     |
| $\mathrm{\operatorname{arcsec}}$ | `arcsec(x)` | アークセカント       |
| $\mathrm{\operatorname{arccot}}$ | `arccot(x)` | アークコタンジェント |

### 統計

| 関数                             | 入力例                      | 意味                     |
| -------------------------------- | --------------------------- | ------------------------ |
| $\mathrm{mean}$                  | `mean([1,3,4])`             | 平均値                   |
| $\mathrm{median}$                | `median([1,3,4])`           | 中央値                   |
| $\mathrm{min}/\mathrm{max}$      | `min([1,3,4])`              | 最小値／最大値           |
| $\mathrm{quartile}$              | `quartile([1,3,4],2)`       | 四分位数                 |
| $\mathrm{quantile}$              | `quantile([1,3,4],0.2)`     | 分位数                   |
| $\mathrm{stdev}/\mathrm{stdevp}$ | `stdev([1,3,4])`            | 標本／母標準偏差         |
| $\mathrm{var}/\mathrm{varp}$     | `var([1,3,4])`              | 標本／母分散             |
| $\mathrm{mad}$                   | `mad([1,3,4])`              | 平均絶対偏差             |
| $\mathrm{cov}/\mathrm{covp}$     | `cov([2,4,5],[1,3,2])`      | 標本／母共分散           |
| $\mathrm{corr}$                  | `corr([2,4,5],[1,3,2])`     | ピアソンの積率相関係数   |
| $\mathrm{spearman}$              | `spearman([2,4,5],[1,3,2])` | スピアマンの順位相関係数 |
| $\mathrm{stats}$                 | `stats([1,3,3,4,5])`        | 五数要約                 |
| $\mathrm{count}$                 | `count([1,3,3,4,5])`        | 要素数                   |
| $\mathrm{total}$                 | `total([1,3,4])`            | 合計値                   |

### リスト操作

| 関数               | 入力例              | 意味                       |
| ------------------ | ------------------- | -------------------------- |
| $\mathrm{join}$    | `join([1,2],[3,4])` | リストを結合               |
| $\mathrm{sort}$    | `sort([1,5,4])`     | リストを並べ替える         |
| $\mathrm{shuffle}$ | `shuffle([1,5,4])`  | リストをシャッフル         |
| $\mathrm{unique}$  | `unique([1,5,5,6])` | 重複を取り除く             |
| $\mathrm{for}$     | `(a,0) for 1<a<3`   | パラメータ表示やリスト処理 |

### 可視化

| 関数                 | 入力例                  | 意味                                  |
| -------------------- | ----------------------- | ------------------------------------- |
| $\mathrm{histogram}$ | `histogram([1,5,5,10])` | ヒストグラム。第2引数に幅を指定可能   |
| $\mathrm{dotplot}$   | `dotplot([1,5,5,10])`   | ドットプロット。第2引数に幅を指定可能 |
| $\mathrm{boxplot}$   | `boxplot([1,5,5,10])`   | 箱ひげ図                              |

### 確率分布

| 関数                    | 入力例                 | 意味                                              |
| ----------------------- | ---------------------- | ------------------------------------------------- |
| $\mathrm{normaldist}$   | `normaldist(0,1)`      | 平均値と標準偏差による正規分布                    |
| $\mathrm{tdist}$        | `tdist(10)`            | 自由度によるt分布                                 |
| $\mathrm{chisqdist}$    | `chisqdist(5)`         | 自由度によるカイ二乗分布                          |
| $\mathrm{poissondist}$  | `poissondist(5.5)`     | 平均値によるポアソン分布                          |
| $\mathrm{binomialdist}$ | `binomialdist(10,0.3)` | 試行回数と成功確率による二項分布                  |
| $\mathrm{uniformdist}$  | `uniformdist(0,1)`     | 区間による一様分布                                |
| $\mathrm{pdf}$          | `pdf(D,x)`             | 確率密度関数                                      |
| $\mathrm{cdf}$          | `cdf(D,x)`             | 累積分布関数                                      |
| $\mathrm{inversecdf}$   | `inversecdf(D,x)`      | 分位関数（逆累積分布関数）                        |
| $\mathrm{random}$       | `random()`             | $0$ 以上 $1$ 未満の乱数。リストではランダムな要素 |

### 統計検定

| 関数              | 入力例                    | 意味                |
| ----------------- | ------------------------- | ------------------- |
| $\mathrm{ttest}$  | `ttest([20,31,51],40)`    | 標本と値へのt検定   |
| $\mathrm{tscore}$ | `tscore([20,31,51],40)`   | 標本と値に対するt値 |
| $\mathrm{ittest}$ | `ittest([10,13],[21,23])` | 2標本へのt検定      |

### 微分積分

| 関数・記号        | 入力例     | 意味                |
| ----------------- | ---------- | ------------------- |
| $\mathrm{exp}$    | `exp(x)`   | 底が $e$ の指数関数 |
| $\mathrm{ln}$     | `ln(x)`    | 自然対数            |
| $\mathrm{log}$    | `log(x)`   | 常用対数            |
| $\mathrm{\log}_a$ | `log_a(x)` | 任意の底の対数      |
| $\frac{d}{dx}$    | `d/dx`     | $x$ で微分          |
| $f'(x)$           | `f'(x)`    | 関数を微分          |
| $\mathrm{\int}$   | `int`      | 積分                |
| $\mathrm{\sum}$   | `sum`      | 数列の総和          |
| $\mathrm{\prod}$  | `prod`     | 数列の総積          |

### 双曲線関数

| 関数            | 入力例    | 意味                         |
| --------------- | --------- | ---------------------------- |
| $\mathrm{sinh}$ | `sinh(x)` | ハイパボリックサイン         |
| $\mathrm{cosh}$ | `cosh(x)` | ハイパボリックコサイン       |
| $\mathrm{tanh}$ | `tanh(x)` | ハイパボリックタンジェント   |
| $\mathrm{csch}$ | `csch(x)` | ハイパボリックコセカント     |
| $\mathrm{sech}$ | `sech(x)` | ハイパボリックセカント       |
| $\mathrm{coth}$ | `coth(x)` | ハイパボリックコタンジェント |

### 色とサウンド

| 関数            | 入力例             | 意味                                            |
| --------------- | ------------------ | ----------------------------------------------- |
| $\mathrm{rgb}$  | `c=rgb(255,165,0)` | 赤・緑・青を各 $0$〜$255$ で指定して色を作る    |
| $\mathrm{hsv}$  | `c=hsv(25,0.8,1)`  | 色相・彩度・明度を指定して色を作る              |
| $\mathrm{tone}$ | `tone(440)`        | 指定周波数の音を再生。第2引数にゲインを指定可能 |

### 数論・丸め

| 関数               | 入力例          | 意味                 |
| ------------------ | --------------- | -------------------- |
| $\mathrm{lcm}$     | `lcm(2,3,4)`    | 最小公倍数           |
| $\mathrm{gcd}$     | `gcd(6,12,18)`  | 最大公約数           |
| $\mathrm{mod}$     | `mod(17,5)`     | 余り                 |
| $\mathrm{ceil}$    | `ceil(13.5)`    | 下回らない最小の整数 |
| $\mathrm{floor}$   | `floor(13.5)`   | 上回らない最大の整数 |
| $\mathrm{round}$   | `round(1.32,2)` | 指定した位で四捨五入 |
| $\mathrm{sign}$    | `sign(-20)`     | 符号                 |
| $\mathrm{nthroot}$ | `nthroot(x,n)`  | $n$ 乗根             |
| $\mathrm{nPr}$     | `nPr(6,2)`      | 順列                 |
| $\mathrm{nCr}$     | `nCr(6,2)`      | 二項係数             |

### アクションとローカル変数

| 記号・構文      | 入力例           | 意味                     |
| --------------- | ---------------- | ------------------------ |
| $\mathrm{\to}$  | `a->a+1`         | 変数を更新するアクション |
| $\mathrm{with}$ | `y=x+a with a=2` | 式の中だけで変数を置換   |

### 複素数

| 関数             | 入力例       | 意味     |
| ---------------- | ------------ | -------- |
| $\mathrm{real}$  | `real(2+4i)` | 実部     |
| $\mathrm{imag}$  | `imag(2+4i)` | 虚部     |
| $\mathrm{conj}$  | `conj(2+4i)` | 複素共役 |
| $\mathrm{arg}$   | `arg(2+4i)`  | 偏角     |
| $\lvert z\rvert$ | `\|2+4i\|`   | 絶対値   |

### 幾何学

| 関数・記号          | 入力例                       | 意味             |
| ------------------- | ---------------------------- | ---------------- |
| $\mathrm{midpoint}$ | `midpoint((1,0),(2,1))`      | 2点の中点        |
| $\mathrm{distance}$ | `distance((1,0),(2,1))`      | 2点間の距離      |
| $\mathrm{polygon}$  | `polygon((0,0),(1,0),(0,1))` | 多角形           |
| $\mathrm{\cdot}$    | `(1,0)*(0,1)`                | 内積             |
| $\mathrm{\times}$   | `(1,0,0)cross(0,1,0)`        | 外積（3次元）    |
| $\lvert v\rvert$    | `\|(1,2)\|`                  | ベクトルの大きさ |

### 極座標・定数・表示領域

| 記号・値          | 入力例     | 意味           |
| ----------------- | ---------- | -------------- |
| $\theta$          | `theta`    | 偏角           |
| $r$               | `r`        | 原点からの距離 |
| $\pi$             | `pi`       | 円周率         |
| $\tau$            | `tau`      | 円周率の2倍    |
| $e$               | `e`        | ネイピア数     |
| $\mathrm{\sim}$   | `~`        | 回帰モデル     |
| $\mathrm{\infty}$ | `infinity` | 無限大         |
| $\mathrm{width}$  | `width`    | 表示領域の横幅 |
| $\mathrm{height}$ | `height`   | 表示領域の縦幅 |

## 3D計算機

2Dの関数に加えて、以下の関数や座標を利用できます。

### 球座標・円筒座標

| 記号     | 入力例  | 意味                        |
| -------- | ------- | --------------------------- |
| $\rho$   | `rho`   | 球座標で原点からの距離      |
| $\theta$ | `theta` | 方位角                      |
| $\phi$   | `phi`   | 天頂角                      |
| $r$      | `r`     | 円筒座標で $z$ 軸からの距離 |

### 3D幾何学

| 関数・プロパティ    | 入力例                              | 意味                         |
| ------------------- | ----------------------------------- | ---------------------------- |
| $\mathrm{segment}$  | `segment((0,0,0),(2,2,2))`          | 線分                         |
| $\mathrm{triangle}$ | `triangle((0,0,0),(2,2,2),(1,3,2))` | 三角形                       |
| $\mathrm{sphere}$   | `sphere((0,0,0),1)`                 | 中心と半径を指定した球       |
| $\mathrm{vector}$   | `vector((0,0,0),(1,1,1))`           | 始点と終点を指定したベクトル |
| $\mathrm{length}$   | `length(v_1)`                       | ベクトルまたは線分の長さ     |
| $\mathrm{.start}$   | `v_1.start`                         | ベクトルの始点               |
| $\mathrm{.end}$     | `v_1.end`                           | ベクトルの終点               |

## 参考

[Supported Functions — Desmos Help Center](https://help.desmos.com/hc/en-us/articles/212235786-Supported-Functions)
