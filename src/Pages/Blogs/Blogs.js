import React from "react";
import questions from "../../assets/images/Questions.png";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const Blogs = () => {
  return (
    <>
      <Header />
      <div className="my-8 lg:px-20">
        <h1 className="text-4xl font-bold text-primary text-center">
          Questions & Answers
        </h1>
        <div className="flex items-center justify-center space-x-2 w-full lg:flex-row flex-col lg:mt-6">
          <div className="text-center w-full lg:max-w-lg lg:text-left h-full">
            <img src={questions} alt="" />
          </div>
          <div className="w-full h-full">
            {/* Question-1 */}
            <div
              tabindex="0"
              className="collapse collapse-plus border border-base-300 bg-base-100"
            >
              <div className="collapse-title text-xl font-medium">
                Question 1: How will you improve the performance of a React
                Application?
              </div>
              <div className="collapse-content">
                <p>
                  We can improve performance of a React Application in following
                  ways:
                </p>
                <ol className="list-decimal list-inside">
                  <li>We can keep component state local where necessary</li>
                  <li>
                    We can prevent unnecessary re-renders by memoizing React
                    components
                  </li>
                  <li>
                    We can do Code-splitting in React using dynamic{" "}
                    <code>import()</code>
                  </li>
                  <li>
                    We can also do windowing or list visualization in react
                  </li>
                  <li>We can use Lazy loading images in react</li>
                </ol>
              </div>
            </div>

            {/* Question-2 */}
            <div
              tabindex="0"
              className="collapse collapse-plus border border-base-300 bg-base-100"
            >
              <div className="collapse-title text-xl font-medium">
                Question 2: What are the different ways to manage a state in a
                React application?
              </div>
              <div className="collapse-content">
                <p>
                  We can improve performance of a React Application in following
                  ways:
                </p>
              </div>
            </div>

            {/* Question-3 */}
            <div
              tabindex="0"
              className="collapse collapse-plus border border-base-300 bg-base-100"
            >
              <div className="collapse-title text-xl font-medium">
                Question 3: How does prototypical inheritance work?
              </div>
              <div className="collapse-content">
                <p>
                  We can improve performance of a React Application in following
                  ways:
                </p>
              </div>
            </div>

            {/* Question-4 */}
            <div
              tabindex="0"
              className="collapse collapse-plus border border-base-300 bg-base-100"
            >
              <div className="collapse-title text-xl font-medium">
                Question 4: Why you do not set the state directly in React. For
                example, if you have{" "}
                <code>const [products, setProducts] = useState([])</code> . Why
                you do not set <code>products = [...]</code> instead, you use
                the <code>setProducts</code>
              </div>
              <div className="collapse-content">
                <p>
                  We can improve performance of a React Application in following
                  ways:
                </p>
              </div>
            </div>

            {/* Question-5 */}
            <div
              tabindex="0"
              className="collapse collapse-plus border border-base-300 bg-base-100"
            >
              <div className="collapse-title text-xl font-medium">
                Question 5: You have an array of products. Each product has a
                name, price, description, etc. How will you implement a search
                to find products by name?
              </div>
              <div className="collapse-content">
                <p>
                  We can use <code>find</code>, <code>filter</code> and{" "}
                  <code>includes</code> to find a product by name from an array.
                  An example is given in the following snippet:
                </p>
                <div className="mockup-code mt-2">
                  <pre>
                    <code>
                      const products=&#91;&#123; "name":"Samsung A52", "price":
                      35000&#125;,
                    </code>
                  </pre>
                  <pre>
                    <code>
                      &#123; "name":"Poco X3", "price": 25000&#125;&#93;
                    </code>
                  </pre>
                  <br />
                  <pre>
                    <code>// If we want to return first value</code>
                  </pre>
                  <pre>
                    <code>
                      products.find&#40;&#40;x&#41;&#61;&gt;x.name.includes&#40;'Samsung'&#41;&#41;
                    </code>
                  </pre>
                  <br />
                  <pre>
                    <code>// If we want to return multiple values</code>
                  </pre>
                  <pre>
                    <code>
                      products.filter&#40;&#40;x&#41;&#61;&gt;x.name.includes&#40;'Samsung'&#41;&#41;
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Question-6 */}
            <div
              tabindex="0"
              className="collapse collapse-plus border border-base-300 bg-base-100"
            >
              <div className="collapse-title text-xl font-medium">
                Question 6: What is a unit test? Why should write unit tests?
              </div>
              <div className="collapse-content">
                <p>
                  <span className="font-bold">Unit Testing:</span> Unit Testing
                  is a type of testing which is done by software developers in
                  which the smallest testable module of an application - like
                  functions, procedures or interfaces - are tested to ascertain
                  if they are fit to use.
                </p>
                <br />
                <p>
                  <span className="font-bold">
                    Why should we write Unit Testing:
                  </span>{" "}
                  Unit Testing has many benefits. The main benefit of unit
                  testing is the process becomes agile. When we want to add more
                  features to any software we might need to make changes to the
                  old design and code, and this can be expensive as well as
                  risky. If we use unit testing methodology, then this can save
                  a lot of time and can make the whole process much faster and
                  easier. Secondly, it significantly improves code quality. It
                  helps a developer to identify the smallest defects that might
                  be present in the units before they go for integration
                  testing. Thirdly, Unit testing helps identify all kinds of
                  issues with the software at a very early stage. Software
                  developers can then work on those issues first before
                  progressing any further. Last but not least, it helps a
                  developer to reduce costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
