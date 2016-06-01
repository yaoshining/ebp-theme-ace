import React from 'react';
import SidebarItem from './sidebarItem.jsx';
import classNames from 'classnames';

const menus = {
    $root: [{
        name: 'Dashboard',
        iconClass: 'fa-dashboard',
        to: '/'
    }, {
        name: 'UI & Elements',
        iconClass: 'fa-desktop'
    }, {
        name: 'Forms',
        iconClass: 'fa-edit',
        to: 'forms'
    }, {
        name: 'Widgets',
        iconClass: 'fa-list-alt',
        to: ''
    }, {
        name: 'Calendar',
        iconClass: 'fa-calendar',
        to: ''
    }, {
        name: 'Gallery',
        iconClass: 'fa-image',
        to: ''
    }, {
        name: 'More Pages',
        iconClass: 'fa-tag',
        to: ''
    }, {
        name: 'Other Pages',
        iconClass: 'fa-file-o',
        to: ''
    }],

    'UI & Elements': [{
        name: 'Layouts',
        to: ''
    }, {
        name: 'Typography',
        to: ''
    }, {
        name: 'Elements',
        to: ''
    }, {
        name: 'Buttons & Icons',
        to: ''
    }]
};

const sidebarStateClassNames = [
    'menu-sm',
    'menu-min',
    ''
];

function onSidebarToggle() {
    this.setState({
        sizeIndex: ++this.state.sizeIndex%sidebarStateClassNames.length
    });
}

class Sidebar extends React.Component {

    constructor() {
        super();
        this.state = {
            sizeIndex: 0
        };
    }

    render() {
        return (
            <aside id="sidebar" className="sidebar responsive" className={classNames('sidebar', 'responsive', sidebarStateClassNames[this.state.sizeIndex])}>
                <div className="sidebar-shortcuts" id="sidebar-shortcuts">
                    <div className="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
                        <button className="btn btn-success">
                            <i className="ebp-icon fa fa-signal" />
                        </button>
                        <button className="btn btn-info">
                            <i className="ebp-icon fa fa-pencil" />
                        </button>
                        <button className="btn btn-warning">
                            <i className="ebp-icon fa fa-users" />
                        </button>
                        <button className="btn btn-danger">
                            <i className="ebp-icon fa fa-cogs" />
                        </button>
                    </div>
                    <div className="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
                        <span className="btn btn-success" />

                        <span className="btn btn-info" />

                        <span className="btn btn-warning" />

                        <span className="btn btn-danger" />
                    </div>
                </div>
                <ul className="nav nav-list" style={{top: 0}}>
                    {
                        menus.$root.map(rootMenu => (
                            <SidebarItem key={rootMenu.name} to={rootMenu.to} iconClass={rootMenu.iconClass} subItems={menus[rootMenu.name]}>
                                {rootMenu.name}
                            </SidebarItem>
                        ))
                    }
                </ul>
                <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
                    <i className="ebp-icon fa fa-angle-double-left" onClick={onSidebarToggle.bind(this)} />
                </div>
            </aside>
        )
    }

}

export default Sidebar;