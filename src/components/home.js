import React, { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div class="row justify-content-md-center mt-3 mb-3">
                    <div class="col">
                        <div class="page-header">
                            <h1>
                                Welcome to <small class="text-muted">AutoGo</small>
                            </h1>
                            <p class="lead">Make meetings happen, generate client bookings, and manage your schedule — all with Doodle Premium.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}