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