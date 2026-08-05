---
title: Supported Functions
description: A reference for common functions in the Desmos Graphing Calculator and 3D Calculator.
---

# Supported Functions

## Graphing Calculator

### Trigonometry

| Function       | Input    | Meaning                |
| -------------- | -------- | ---------------------- |
| $\mathrm{sin}$ | `sin(x)` | Sine                   |
| $\mathrm{cos}$ | `cos(x)` | Cosine                 |
| $\mathrm{tan}$ | `tan(x)` | Tangent                |
| $\mathrm{csc}$ | `csc(x)` | Cosecant $(1/\sin x)$  |
| $\mathrm{sec}$ | `sec(x)` | Secant $(1/\cos x)$    |
| $\mathrm{cot}$ | `cot(x)` | Cotangent $(1/\tan x)$ |

### Inverse trigonometry

| Function          | Input       | Meaning           |
| ----------------- | ----------- | ----------------- |
| $\mathrm{arcsin}$ | `arcsin(x)` | Inverse sine      |
| $\mathrm{arccos}$ | `arccos(x)` | Inverse cosine    |
| $\mathrm{arctan}$ | `arctan(x)` | Inverse tangent   |
| $\mathrm{arccsc}$ | `arccsc(x)` | Inverse cosecant  |
| $\mathrm{arcsec}$ | `arcsec(x)` | Inverse secant    |
| $\mathrm{arccot}$ | `arccot(x)` | Inverse cotangent |

### Statistics

| Function                         | Input                       | Meaning                                |
| -------------------------------- | --------------------------- | -------------------------------------- |
| $\mathrm{mean}$                  | `mean([1,3,4])`             | Mean                                   |
| $\mathrm{median}$                | `median([1,3,4])`           | Median                                 |
| $\mathrm{min}/\mathrm{max}$      | `min([1,3,4])`              | Minimum / maximum                      |
| $\mathrm{quartile}$              | `quartile([1,3,4],2)`       | Quartile                               |
| $\mathrm{quantile}$              | `quantile([1,3,4],0.2)`     | Quantile                               |
| $\mathrm{stdev}/\mathrm{stdevp}$ | `stdev([1,3,4])`            | Sample / population standard deviation |
| $\mathrm{var}/\mathrm{varp}$     | `var([1,3,4])`              | Sample / population variance           |
| $\mathrm{mad}$                   | `mad([1,3,4])`              | Mean absolute deviation                |
| $\mathrm{cov}/\mathrm{covp}$     | `cov([2,4,5],[1,3,2])`      | Sample / population covariance         |
| $\mathrm{corr}$                  | `corr([2,4,5],[1,3,2])`     | Pearson correlation coefficient        |
| $\mathrm{spearman}$              | `spearman([2,4,5],[1,3,2])` | Spearman rank correlation              |
| $\mathrm{stats}$                 | `stats([1,3,3,4,5])`        | Five-number summary                    |
| $\mathrm{count}$                 | `count([1,3,3,4,5])`        | Number of elements                     |
| $\mathrm{total}$                 | `total([1,3,4])`            | Sum of elements                        |

### List operations

| Function           | Input               | Meaning                       |
| ------------------ | ------------------- | ----------------------------- |
| $\mathrm{join}$    | `join([1,2],[3,4])` | Join lists                    |
| $\mathrm{sort}$    | `sort([1,5,4])`     | Sort a list                   |
| $\mathrm{shuffle}$ | `shuffle([1,5,4])`  | Shuffle a list                |
| $\mathrm{unique}$  | `unique([1,5,5,6])` | Remove duplicate values       |
| $\mathrm{for}$     | `(a,0) for 1<a<3`   | Parameters and list iteration |

### Visualizations

| Function             | Input                   | Meaning                                      |
| -------------------- | ----------------------- | -------------------------------------------- |
| $\mathrm{histogram}$ | `histogram([1,5,5,10])` | Histogram; optional width as second argument |
| $\mathrm{dotplot}$   | `dotplot([1,5,5,10])`   | Dot plot; optional width as second argument  |
| $\mathrm{boxplot}$   | `boxplot([1,5,5,10])`   | Box plot                                     |

