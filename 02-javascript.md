---
layout: documentation-post
title: JavaScript
permalink: /javascript/
redirect_from: /scripts/
hidden_title: Stalfos JavaScript documentation 
---

Stalfos provides you with a basic JavaScript system that aims to help you write modular jQuery based code for your website. 

With an [app delegate](#app-delegate) sitting in the middle of your modules - writing code that only runs when you need it, without having to write untidy display logic is made easier with Stalfos.

## App Delegate

The app delegate is designed to look for elements on your page with a `data-module` attribute. In this attribute you should add an identifier for which module(s) you wish to bind this element. The app delegate will then run a switch on the identifier(s) and bind your element to modules accordingly.

### Module Binding Example

#### HTML
```html
{% include samples/javascript/app-delegate/html.html %}
```

#### app.js module binding
```javascript
{% include samples/javascript/app-delegate/app.js %}
```

#### example-module.js
```javascript
{% include samples/javascript/app-delegate/example-module.js %}
```

## Typset 

By default, there's a module called `typeSet` in your project's `module` directory. This silent module will automatically go through your text and add `&nbsp;` where appropriate to help prevent orphans and widows.

This can be prevented by adding the `js-typeset__ignore` class to your element. This will affect all child elements too.

You can globally prevent it by setting `settings.typeset.enabled = false` in `app.js`.

### Example 

Here's an example of `typeSet` being prevented on a `<nav />` element.

```html
{% include samples/javascript/modules/type-set.html %}
```

## Helpers

In your `scripts` directory, you will see `_helpers.js`. This is a collection of little functions that are designed to help you with common tasks.

### Any

A very simple snippet that will return `true` if a jQuery collection has any items in it.

```javascript
{% include samples/javascript/helpers/any.js %}
```

### Parse Settings

This will try and parse inline JSON as an object literal. Make sure you use the `data-settings` attribute to store your JSON.

#### HTML
```html
{% include samples/javascript/helpers/parse-settings.html %}
```


#### JavaScript
```javascript
{% include samples/javascript/helpers/parse-settings.js %}
```

### AJAX Request

AJAX Request is a wrapper for the [jQuery AJAX method](http://api.jquery.com/jquery.ajax/). It helps you by predictably returning a callback while doing the hard work for you. 

```javascript
{% include samples/javascript/helpers/ajax-request.js %}
```

### AJAX HTML

AJAX HTML is a wrapper for [AJAX Request](#ajax-request) that pre-overrides the `dataType` and `callback` for you to predictably request HTML from an endpoint.

```javascript
{% include samples/javascript/helpers/ajax-html.js %}
```

### Query String

Query string helps you by either converting the browser's current query string to JSON or converting a JSON object to a query string. 

#### To JSON

```javascript
{% include samples/javascript/helpers/query-string-to-json.js %}
```

#### From JSON

```javascript
{% include samples/javascript/helpers/query-string-from-json.js %}
```

### ESC

ESC provides you with the ability to bind events to the escape key. It's a useful little tool for making your interactive elements more accessible. 

```javascript
{% include samples/javascript/helpers/esc.js %}
```

### Get Breakpoint

This little helper returns the current breakpoint which is set in your [CSS](/css/). The return value is the same as your SCSS variable name to keep things as simple as possible. 

```javascript
{% include samples/javascript/helpers/get-breakpoint.js %}
```

### Change Event

This helper is designed to help you bind a predictable change event to your form elements. Some of the input based elements require an `input` event instead of `change` and this helper sorts that for you.

```javascript
{% include samples/javascript/helpers/change-event.js %}
```

### Debounce

"Borrowed" from [David Walsh's blog](http://davidwalsh.name/javascript-debounce-function), this function helps debounce events such as `resize` which can fire an unnecessary amount of times.

```javascript
{% include samples/javascript/helpers/debounce.js %}
```


* TOC
{:toc}
{: .is-hidden--text.js-page__table-of-contents-source }