# GIT
1. make default branch: git branch -M main
2. add remote git url: git remote add origin URL

# GITHUB
1. should contains only the code which  we can't regenerate.
2. .gitignore: contains all the files/folder which we should not push to github.


# PACKAGE.JSON
1. dev-dependencies: used to developing app.
2. dependencies: used in production
3. version: ^2.8.4[only  minor version will update] vs ~2.8.4[update the major version also]
4. package.json: keeps track version used in app
5. package-lock.json: 
    * keeps track exact version of app
    * uses hash to to keep track of all dependecies exact version

# node_module:
1. contains all the code of package.json dependencies
2. transitive dependencies: when package depends with other dependencies
3. 


# BUNDLER
Bundler is a tool that takes all the individual JavaScript files and other assets in your project, such as images and CSS, and combines them into a single file (or a few files) that can be loaded by the browser. 
### Here's how bundlers help in React development:
- Dependency management:
Bundlers handle the dependencies of your project, ensuring that all the required modules and libraries are included in the final bundle.
- Code optimization:
They optimize your code for production, minifying and compressing it to reduce the file size and improve loading times.
- Module resolution:
They resolve module imports, allowing you to use the import and export syntax to organize your code into reusable modules.
- Asset handling:
They process assets like images, fonts, and CSS files, embedding them into the bundle or creating separate files as needed.
### Popular bundlers used with React:
- Webpack: A powerful and flexible bundler that offers a wide range of features and customization options. It is the most widely used bundler in the React ecosystem.
- Vite: A newer bundler that leverages native ES modules, providing a fast development server and a simpler configuration.
- Parcel: A zero-configuration bundler that aims to be easy to use and fast.
### Benefits of using a bundler:
- Improved performance:
Bundlers optimize your code for production, reducing file size and improving loading times.
- Modularity:
They allow you to write modular code, making it easier to maintain and reuse.
- Development workflow:
They provide features like hot module replacement, which allows you to see changes in your code instantly without having to refresh the browser.
## PARCEL
1. Dev build
2. Local server
3. Hmr: hot module replacement
4. Caching[uses file watching algo(written in c++)]:faster builds
5. Image optimization
6. Minification
7. Bundling
8. Compress
9. Consistent hashing
10. Code splitting
11. Differential bundling: to support older browser
12. Diagnostic: to provide good error handling
13. Tree shaking: remove unused code
14. Different dev and production bundles
15. Dist: contains compess version of app in 3files: js, css, and html
