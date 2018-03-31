<p align="center">
<img alt="RenaissanceCSS" title="RenaissanceCSS" src="https://i.imgur.com/GcGK7aO.gif" width="330">
</p>
<p align="center">The <b>FRESHEST</b> css framework.</p>

**🎨 We got the basics down:**

- Mobile First
- Flexbox Grids
- BEM methodology
- Beautiful Forms
- Useful components: [Navbar], [Tabs], [Tables], [CSS-Only Icons], [Checkout Screen], [Calendar],[Modal], [Breadcrumbs], [Progress Bar], [Slider]
- Autoprefixed

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

Containers have a max width and is centered on the screen. If you want a fluid container just make any random div.
```html
<div class="container">
    ...
</div>
```

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

Navbar:
```html
<nav class="navbar">
  <a class="navbar__brand">
      <h3>Renaissance</h3>
  </a>
  
  <div class="navbar__hamburger">
      <span class="icon__hamburger"></span>
      <span class="icon__closeIcon"></span>
  </div>

  <div class="navbar__menu">
      <a href="#" class="navbar__menu__link">Link</a>
  </div>
</nav>
```

Checkbox:
```html
<div class="checkbox">
  <input type="checkbox" name="checkboxNameHere" id="cb1" />
  <label for="cb1">Email</label>
</div>
```

Radio:
```html
<div class="radio">
  <input type="radio" id="radioChoice1"
  name="radioButtonNameHere" value="email">
  <label for="radioChoice1">Email</label>
</div>
```

Slider:
```html
<input class="slider" type="range" value="250" min="0" max="500" step="50">
```

Notifications:

Has 3 types: --success, --warning, --error
```html
<div class="notification--success">
  <div class="notification__iconContainer">
      <div class="icon">
      <span class="icon__checkIcon"></span>
      </div>
  </div>
  <div class="notification__body">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, reprehenderit obcaecati itaque. Officiis libero provident perspiciatis eum fugiat laudantium sequi.</p>
  </div>
</div>
```

Modal:
```html
<div class="modal">
  <div class="modal__container">
      <div class="modal__header">
          <h3>Modal</h3>
      </div>
      <div class="modal__body">
          <p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div class="modal__footer">
          <button>Close</button>
      </div>
  </div>
</div>
```

Breadcrumb:
```html
<div class="breadcrumbs">
  <div class="crumb">
      <a href="#" >One</a><a href="#">Two</a><a href="#">Three</a><a href="#" class="active">Four</a>
  </div>
</div>
```

Calendar:
```html
<table class="calendar">

  <caption class="calendar__year">
      <a href="#" class="calendar__year__prev">Previous</a>
      <span class="calendar__year__title">April 2013</span>
      <a href="#" class="calendar__year__next">Next</a>
  </caption>

  <thead class="calendar__header">
      <tr>
      <th class="calendar__header__day">Mo</th>
      <th class="calendar__header__day">Tu</th>
      <th class="calendar__header__day">We</th>
      <th class="calendar__header__day">Th</th>
      <th class="calendar__header__day">Fr</th>
      <th class="calendar__header__day">Sa</th>
      <th class="calendar__header__day">Su</th>
      </tr>
  </thead>

  <tbody class="calendar__dates">
    <tr>
    <td><a href="#">1</a></td>
    <td><a href="#">2</a></td>
    <td><a href="#">3</a></td>
    <td><a href="#">4</a></td>
    <td><a href="#">5</a></td>
    <td><a href="#">6</a></td>
    <td><a href="#">7</a></td>
    </tr>
    <tr>
    <td><a href="#">8</a></td>
    <td><a href="#">9</a></td>
    <td class="calendar__dates--today"><a href="#">10</a></td>
    <td><a href="#">11</a></td>
    <td><a href="#">12</a></td>
    <td><a href="#">13</a></td>
    <td><a href="#">14</a></td>
    </tr>
    <tr>
    <td><a href="#">15</a></td>
    <td><a href="#">16</a></td>
    <td><a href="#">17</a></td>
    <td><a href="#">18</a></td>
    <td><a href="#">19</a></td>
    <td><a href="#">20</a></td>
    <td><a href="#">21</a></td>
    </tr>
    <tr>
    <td><a href="#">22</a></td>
    <td><a href="#">23</a></td>
    <td><a href="#">24</a></td>
    <td><a href="#">25</a></td>
    <td><a href="#">26</a></td>
    <td><a href="#">27</a></td>
    <td><a href="#">28</a></td>
    </tr>
    <tr>
    <td><a href="#">29</a></td>
    <td><a href="#">30</a></td>
    <td class="calendar__dates--off"><a href="#">1</a></td>
    <td class="calendar__dates--off"><a href="#">2</a></td>
    <td class="calendar__dates--off"><a href="#">3</a></td>
    <td class="calendar__dates--off"><a href="#">4</a></td>
    <td class="calendar__dates--off"><a href="#">5</a></td>
    </tr>
  </tbody>
</table>
```

