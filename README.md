# Portfolio of 2018

The purpose of this project is to show of (some of) my skills in web development with the tools I currently use (although this is of course constantly changing).

## Frameworks

This web app is a single page application (SAP) built with [React](https://github.com/facebook/react) and [Redux](https://github.com/reduxjs/redux).

A future Server-Side Rendered (SSR) version of this portfolio is planned, since a portfolio with mostly static content isn't really the optimal usage of the SPA concept.

It uses [StyledComponents](https://github.com/styled-components/styled-components) for "css-in-javascript" while maintaining standard CSS syntax.

## Optimization

In order to make this app load faster I've used a number of different techniques.

- Compressed `.jpg`
- `.png` and `.svg` for smaller file-size where applicable
- Minimized CSS
- Minimized JavaScript
- Code-splitting (JavaScript only downloads when needed).
- Loading external fonts only after DOM has rendered to make main content render faster on slow connections.
- Service Worker (helps keeping the site usable also when offline).

## Testing

- Unit tests are run with [Jest](https://github.com/facebook/jest).
- Integration tests are run with [Cypress](https://github.com/cypress-io/cypress).

## Type-checking

For type checking I'm using [Flow](https://github.com/facebook/flow), which similarly to TypeScript helps keeping basic bugs to a minimum.

## Continuous Integration

We use Travis for Continuous Integration.

## Production

Amazon Web Services - EC2.
