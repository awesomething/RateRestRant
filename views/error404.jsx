const React = require('react')
const Def = require('./default')

function error () {
    return (
      <Def>
          <main>
              <h1>ERROR</h1>
              <div>
                <img src='https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2329&q=80' alt='404'/>
                <div>
                  Photo by <a href='https://unsplash.com/photos/JpTY4gUviJM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'>Free</a> on <a href='https://unsplash.com'>Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Error Page</button>
              </a>
          </main>
      </Def>
    )
  }

  module.exports = error