# Jekyll Cloudcannon Boilerplate

## Dependencies

This boilerplate uses the following dependencies & plugins:

- Jekyll (~>4.1)
- jekyll-sitemap
- jekyll-feed
- jekyll-webp (1.0)
- [Gridlex CSS Flexbox](https://gridlex.devlint.fr/) (2.7.1)

## Utility classes

### Padding & Margins
Use from the pre-existing utility classes for paddings & margins. Variable values can be adjusted here: `/_sass/_utility.scss`.

The syntax is similar to Bootstrap:

- `p` for padding, `m` for margin, followed by the **axis or direction** which it should apply to: `x` for horizontal, `y` for vertical with padding **and** margin, and `t` (top), `b` (bottom) `l` (left) and `r` (right) for margins **only**, followed by a dash (`-`) and appending the value to the end.
- For the padding, we work with the following:
  - `lg` for large padding (i.e.: `.px-lg`)
  - `md` for medium padding (i.e.: `.px-md`)
  - `sm` for small padding (i.e.: `.px-sm`)

_It is important to note that the padding is followed by an `!important` statement as to override the Gridlex classes and giving you the ability to add padding to the `col` containers_

- For margins, we use absolute responsive values (in `rem`):
  - `mb-2` would apply `2rem` to `margin-bottom`
  - `mt-1` would apply `1rem` to `margin-top`
  - Values go from 1 to 4, but this can be expanded as needed.

### Responsive Images

We can have images that fit the container that they are inserted on by using the `responsive-img` class on the `img` tag. This adds the `object-fit` and `object-position` properties to the image: define the width and height of the image container and voilà!

## Using the `settings.yml` file

The `settings.yml` file (a.k.a. **data** file)allows users to intuitively change fonts, colors and other variables using the CloudCannon interface. It also provides the ability to inject additional scripts into `<head>` and `<body>` if wanted.

The data file is set up to optimize the site build and content provided: social icons can be rendered as chat bubble icons; address, phone number and else will be output throughout the project. This is done by referencing the file using Liquid. An example:

`{{site.data.settings.general.address}}` will output the address provided in the data file.

Another example:

```
{% for menu in site.data.settings.navigation.menus %}
  {% unless menu.is_dropdown %}
  <a href="{{menu.url}}" class="nav-bar-menu--item {% if menu.style_as_button %}btn{% endif %}">Menu</a>
    {% else %}
    <button class="nav-bar-menu--item dropdown {% if menu.style_as_button %}btn{% endif %}">
      Dropdown
      <div class="dropdown-menu">
      {% for submenu in menu.submenus %}
        <a href="#" class="dropdown-menu--item">Submenu</a>
      {% endfor %}
      </div>
    </button>
  {% endunless %}
{% endfor %}
```

## Cookie Banner (GDPR)

You must include the `cookie-banner.html` file and the `cookie-prefs.html` on the base layout and enable the `cookie-settings-v2.js` script for it to work.

The cookie script is GDPR-EU-compliant and stores preferences on the client-side `sessionStorage`. When the page is refreshed or changed, the cookie banner will re-render as per GDPR-EU requirements. You can tweak the JS file to remember preferences when refreshing, to hide the cookie banner but do it at your own discretion. `sessionStorage` is cleared when the tab is closed.

## The WebP plugin

The `jekyll-webp` plugin generates a `.webp` version of images inside the `/assets/images` folder. The plugin can be configured on the `_config.yml` file.

Simply add the `<img>` tag and add the `srcset` attribute to it, referencing the image's path but with the `.webp` extension.

Examples: 
```
<!-- default img tag -->
<img src="/assets/images/image.jpg" srcset="/assets/images/image.webp">

<!-- using Liquid -->
<img src="{{page.image}}" srcset="{{page.image | replace: "jpg", "webp"}}">
```
