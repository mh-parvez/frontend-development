# HTML Elements and Attributes

## Difference Between Inline and Block Elements

<table border="1">
  <tr>
    <th>Element Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><strong>Inline Elements</strong></td>
    <td>Do not start on a new line and take up only as much width as necessary (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>).</td>
  </tr>
  <tr>
    <td><strong>Block Elements</strong></td>
    <td>Start on a new line and take up the full width available (e.g., <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>).</td>
  </tr>
</table>

## Difference Between `<span>` and `<div>`

<table border="1">
  <tr>
    <th>Element</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>&lt;span&gt;</code></td>
    <td>An inline element used for styling part of a text or inline grouping.</td>
  </tr>
  <tr>
    <td><code>&lt;div&gt;</code></td>
    <td>A block element used for grouping block-level content.</td>
  </tr>
</table>

## Semantic Elements and Their Importance

Semantic elements provide meaning to both the browser and developers. They improve accessibility, SEO, and readability. Examples include `<header>`, `<article>`, `<section>`, and `<footer>`. Using semantic elements ensures that web pages are well-structured and easily understandable by search engines and assistive technologies.

## Semantic Inline Elements

Examples of semantic inline elements include:
- `<strong>`: Indicates strong importance.
- `<em>`: Emphasizes text.
- `<code>`: Displays code snippets.
- `<abbr>`: Represents abbreviations.

## Difference Between Tags and Elements

<table border="1">
  <tr>
    <th>Concept</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><strong>Tag</strong></td>
    <td>The markup defining an element, such as <code>&lt;p&gt;</code>.</td>
  </tr>
  <tr>
    <td><strong>Element</strong></td>
    <td>Consists of the start tag, content, and end tag (e.g., <code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code>). Some elements, like <code>&lt;img&gt;</code> and <code>&lt;br&gt;</code>, are self-closing.</td>
  </tr>
</table>

## Global and Custom Attributes

- **Global Attributes:** Can be used on any HTML element.
  - `id`
  - `class`
  - `style`
  - `title`
  - `data-*` (custom data attributes)

- **Custom Attributes:** User-defined attributes, typically prefixed with `data-`.
  - Example: `data-user-id="123"`
  - Used for storing extra information without affecting standard functionality.


## Meta Description
A meta description is an HTML meta tag that provides a brief summary of a webpage's content. Search engines often display it in search results, making it an important factor for SEO and user engagement.

```html
<head>
  <meta name="description" content="Learn the .....................and global attributes in HTML.">
</head>
```