### Probability distributions

| Function                | Input                  | Meaning                                          |
| ----------------------- | ---------------------- | ------------------------------------------------ |
| $\mathrm{normaldist}$   | `normaldist(0,1)`      | Normal distribution                              |
| $\mathrm{tdist}$        | `tdist(10)`            | Student’s t distribution                         |
| $\mathrm{chisqdist}$    | `chisqdist(5)`         | Chi-square distribution                          |
| $\mathrm{poissondist}$  | `poissondist(5.5)`     | Poisson distribution                             |
| $\mathrm{binomialdist}$ | `binomialdist(10,0.3)` | Binomial distribution                            |
| $\mathrm{uniformdist}$  | `uniformdist(0,1)`     | Uniform distribution                             |
| $\mathrm{pdf}$          | `pdf(D,x)`             | Probability density function                     |
| $\mathrm{cdf}$          | `cdf(D,x)`             | Cumulative distribution function                 |
| $\mathrm{inversecdf}$   | `inversecdf(D,x)`      | Quantile / inverse CDF                           |
| $\mathrm{random}$       | `random()`             | Random number in $[0,1)$, or random list element |

### Statistical tests

| Function          | Input                     | Meaning           |
| ----------------- | ------------------------- | ----------------- |
| $\mathrm{ttest}$  | `ttest([20,31,51],40)`    | One-sample t test |
| $\mathrm{tscore}$ | `tscore([20,31,51],40)`   | t score           |
| $\mathrm{ittest}$ | `ittest([10,13],[21,23])` | Two-sample t test |

### Calculus

