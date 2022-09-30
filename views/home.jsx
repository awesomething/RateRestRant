const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>RESTRant</h1>
              <div>
                <img src='https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80' alt='food platter'/>
                <div>
                  Photo by <a href='https://unsplash.com/photos/ykThMylLsbY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'>Baiq Daling</a> on <a href='https://unsplash.com/photos/ykThMylLsbY'>Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }

  module.exports = home