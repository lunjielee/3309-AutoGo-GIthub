import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <body>
        <div className="container">
          <div class="row justify-content-md-center mt-3 mb-3">
            <div class="col_back">
              <h1>
                Welcome to <small class="text-muted">AutoGo</small>
              </h1>
              <div class="page-header">
                <p class="lead"></p>
                <p class="lead0">Find we provide the best automobile service!</p>
              </div>
              <div style={{ padding: 10 }}>
                <Link
                  to="/login"
                  className="btn btn-primary"
                  style={{ padding: 10 }}
                >
                  Let's Get Started !
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
