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

  - useState() - use to give superpower to create local state variable, never create outside the component.
    - never create usestate() hook inside the if/else.(conditioin).
      - nor inside in loop
      - nor inside in function.
    - whenever a State variable updates, react re-renders the component because React keep an eye on the State variable | track it.
  - useEffect() : is called after the component Render (- dependency array change the behavior of useEffect)
    - if no dependency array => useEffect is called on every rendering of the component
    - if dependency array is empty = [] => useEffect is called only on initial render and just once time.
    - if dependency array is having something Like [loginBtn] => useEffect is called, everytime the loginBtn is updated

# API Approach for UI

- Ist way: Loads-> Api call -> Render
- 2nd way: Loads -> Render -> Api call -> Render (Better UX)

# shimmer UI

- resembles the page's actual UI

# CORS Plugin

- use for get the data to other domain from your browser domain
- use corsproxy.io server for production your web

# Route

- whenever you develop routes, you have to create routing configuration.

# React-Router-DOM

- createBrowserRoute: use to config the route of our app
- useRouterError: use to tell extra info about if the route mismatch or get error
- RouterProvider:
  -define and manage routing behavior within a React application,

  - use a specified router object to control navigation and rendering of components based on the current URL

- Outlet: use to fill the gap of children route and take that component and replace.
  - basically, it is replaced by the children Component.
- use Link Component instead of anchor tage, it provide same functionality like anchor but doesn't reload the whole page, just render the component.
  - Link is the wraper of anchor tag
  - And React-Router-Dom track it through the Link that's helpful to render the specific component without reload the whole page.
- useParams: it read the param from the url

# Note

- never ever use anchor tag to route on another page, if you do, then it reload the whole page such as HeaderComponent.
- React is a single page application | UI because it doesn't reload the whole page

# 2 types of Routing

- client side routing: everything is loaded at first time, just the component are reload(render) on the base of route <That's why it's a single page application in React>
- Server side routing: where the whole page is re-render/ reload on the requested route.

# Class Component

- Class based component: At the end of the Day, it's normal JS class.
- and extends it with React.Component
- Note: loading a class based component on a web page means creating an instance of that class

  - whenever creating the instance of a class, the constructor is called.
  - and the constructor is the best place to receive props and create state variable.
  - this.state is a big Object which contains all the state variable
  - Never ever Update state variable directly such as (this.state.count++).It Create inconsistency in your program.

  # Life Cycle:

  - when the class component is called
  - a new instance of class is created
  - then the constructor is called and in the constructor <super()> is called
  - then the render() component is called
  - once the mounting of a component is finished then the componentDidMount is called

  # Parent-Child relationship calling lifeCycle

  - parent class is called and instance is created
  - Parent constructor is called
  - Parent Render() is called if child is in the parent rendering component then
  - Child class is called
  - Child constructor is called
  - Child Render() is called
  - once the child mounting is complete then child DidComponentMount is called
  - At last, the Parent DidComponentMount() is called

  # Note:

  - DidComponentMount() ===== useEffect()
  - use for APIs call

# Functional vs Class

- the major diff is that the render() return the piece of JSX in Class Component
- Receive the props through the constructor and also call the super by passing it here always.
- then we get the props and use them with the "this" keyword in the component.
