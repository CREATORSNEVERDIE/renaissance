<p align="center">
<a href="https://renaissancecss.com" target="_blank">
<img alt="RenaissanceCSS" title="RenaissanceCSS" src="https://i.imgur.com/GcGK7aO.gif" width="330">
</a>
</p>
<p align="center">The <b>FRESHEST</b> css framework.</p>

**🎨 We got the basics down:**

- Mobile First
- Flexbox Grids
- BEM methodology
- Beautiful Forms
- Useful components: [Navbar], [Tabs], [Tables], [CSS-Only Icons], [Checkout Screen], [Calendar],[Modal]
- Autoprefixed


<!-- ### More examples at [Renaissance Docs ➞](https://renaissancecss.com/docs) -->

---

## Getting Started

Either use the supplied css file on upkg

    https://unpkg.com/renaissancecss@latest/renaissance.css

or using NPM:

    npm install renaissancecss


## BEM

Starting from V2, the class names have been totally wiped and follows the BEM methodology now. For more info on BEM, visit https://css-tricks.com/bem-101/

**Parent Classes:**

| Class Name                  | Component                              |
|-----------------------------|--------------------------------------------------|
| `navbar`                    | Navbar Parent Class                              |
| `notification`              | Notification Parent Class                        |
| `progressBar`               | Progress Bar Parent Class                        |
| `tabs`                      | Tabs Parent Class                                |
| `table`                     | Table Parent Class                               |
| `calendar`                  | Calendar Parent Class                            |
| `cart`                      | Checkout Parent Class                            |
| `modal`                     | Modal Parent Class                               |
| `breadcrumbs`               | Breadcrumbs Parent Class                         |



## Grid

Renaissance uses flexbox for it's grid system. Following tradional syntax, there are containers, rows and columns.

Columns must be placed inside a row:
```html
<div class="row">
    <div class="column">
    </div>
</div>
```
All columns break into their own block when on mobile, regardless of stated column size:
```html
<div class="column--1"></div>
<div class="column--2"></div>
<div class="column--3"></div>
<div class="column--4"></div>
<div class="column--5"></div>
<div class="column--6"></div>
<div class="column--7"></div>
<div class="column--8"></div>
<div class="column--9"></div>
<div class="column--10"></div>
<div class="column--11"></div>
<div class="column--12"></div>
```


---

## License

Copyright (c) 2018-present CREATORSNEVERDIE
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 

 

