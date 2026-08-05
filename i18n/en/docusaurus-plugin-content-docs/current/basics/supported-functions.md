---
title: Supported Functions
description: A reference for common functions in the Desmos Graphing Calculator and 3D Calculator.
---

# Supported Functions

## Graphing Calculator

### Trigonometry

| Function | Input | Meaning |
| --- | --- | --- |
| $\sin$ | `sin(x)` | Sine |
| $\cos$ | `cos(x)` | Cosine |
| $\tan$ | `tan(x)` | Tangent |
| $\csc$ | `csc(x)` | Cosecant $(1/\sin x)$ |
| $\sec$ | `sec(x)` | Secant $(1/\cos x)$ |
| $\cot$ | `cot(x)` | Cotangent $(1/\tan x)$ |

### Inverse trigonometry

| Function | Input | Meaning |
| --- | --- | --- |
| `arcsin` | `arcsin(x)` | Inverse sine |
| `arccos` | `arccos(x)` | Inverse cosine |
| `arctan` | `arctan(x)` | Inverse tangent |
| `arccsc` | `arccsc(x)` | Inverse cosecant |
| `arcsec` | `arcsec(x)` | Inverse secant |
| `arccot` | `arccot(x)` | Inverse cotangent |

### Statistics

| Function | Input | Meaning |
| --- | --- | --- |
| `mean` | `mean([1,3,4])` | Mean |
| `median` | `median([1,3,4])` | Median |
| `min` / `max` | `min([1,3,4])` | Minimum / maximum |
| `quartile` | `quartile([1,3,4],2)` | Quartile |
| `quantile` | `quantile([1,3,4],0.2)` | Quantile |
| `stdev` / `stdevp` | `stdev([1,3,4])` | Sample / population standard deviation |
| `var` / `varp` | `var([1,3,4])` | Sample / population variance |
| `mad` | `mad([1,3,4])` | Mean absolute deviation |
| `cov` / `covp` | `cov([2,4,5],[1,3,2])` | Sample / population covariance |
| `corr` | `corr([2,4,5],[1,3,2])` | Pearson correlation coefficient |
| `spearman` | `spearman([2,4,5],[1,3,2])` | Spearman rank correlation |
| `stats` | `stats([1,3,3,4,5])` | Five-number summary |
| `count` | `count([1,3,3,4,5])` | Number of elements |
| `total` | `total([1,3,4])` | Sum of elements |

### List operations

| Function | Input | Meaning |
| --- | --- | --- |
| `join` | `join([1,2],[3,4])` | Join lists |
| `sort` | `sort([1,5,4])` | Sort a list |
| `shuffle` | `shuffle([1,5,4])` | Shuffle a list |
| `unique` | `unique([1,5,5,6])` | Remove duplicate values |
| `for` | `(a,0) for 1<a<3` | Parameters and list iteration |

### Visualizations

| Function | Input | Meaning |
| --- | --- | --- |
| `histogram` | `histogram([1,5,5,10])` | Histogram; optional width as second argument |
| `dotplot` | `dotplot([1,5,5,10])` | Dot plot; optional width as second argument |
| `boxplot` | `boxplot([1,5,5,10])` | Box plot |

### Probability distributions

| Function | Input | Meaning |
| --- | --- | --- |
| `normaldist` | `normaldist(0,1)` | Normal distribution |
| `tdist` | `tdist(10)` | Student’s t distribution |
| `chisqdist` | `chisqdist(5)` | Chi-square distribution |
| `poissondist` | `poissondist(5.5)` | Poisson distribution |
| `binomialdist` | `binomialdist(10,0.3)` | Binomial distribution |
| `uniformdist` | `uniformdist(0,1)` | Uniform distribution |
| `pdf` | `pdf(D,x)` | Probability density function |
| `cdf` | `cdf(D,x)` | Cumulative distribution function |
| `inversecdf` | `inversecdf(D,x)` | Quantile / inverse CDF |
| `random` | `random()` | Random number in $[0,1)$, or random list element |

### Statistical tests

| Function | Input | Meaning |
| --- | --- | --- |
| `ttest` | `ttest([20,31,51],40)` | One-sample t test |
| `tscore` | `tscore([20,31,51],40)` | t score |
| `ittest` | `ittest([10,13],[21,23])` | Two-sample t test |

### Calculus

