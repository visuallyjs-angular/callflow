### Callflow Demo

This demo illustrates a callflow (IVR) editor using VisuallyJS in an Angular application.

#### How it works

The demo uses the `vjs-surface` component to provide a flexible canvas for designing call flows. It uses custom shapes and logic to represent various IVR steps and their transitions.

#### Components Used

- `vjs-surface`: The core canvas component for the callflow editor.
- `vjs-controls`: Navigation and zoom controls.
- `vjs-miniview`: A small navigation window for large callflow diagrams.

#### Component Options

The `vjs-surface` component is configured with three main sets of options:
- `viewOptions`: Defines how the data is mapped to visual elements.
- `renderOptions`: Controls the appearance of nodes, edges, and the background.
- `modelOptions`: Manages the underlying data structure and connectivity rules.

#### Stylesheets

For the VisuallyJS components to render correctly, the following stylesheets must be included in the project (usually in `styles.css`):

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
@import "@visuallyjs/browser-ui-angular/css/visuallyjs-angular.css";
```
