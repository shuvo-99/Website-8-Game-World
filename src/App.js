import "./App.css";
import Header from "./components/heading/Header";
import Shop from "./components/shop/shop";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <div className="ques-ans">
        <h3>Q1. How react works?</h3>
        <p>
          Ans: React is a Javascript Library. In essence, it keeps a tree for
          us. On the nodes, this tree can perform efficient diff computations.
          Considering our HTML code to be a tree. That is, in fact, how the
          browser handles your DOM. React allows us to essentially re-construct
          our DOM in JavaScript and only push the changes that have actually
          occurred to the DOM. The render() method in React components takes
          input data and returns what should be displayed. It use the JSX
          syntax, which is similar to XML. This is how render() gets access to
          input data supplied into the component using .props.
        </p>
        <h3>Q2. Props vs State</h3>
        <p>
          Ans: <br /> 1. Props allow components to receive data from the outside
          world, whereas state allows them to produce and maintain their own
          data. <br /> 2. Props can only be passed from parent to child
          component where state can be defined in its own component <br /> 3.
          Property data is read-only and cannot be changed by a component that
          receives it from the outside where State data is editable by its own
          component, but it is kept private <br />
          4. Props are used to send data around, whereas state is used to keep
          track of it.
        </p>
        <h3>Q3. How useState works?</h3>
        <p>
          Ans: useState is a Hook that enables state variables to be used in
          functional components. This function takes the starting state and
          returns a variable with the current state value and another function
          to update it. We can add state to function components using useState.
          When you use useState inside a function component, it creates a single
          piece of state for that component. It returns an array with the state
          variable as the first element and a function to update the variable's
          value as the second element
        </p>
      </div>
    </div>
  );
}

export default App;
