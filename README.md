# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR => Hot Module Replacement
- File Watching Algorithm -> written in C++
- Caching - Faster Builds
- Image Optimization
- Minification -> of our files
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# fun Fact

- JSX is HTML & XML like syntax but not html || xml

# JSX

- write attribute in camelCase in JSX
- {JSX} prevents from Cross siting attack because it sanitizes the data first.

# Cycle of conversion

    transpiled by Bable                                                                                React itself

- JSX ===================> React.createElement ( in a react code) =======================> JS - Object ===========> HTMLElement( when it is render).
- React component => Normal Js function

# Props

- It is just normal argument to a function.
- passing a argument to a function same as passing a props to a React Component.
  -Destructing on the fly.

# Namaste food Order Planning

/\*\*

- Header
- - logo
- - Nav items
- Body
- -Search
- -RestaurantContainer
-     - RestaurantCard
-     - Img
-     - Name of Res, Star Ratings, cuisine, delivery time
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/
