---
layout: documentation-post
title: CSS Framework
permalink: /css-framework/
redirect_from: /css/
hidden_title: Stalfos CSS framework documentation 
---

Stalfos provides you with a really simple and lightweight CSS framework that you can use to help you build powerful, lightweight a front-end. 

It's based on the [BEM methodology](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/), but isn't overly opinionated. It provides you with useful little tools such as a grid system, useful helpers, mixins and a project structure aimed at helping you to write component based CSS.

## Project Structure

Let's have a look at the project structure first. The folders within the `scss` directory are: 

- `framework`: This houses the framework level SCSS
  - `core`: Core modules such as resets and display helpers live here
  - `file-templates`: Where any templates live for certain elements of the framework
  - `helpers`: Where small, silent helpers live
  - `mixins`: Any framework level mixins such as `font-size` and `media-query` live here
  - `_build.scss`: The master build file for the framework
- `project`: This is where your project level code lives
  - `animations`: A home for any CSS animations you may write
  - `components`: This is where your small modular components should live
  - `helpers`: Any silent helpers that you `@extend` within your components and/or layouts
  - `imports`: This houses an import file for each core project section such as components, layouts, helpers and animations
  - `layouts`: Your core layouts should live here. By default you've got **site-head** and **site-foot** in here to get you started
  - `mixins`: Any project level mixins should live here 
  - `vars`: All of your project variables should live here. They're organised into separate files to keep things manageable 
  - `_shame.scss`: Where temporary hacks live. The idea here is if you have to write some nasty CSS, stick it in here so you and your team can easily see what needs refactoring
  - `_z-index.scss`: A central place for all of your z-index values. This can help you keep an eye on what sits where which will hopefully prevent `z-index: 9999`
  - `global.scss`: The main CSS file and [mode](#mode-system) of your project. Everything is pulled into this file, which then generates `global.css` in your project.
  - `legacy.scss`: This is for IE <= IE9. This file generates everything from the "legacy" [mode](#mode-system). Do please note that it has to be enabled by setting `project_settings.support_legacy_ie` to `true` in your [project data](#/project-data)

## Responsive Features

Stalfos provides some useful tools to help you build out mobile-first, responsive websites. Some useful tools that help with this are the breakpoints and [media query mixin](#media-query). 

Off the shelf, the available breakpoints are as follows:

```scss
{% include samples/css-framework/responsive-features/breakpoints.scss %}
```

These breakpoints are completely configurable for your project, but have been sized to be as generic as possible.

## Universal Sizing System

Stalfos provides a human readable universal sizing system to simplify sizing your elements responsively. Matching your breakpoints, the framework generates classes that can be used within your markup. The available breakpoints can be configured in `vars/_metrics.scss`.

You will have the following sizes available across all configured breakpoints:

- Whole
- Halves
- Thirds
- Quarters
- Sixths 
- Tenths 

### Usage Example

This example shows how you can quickly set three different sizes at three breakpoints, in just three lines of code.

```html
{% include samples/css-framework/universal-sizing-system/responsive.html %}
```

This example shows how you can size without breakpoints too. This is a useful approach if something was the same size across all breakpoints.

```html
{% include samples/css-framework/universal-sizing-system/standard.html %}
```

The breakpoint based classes behave like BEM elements. This is because they are technically elements of a breakpoint. It also helps make the markup more readable and understandable.

## Grid System

Stalfos provides a `flexbox` powered grid system that falls back to `inline-block`. The grid system aims to help you predictably layout your elements in a solid and flexible manner, with maximum browser support.

The grid is built to work hand-in-hand with the [universal sizing system](#universal-sizing-system). It's recommended that you familiarise yourself with that before progressing to the examples.

### Usage Example

Let's create a grid that has 3 items. At `palm` they'll will be 100% wide and at `lap-and-up` they will be split over thirds.

#### HTML

```html
{% include samples/css-framework/grid/standard-example/html.html %}
```

You'll notice that `.grid` only needs to be applied to the parent. The direct children are presumed grid items and the system acts on that accordingly.

Now let's add a modifier that makes the grid align centrally, so that if an item drops off, it sits in the middle.

#### HTML

```html
{% include samples/css-framework/grid/modifier-example/html.html %}
```

### Available Modifiers

- `.grid--rev`: Reverse the horizontal order of your grid items
- `.grid--narrow`: Halve the guttering size 
- `.grid--wide`: Double the guttering size
- `.grid--full`: Remove guttering altogether
- `.grid--right`: Right align the grid items
- `.grid--center`: Center align the grid items
- `.grid--middle`: Vertically center align grid items
- `.grid--bottom`: Vertically align grid items to the bottom
- `.grid--top`: Vertically align grid items to the top 
- `.grid--level-heights`: Add an inner layer to your grid item that will level with it's siblings
- `.grid--split`: Add space between your elements

## Framework Mixins

### Bounce Scroll

This mixin allows you to create a vertical or horizontal overflow scroll element that will "bounce" on iOS devices. Set the `$direction` parameter to either `vertical` or `horizontal` accordingly. By default the direction is `vertical`.

#### Usage Example

```scss
{% include samples/css-framework/framework-mixins/bounce-scroll.scss %}
```

### Ellipsis 

This mixin truncates single lines of text for you. It's especially useful for email addresses and other unbreakable elements of text. 

#### Usage Example

```scss
{% include samples/css-framework/framework-mixins/ellipsis.scss %}
```

### Feature Fail 

By default Stalfos does some basic feature detection with [Modernizr](https://modernizr.com/download/?cssremunit-flexbox-setclasses). This can be extended to suit your project.

The feature fail mixin allows you to query the classes that Modernizr adds to your `html` element. The below example shows how you could use it for flexbox.

#### Usage Example

```scss
{% include samples/css-framework/framework-mixins/feature-fail.scss %}
```

### Font Size

The font-size mixin allows you to author your font-size declarations in traditional pixel sizes and will calculate the [REM unit](http://caniuse.com/#feat=rem) for you. It will maintain the pixel unit as a fallback where REM units aren't supported.

The mixin will also calculate a REM based line-height based on the projects typography settings. This can be overridden if needed.

The parameters (with their default values) are:

#### Usage Example

```scss
$size: // pixel value required
$calculate-line-height: false // a flag to generate a REM line-height or not
$important: false // should this be set as !important
$line-height-ratio: $base-line-height-ratio // the ratio to calculate the line-height. set to the projects base ration by default
```

An example of the mixin in use:

```scss
{% include samples/css-framework/framework-mixins/font-size.scss %}
```

### Hover

Hover provides you with a shorthand way of targeting the `:hover`, `:focus` and `:target` states. You can also target `:active` and `.is-active` by setting the only parameter, `$include-active` to `true`.

#### Usage Example

```scss
{% include samples/css-framework/framework-mixins/hover.scss %}
```

### Media Query

This mixin provides a wrapper to work with the core of [Stalfos' responsive features](#responsive-features). Using the defined breakpoints, the media query mixin allows you to work with media queries in a predictable and scaleable fashion.

#### Usage Example

```scss
{% include samples/css-framework/framework-mixins/media-query.scss %}
```

#### Available Breakpoints

As defined above in [Stalfos' responsive features](#responsive-features), the available breakpoints in the media query mixin directly correlate with the breakpoints defined by you in your project variables. The breakpoints are as follows: 

```scss
{% include samples/css-framework/framework-mixins/media-query-breakpoints.txt %}
```

### Mode

As explained in the [mode system](#mode-system) section, this mixin allows you to fence your CSS into separate output modes.

#### Usage Example

```scss
{% include samples/css-framework/framework-mixins/mode.scss %}
```

### No JS

The typical usage of the `no-js` mixin is for defining styles for when there is no JavaScript available to the user. By passing the sole parameter `$is-parent` as `true`, the mixin will generate styles for the current element with the `no-js` class added to it.

#### Usage Example

```scss
{% include samples/css-framework/framework-mixins/no-js.scss %}
```

### Placeholder

Placeholder is a one-line way of colouring the text of a form input's `placeholder` attribute. It also sets the `opacity` to 1 for more colour predictability.

#### Usage Example

```scss
{% include samples/css-framework/framework-mixins/placeholder.scss %}
```

### Print

Print is very simple wrapper to help save you from writing a media queries for print styles.

**Note**: the `media` attribute on the `<link />` tag that pulls in your CSS must be set to `all` to see these print styles take effect. This is the default setting in Stalfos.

#### Usage Example

```scss
{% include samples/css-framework/framework-mixins/print.scss %}
```

### Pseudo Decor

This mixin will dump basic CSS to help you style out decorative pseudo selectors such as `:before` and `:after`. 

Properties such as `content` and `speak` are covered with this mixin.

#### Usage Example

```scss
{% include samples/css-framework/framework-mixins/pseudo-decor.scss %}
```

### Selection

This mixin works similarly to the [placeholder](#placeholder) mixin. It allows you to have a little more control when styling your selection based styles.

The two parameters `$background`(1) and `$color`(2) are available for you to set.

#### Usage Example

```scss
{% include samples/css-framework/framework-mixins/selection.scss %}
```

### Word Wrap

This provides you with the core styles that allow difficult to break areas of text to be broken. This is especially useful for email links.

#### Usage Example

```scss
{% include samples/css-framework/framework-mixins/word-wrap.scss %}
```

## Mode System

The Stalfos CSS framework runs an optional mode system, which allows you to write code in the same files, but compile it into separate output stylesheets. 

This is especially useful if you wanted to incorporate a theme system or wanted to separate your output into sections.

### Usage Example

This quick example creates a new **theme** mode which allows for decorative related CSS to be abstracted. This is achieved by creating a new mode declaration called **theme** and then referencing it with the `mode` mixin.

#### theme.scss

A template for this file can be found in `scss/framework/file-templates/_mode-template.scss`. It's recommended that you put any extra modes alongside global.scss. 

```scss
{% include samples/css-framework/mode/theme.scss %}
```

#### example-component

```scss
{% include samples/css-framework/mode/example-component.scss %}
```

## Variables

The CSS framework has several preset variables to help make your project as configurable as possible. They are split into 4 sections in the `scss/project/vars` directory. They are as follows:

1. `color`: A section to keep all your colour variables together
2. `generic`: A section to put generic non-categorised values 
3. `metrics`: Where all size related variables live. A lot of what powers the [universal sizing system](#universal-sizing-system) and the [grid system](#grid-system) live here
4. `typography`: Where all your typography based rules live


* TOC
{:toc}
{: .is-hidden--text.js-page__table-of-contents-source }