| Function or symbol | Input      | Meaning                            |
| ------------------ | ---------- | ---------------------------------- |
| $\exp$             | `exp(x)`   | Exponential function with base $e$ |
| $\ln$              | `ln(x)`    | Natural logarithm                  |
| $\log$             | `log(x)`   | Common logarithm                   |
| $\log_a$           | `log_a(x)` | Logarithm with any base            |
| $\frac{d}{dx}$     | `d/dx`     | Differentiate with respect to $x$  |
| $f'(x)$            | `f'(x)`    | Derivative                         |
| $\int$             | `int`      | Integral                           |
| $\sum$             | `sum`      | Sum of a sequence                  |
| $\prod$            | `prod`     | Product of a sequence              |

### Hyperbolic functions

| Function        | Input     | Meaning              |
| --------------- | --------- | -------------------- |
| $\mathrm{sinh}$ | `sinh(x)` | Hyperbolic sine      |
| $\mathrm{cosh}$ | `cosh(x)` | Hyperbolic cosine    |
| $\mathrm{tanh}$ | `tanh(x)` | Hyperbolic tangent   |
| $\mathrm{csch}$ | `csch(x)` | Hyperbolic cosecant  |
| $\mathrm{sech}$ | `sech(x)` | Hyperbolic secant    |
| $\mathrm{coth}$ | `coth(x)` | Hyperbolic cotangent |

### Color and sound

| Function        | Input              | Meaning                                            |
| --------------- | ------------------ | -------------------------------------------------- |
| $\mathrm{rgb}$  | `c=rgb(255,165,0)` | Create a color from red, green, and blue values    |
| $\mathrm{hsv}$  | `c=hsv(25,0.8,1)`  | Create a color from hue, saturation, and value     |
| $\mathrm{tone}$ | `tone(440)`        | Play a frequency; optional gain as second argument |

### Number theory and rounding

| Function           | Input           | Meaning                              |
| ------------------ | --------------- | ------------------------------------ |
| $\mathrm{lcm}$     | `lcm(2,3,4)`    | Least common multiple                |
| $\mathrm{gcd}$     | `gcd(6,12,18)`  | Greatest common divisor              |
| $\mathrm{mod}$     | `mod(17,5)`     | Remainder                            |
| $\mathrm{ceil}$    | `ceil(13.5)`    | Least integer not below the value    |
| $\mathrm{floor}$   | `floor(13.5)`   | Greatest integer not above the value |
| $\mathrm{round}$   | `round(1.32,2)` | Round to a specified place           |
| $\mathrm{sign}$    | `sign(-20)`     | Sign                                 |
| $\mathrm{nthroot}$ | `nthroot(x,n)`  | nth root                             |
| $\mathrm{nPr}$     | `nPr(6,2)`      | Permutations                         |
| $\mathrm{nCr}$     | `nCr(6,2)`      | Binomial coefficient                 |

### Actions and local variables

| Syntax          | Input            | Meaning                       |
| --------------- | ---------------- | ----------------------------- |
| $\mathrm{\to}$  | `a->a+1`         | Update a variable             |
| $\mathrm{with}$ | `y=x+a with a=2` | Substitute a variable locally |

### Complex numbers

| Function         | Input        | Meaning           |
| ---------------- | ------------ | ----------------- |
| $\mathrm{real}$  | `real(2+4i)` | Real part         |
| $\mathrm{imag}$  | `imag(2+4i)` | Imaginary part    |
| $\mathrm{conj}$  | `conj(2+4i)` | Complex conjugate |
| $\mathrm{arg}$   | `arg(2+4i)`  | Argument          |
| $\lvert z\rvert$ | `\|2+4i\|`   | Magnitude         |

### Geometry

| Function or symbol  | Input                        | Meaning                     |
| ------------------- | ---------------------------- | --------------------------- |
| $\mathrm{midpoint}$ | `midpoint((1,0),(2,1))`      | Midpoint of two points      |
| $\mathrm{distance}$ | `distance((1,0),(2,1))`      | Distance between two points |
| $\mathrm{polygon}$  | `polygon((0,0),(1,0),(0,1))` | Polygon                     |
| $\mathrm{\cdot}$    | `(1,0)*(0,1)`                | Dot product                 |
| $\mathrm{\times}$   | `(1,0,0)cross(0,1,0)`        | Cross product in 3D         |
| $\lvert v\rvert$    | `\|(1,2)\|`                  | Vector magnitude            |

### Polar coordinates, constants, and viewport

| Symbol or value   | Input      | Meaning                  |
| ----------------- | ---------- | ------------------------ |
| $\theta$          | `theta`    | Polar angle              |
| $r$               | `r`        | Distance from the origin |
| $\pi$             | `pi`       | Pi                       |
| $\tau$            | `tau`      | Two times pi             |
| $e$               | `e`        | Euler’s number           |
| $\sim$            | `~`        | Regression model         |
| $\infty$          | `infinity` | Infinity                 |
| $\mathrm{width}$  | `width`    | Viewport width           |
| $\mathrm{height}$ | `height`   | Viewport height          |

## 3D Calculator

The functions above generally remain available, with these additional coordinates and functions.

### Spherical and cylindrical coordinates

| Symbol   | Input   | Meaning                                               |
| -------- | ------- | ----------------------------------------------------- |
| $\rho$   | `rho`   | Distance from the origin in spherical coordinates     |
| $\theta$ | `theta` | Azimuth                                               |
| $\phi$   | `phi`   | Polar angle                                           |
| $r$      | `r`     | Distance from the $z$ axis in cylindrical coordinates |

### 3D geometry

| Function or property | Input                               | Meaning                          |
| -------------------- | ----------------------------------- | -------------------------------- |
| $\mathrm{segment}$   | `segment((0,0,0),(2,2,2))`          | Line segment                     |
| $\mathrm{triangle}$  | `triangle((0,0,0),(2,2,2),(1,3,2))` | Triangle                         |
| $\mathrm{sphere}$    | `sphere((0,0,0),1)`                 | Sphere from a center and radius  |
| $\mathrm{vector}$    | `vector((0,0,0),(1,1,1))`           | Vector from start and end points |
| $\mathrm{length}$    | `length(v_1)`                       | Length of a vector or segment    |
| $\mathrm{.start}$    | `v_1.start`                         | Vector start point               |
| $\mathrm{.end}$      | `v_1.end`                           | Vector end point                 |

## Reference

[Supported Functions — Desmos Help Center](https://help.desmos.com/hc/en-us/articles/212235786-Supported-Functions)