| Function or symbol | Input | Meaning |
| --- | --- | --- |
| $\exp$ | `exp(x)` | Exponential function with base $e$ |
| $\ln$ | `ln(x)` | Natural logarithm |
| $\log$ | `log(x)` | Common logarithm |
| $\log_a$ | `log_a(x)` | Logarithm with any base |
| $\frac{d}{dx}$ | `d/dx` | Differentiate with respect to $x$ |
| $f'(x)$ | `f'(x)` | Derivative |
| $\int$ | `int` | Integral |
| $\sum$ | `sum` | Sum of a sequence |
| $\prod$ | `prod` | Product of a sequence |

### Hyperbolic functions

| Function | Input | Meaning |
| --- | --- | --- |
| `sinh` | `sinh(x)` | Hyperbolic sine |
| `cosh` | `cosh(x)` | Hyperbolic cosine |
| `tanh` | `tanh(x)` | Hyperbolic tangent |
| `csch` | `csch(x)` | Hyperbolic cosecant |
| `sech` | `sech(x)` | Hyperbolic secant |
| `coth` | `coth(x)` | Hyperbolic cotangent |

### Color and sound

| Function | Input | Meaning |
| --- | --- | --- |
| `rgb` | `c=rgb(255,165,0)` | Create a color from red, green, and blue values |
| `hsv` | `c=hsv(25,0.8,1)` | Create a color from hue, saturation, and value |
| `tone` | `tone(440)` | Play a frequency; optional gain as second argument |

### Number theory and rounding

| Function | Input | Meaning |
| --- | --- | --- |
| `lcm` | `lcm(2,3,4)` | Least common multiple |
| `gcd` | `gcd(6,12,18)` | Greatest common divisor |
| `mod` | `mod(17,5)` | Remainder |
| `ceil` | `ceil(13.5)` | Least integer not below the value |
| `floor` | `floor(13.5)` | Greatest integer not above the value |
| `round` | `round(1.32,2)` | Round to a specified place |
| `sign` | `sign(-20)` | Sign |
| `nthroot` | `nthroot(x,n)` | nth root |
| `nPr` | `nPr(6,2)` | Permutations |
| `nCr` | `nCr(6,2)` | Binomial coefficient |

### Actions and local variables

| Syntax | Input | Meaning |
| --- | --- | --- |
| $\to$ | `a->a+1` | Update a variable |
| `with` | `y=x+a with a=2` | Substitute a variable locally |

### Complex numbers

| Function | Input | Meaning |
| --- | --- | --- |
| `real` | `real(2+4i)` | Real part |
| `imag` | `imag(2+4i)` | Imaginary part |
| `conj` | `conj(2+4i)` | Complex conjugate |
| `arg` | `arg(2+4i)` | Argument |
| $|z|$ | `|2+4i|` | Magnitude |

### Geometry

| Function or symbol | Input | Meaning |
| --- | --- | --- |
| `midpoint` | `midpoint((1,0),(2,1))` | Midpoint of two points |
| `distance` | `distance((1,0),(2,1))` | Distance between two points |
| `polygon` | `polygon((0,0),(1,0),(0,1))` | Polygon |
| $\cdot$ | `(1,0)*(0,1)` | Dot product |
| $\times$ | `(1,0,0)cross(0,1,0)` | Cross product in 3D |
| $|v|$ | `|(1,2)|` | Vector magnitude |

### Polar coordinates, constants, and viewport

| Symbol or value | Input | Meaning |
| --- | --- | --- |
| $\theta$ | `theta` | Polar angle |
| $r$ | `r` | Distance from the origin |
| $\pi$ | `pi` | Pi |
| $\tau$ | `tau` | Two times pi |
| $e$ | `e` | Euler’s number |
| $\sim$ | `~` | Regression model |
| $\infty$ | `infinity` | Infinity |
| `width` | `width` | Viewport width |
| `height` | `height` | Viewport height |

## 3D Calculator

The functions above generally remain available, with these additional coordinates and functions.

### Spherical and cylindrical coordinates

| Symbol | Input | Meaning |
| --- | --- | --- |
| $\rho$ | `rho` | Distance from the origin in spherical coordinates |
| $\theta$ | `theta` | Azimuth |
| $\phi$ | `phi` | Polar angle |
| $r$ | `r` | Distance from the $z$ axis in cylindrical coordinates |

### 3D geometry

| Function or property | Input | Meaning |
| --- | --- | --- |
| `segment` | `segment((0,0,0),(2,2,2))` | Line segment |
| `triangle` | `triangle((0,0,0),(2,2,2),(1,3,2))` | Triangle |
| `sphere` | `sphere((0,0,0),1)` | Sphere from a center and radius |
| `vector` | `vector((0,0,0),(1,1,1))` | Vector from start and end points |
| `length` | `length(v_1)` | Length of a vector or segment |
| `.start` | `v_1.start` | Vector start point |
| `.end` | `v_1.end` | Vector end point |

## Reference

[Supported Functions — Desmos Help Center](https://help.desmos.com/hc/en-us/articles/212235786-Supported-Functions)
