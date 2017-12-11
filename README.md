# jkallunki-babel-sass-brunch
Basic setup for Babel compiled Javascript site/app with Sass using Brunch (and JS/SCSS linters for VScode)

Setup linters with VScode from here: [jkallunki-linters](https://github.com/J-Kallunki/jkallunki-linters)

Manual stylelint with `yarn run stylelint`  
Run *.test.js files with Jest `yarn run test`

`yarn run start`  
`yarn run build`

Put your static files (html etc.) to src/assets

This might be needed if your _*.scss files get compiled
[Skip submodules, their handled by parent files](https://github.com/max-scopp/sass-brunch/commit/cc6f0bac1509b12133a49a1839ea871095faf900)
