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

# config Driven UI

- UI is driven/displayed on the basis of config which is sent by database.

# Export/Import

- Named import/export
- Default import/export

# React uniqueness

- UI and Data layer work and sync properly with each other
- React is good at DOM Operations
- React is Effecient in DOM Manipulation because have Virtual DOM
- React Render UI | Render cycle is very fast.

# Reconciliation

- Using Reconciliation Algo Process( React Fiber )
- Having Virtual DOM: Object-representation of Actual DOM - Virtual DOM is nothing, just a normal JS Object ( React Component )
- Using Diff Algo which find the difference btw old and new virtaul DOM
- then update the UI.

note:

- whenever state variables update, react triggers a reconciliation cycle(re-renders the component).

# React Hook

- (Normal Js utility function)

  - useState() - use to give superpower to state variable
  - useEffect() : is called after the component Render

- whenever a State variable updates, react re-renders the component because React keep an eye on the State variable | track it.

# API Approach for UI

- Ist way: Loads-> Api call -> Render
- 2nd way: Loads -> Render -> Api call -> Render (Better UX)

# shimmer UI

- resembles the page's actual UI

# CORS Plugin

- use for get the data to other domain from your browser domain
