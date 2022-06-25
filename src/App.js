import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div className="App">

      <header>
        <div className="header-content">
          <div className="logo-ctn">
            <span className='logo logo-red'>Dev</span>
            <span className='logo logo-black'>challenges.io</span>
          </div>
          <nav>
            <ul className='nav-links'>
              <li>Colors</li>
              <li>Typography</li>
              <li>Spaces</li>
              <li>Buttons</li>
              <li>Inputs</li>
              <li>Grid</li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
          <div className="welcome">
            <div className="welcome-text">
              <h1>
                Inputs
              </h1>
            </div>

            <div className="inputComp-ctn">
              <div className="input-ctn">
                <code className='input-desc'> {`<Input />`} </code>
                <Input />
              </div>
            </div>

            <div className="inputComp-ctn">
              <div className="input-ctn">
                <code className='input-desc'> {`<Input error />`} </code>
                <Input error />
              </div>
            </div>

            <div className="inputComp-ctn">
              <div className="input-ctn">
                <code className='input-desc'> {`<Input disabled />`} </code>
                <Input disabled />
              </div>
            </div>

            <div className="inputComp-ctn">
              <div className="input-ctn">
                <code className='input-desc'> {`<Input disabled />`} </code>
                <Input helperText="Some Interesting Facts" />
              </div>

              <div className="input-ctn">
                <code className='input-desc'> {`<Input disabled />`} </code>
                <Input helperText="Some Interesting Facts" error />
              </div>
            </div>

            <div className="inputComp-ctn">
              <div className="input-ctn">
                <code className='input-desc'> {`<Input startIcon />`} </code>
                <Input startIcon />
              </div>

              <div className="input-ctn">
                <code className='input-desc'> {`<Input endIcon />`} </code>
                <Input endIcon />
              </div>
            </div>

            <div className="inputComp-ctn">
              <div className="input-ctn">
                <code className='input-desc'> {`<Input value="text" />`} </code>
                <Input value="text" />
              </div>
            </div>

            <div className="inputComp-ctn">
              <div className="input-ctn">
                <code className='input-desc'> {`<Input size="sm" />`} </code>
                <Input size="sm" />
              </div>

              <div className="input-ctn">
                <code className='input-desc'> {`<Input size="md" />`} </code>
                <Input size="md" />
              </div>
            </div>

            <div className="inputComp-ctn">
              <div className="input-ctn">
                <code className='input-desc'> {`<Input fullwidth />`} </code>
                <Input fullwidth />
              </div>
            </div>

            <div className="inputComp-ctn">
              <div className="input-ctn">
                <code className='input-desc'> {`<Input fullwidth />`} </code>
                <Input multiline row="4" />
              </div>
            </div>
            

            {/* <ul>
              <li><b>Step 1:</b> Create a new repository on github</li>
              <li><b>Step 2:</b> Copy resources, README.md to your repository</li>
              <li>
                <b>Step 3:</b> Login to Figma to checkout font, color, spacing,..
              </li>
              <li><b>Step 4:</b> Complete all user stories</li>
              <li><b>Step 5:</b> Update README.md</li>
              <li><b>Step 6:</b> Deploy your app and submit your solution</li>
              <li>
                <b>Step 7:</b> Share your solution on Discord, Twitter and other
                platforms to ask for feedback
              </li>
            </ul> */}
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <p>
            <span>Icons: </span>
            <a href="https://material.io/resources/icons/?style=round">
              https://material.io/resources/icons/?style=round
            </a>
          </p>
          <p>
            <span>Created by</span> 
            <a href="https://twitter.com/Rohitgour03">Rohitgour03</a>
            <a href="https://devChallenges.io">devChallenges.io</a>
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
