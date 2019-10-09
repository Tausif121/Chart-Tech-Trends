import React, { Component } from 'react';
import CompNav from './CompNav';
import CompPaises from './CompPaises';

class CompHeader extends Component {
    render() {
        return (
            <header className="App-header">
                <CompNav />
                <label style={{ fontSize: '20px' }}>Tendencias tecnológicas laborales (Beta)</label>
                <CompPaises />
            </header>
        );
    }
}

export default CompHeader;