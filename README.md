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

  # diagram lifeCycle

  (![clasComponentLifeCycle](/src/utils/images/ClassComponentLifeCycle.png)))

  ![lifeCycle](![alt text](https://i0.wp.com/reactjsguru.com/wp-content/uploads/2022/06/Screenshot-360.webp?resize=1024%2C640&ssl=1))

  # Parent-Child relationship calling lifeCycle

  - parent class is called and instance is created
  - Parent constructor is called
  - Parent Render() is called if child is in the parent rendering component then
  - Child class is called
  - Child constructor is called
  - Child Render() is called
  - once the child mounting is complete then child DidComponentMount is called
  - At last, the Parent DidComponentMount() is called

  # Parent have multiple children lifeCycle

      # Basic concept
      - React has two phases:
        # Mounting Phase
         - Render Phase() : constructor is called and batch the Render of the children
         - commit Phase() : Once the Render phase is completed, It means that find out the diff of virtual DOMs, Now the Dom UPdated in a Single Bactch, then componentDidMount() is called after updating the Dom.

        # Updating phase
        - once the API is called and the setState variable
        - after the batch render()
        - componentDidUpdate is called

        # Unmounting Phase
        - when we leave the component( changing the page) and go to another component
        - then componentWillUnmount is called
        - clean Up the mess Hahhaahhahah!

      # parent have two children
      - Parent Constructor
      - Parent render()
      - First (Class)  Constructor
      - First (Class)  render()
      - Second (Class)  Constructor
      - Second (Class)  render()
      - First (Class)  ComponentDidMount
      - Second (Class)  ComponentDidMount
      - Parent componentDidMount

  # Note:

  - componentDidMount()
  - use for APIs call
  - never ever compare the lifeCycle of Class Component with Functional Component

# Functional vs Class

- the major diff is that the render() return the piece of JSX in Class Component
- Receive the props through the constructor and also call the super by passing it here always.
- then we get the props and use them with the "this" keyword in the component.

# Single Responsibility Principle

- code must be in a modular way
- reuseable code
- easily maintainable
- easily testable

# Custom hook

- Act as utility function
- make the code more readable
- make the code more modular
- make the code more useable

# Optimize Performance the web/app

# chunking/ code spliting/ Dynamic Bundling

- To break down the app file, into smaller logical (separation) chunk of the bundle at the browser
- A bundled should have enough code for a major feature in a website.
- Means it's more than one js file (split your website into smaller bundle)
- otherwise, website take a lot of time to load and performance may low.
- because, request for a JS which is too heavy if it is single bundle and take too much to load on the browser.

# Lazy Loading for distribute the bundling / dynamic import

- we will not load everything directly, we do lazy loading when required.
- It'll not load code for everything such as there is component for another module which has a lot of children in it.
- So, whenever I go to that component page, then the code of that component should come up.
- the whole process is also called **on demand loading**
- and use the Suspense component provided by react, it is help us not to suspend the code on demand.
- when we on demand code, it takes time and react too fast. so react doesn't find a code and through the error suspend the rendering of UI.
- That's why wrap the component in the suspense.
  code :
  const ComponentName = Lazy(()=> import("Path of the component"))

# advantage of Tailwind css

- it only include the css which is required in a bundler of our code
- only the css that are using, it is major advantage
- It's very light weight such as it only include the class once use in the whole code like if m-4 class is used then, it come up only one time in the bundling of code.
- keep the bundle size small

# Higher Order component

- it is the function that takes a component inside and enhances that component and (return back a new component) returns a component

# Accordion UI

- it is used to make the Restaurant menu.
- each accordion category has a header(title) and body(where data come) and each one is collapsible

# controlled & uncontrolled component

- it's a jargon Philophisy
- if a component is controlled by its' parent then it's controlled component and vice versa.
- it's aslo called **lifting state Up**

# props drilling

- React is a one way data stream
- Data pass from parent to childrens.
- There is a problem with props drilling because in between child does'nt need that props and the leave level child component only use it. then how much level we pass the data, it bad practice
- To avoid it,we use React Context

# React Context

- It's a place where we store our data, use the data from anywhere
- keep the data in the central(central global object) place.
- createContext: to ceate the context
- useContext: to use the context
  **Class component**
- In class based component, we access the context data using the consumer keyword superpower.
- and React take care of it.
  **Provider** overide the default value of the Context,
- Provider do it and it's very performant.
- provide the dynamic value
- we just need to wrap the component in the Context.Provider
- wrap it into my whole app.
