import React from 'react';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';

const appElement = document.createElement('div');
$(appElement).hide();
class App extends React.Component {

    static get element() {
        return appElement;
    }

    constructor() {
        super();
    }

    componentDidMount() {
        $(appElement).fadeIn(1000);
    }

    render() {
        return (
            <div>
                {this.props.navbar || <Navbar />}
                <div className="main-container" id="main-container">
                    {this.props.sidebar || <Sidebar />}
                    <div className="main-content">
                        {this.props.sidemenu}
                        <div className="breadcrumbs" id="breadcrumbs">
                            <ul className="breadcrumb">
                                <li>
                                    <i className="ebp-icon fa fa-home home-icon" />
                                    <a href="#">Home</a>
                                </li>
                                <li className="active">Dashboard</li>
                            </ul>

                            <div className="nav-search" id="nav-search">
                                <form className="form-search">
                                    <span className="input-icon">
                                        <input type="text" placeholder="Search ..." className="nav-search-input" id="nav-search-input" autocomplete="off" />
                                        <i className="ebp-icon fa fa-search nav-search-icon" />
                                    </span>
                                </form>
                            </div>
                        </div>
                        <div className="page-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                {this.props.footer || <Footer />}
            </div>
        )
    }
}

export default App;