Cart:
```html
<div class="cart">

  <div class="cart__header">
    <h4>My Cart</h4>
    <button>Continue Shopping</button>
  </div>

  <div class="cart__body">
    <ul class="cart__body__list">
      <li class="cart__body__list__item">      
        <img src="https://picsum.photos/300" alt="" class="itemImg" />

        <div class="cart__body__list__item__meta">
            <p>#000</p>
            <h4>Item Name 1</h4>
            <div class="cart__body__list__item__meta__quanity">
            <p class="cart__body__list__item__meta__quanity__value"><input type="text" value="3"/> x $5.00</p> 
            <p class="cart__body__list__item__meta__quanity__status"> In Stock</p>
            </div>
        </div>

        <p class="cart__body__list__item__price">$15.00</p>
        
        <div class="cart__body__list__item__close">
          <div class="icon__closeIcon"></div>
        </div>
      </li>      
    </ul>
  </div>

  <div class="cart__footer">

    <div class="cart__footer__promo">
      <label for="promo">Have A Promo Code?</label>
      <input type="text" name="promo" placholder="Enter Code" />
    </div>

    <ul class="cart__footer__prices">
      <li class="cart__footer__prices__price"><span >Subtotal</span><span>$35.00</span></li>    
      <li class="cart__footer__prices__price"><span >Shipping</span><span>$5.00</span></li>
      <li class="cart__footer__prices__price"><span >Tax</span><span>$4.00</span></li>
      <li class="cart__footer__prices__price--final"><span >Total</span><span>$44.00</span></li>
      <li class="cart__footer__prices__checkout"><a href="#">Checkout</a></li>
    </ul>

  </div>

</div>
```

Progress Bar:
```html
<div class="progressBar">
  <div class="progressBar__bar"></div>
</div>
```

Tabs:
```html
<div class="tabs">
  <ul class="tabs__nav">
      <a href="#tab1" class="tabs__nav__navItem--active">Tab 1</a>
      <a href="#tab2" class="tabs__nav__navItem">Tab 2</a>
      <a href="#tab3" class="tabs__nav__navItem">Tab 3</a>
      <a href="#tab4" class="tabs__nav__navItem">Tab 4</a>
      <a href="#tab5" class="tabs__nav__navItem">Tab 5</a>
  </ul>
    
  <section class="tabs__body">
      <div id="tab1">
          <h2>Heading 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla deserunt consectetur ratione id tempore laborum laudantium facilis reprehenderit beatae dolores ipsum nesciunt alias iusto dicta eius itaque blanditiis modi velit.</p>
      </div>
      <div id="tab2">
          <h2>Heading 2</h2>
          <p>Adipisci autem obcaecati velit natus quos beatae explicabo at tempora minima voluptates deserunt eum consectetur reiciendis placeat dolorem repellat in nam asperiores impedit voluptas iure repellendus unde eveniet accusamus ex.</p>
      </div>
      <div id="tab3">
          <h2>Heading 3</h2>
          <p>Atque ratione soluta laboriosam illo inventore amet ipsum aliquam assumenda harum provident nam accusantium neque debitis obcaecati maxime officia saepe ad ducimus in quam libero vero quasi. Saepe sit nisi?</p>
      </div>
      <div id="tab4">
          <h2>Heading 4</h2>
          <p>Quidem perferendis id sapiente cumque ullam repellendus dolorum odit rerum quibusdam tempora voluptatibus ipsum. Maiores laborum velit aperiam dicta quisquam assumenda at esse exercitationem culpa sequi porro minus ipsa aut.</p>
      </div>
      <div id="tab5">
          <h2>Heading 5</h2>
          <p>Iste eligendi ratione libero impedit quos necessitatibus labore corporis deserunt quo porro hic eius delectus ea ad amet dolore officiis debitis! Libero officia magnam consequuntur dignissimos molestias quia modi repellat.</p>
      </div>
  </section>
</div>
```

Table:
```html
<div class="table table__header">
  <table>
    <thead>
      <tr>
        <th>Full Name</th>
        <th>Email</th>
        <th>Country</th>
        <th>Activated</th>
        <th>Phone Number</th>
      </tr>
    </thead>
  </table>
</div>
<div class="table table__content">
  <table>
      <tbody>
        <tr>
            <td data-label="Full Name">John Doe</td>
            <td data-label="Email">doe@john.com</td>
            <td data-label="Country">CA</td>
            <td data-label="Activated">True</td>
            <td data-label="Phone Number">4161234567</td>
        </tr>

        <tr>
            <td data-label="Full Name">John Doe</td>
            <td data-label="Email">doe@john.com</td>
            <td data-label="Country">CA</td>
            <td data-label="Activated">True</td>
            <td data-label="Phone Number">4161234567</td>
        </tr>
      </tbody>
  </table>
</div>
```

---

## License

Copyright (c) 2018-present CREATORSNEVERDIE
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 

 

