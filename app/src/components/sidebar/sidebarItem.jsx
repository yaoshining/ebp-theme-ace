import React from 'react';
import classNames from 'classnames';
import {Link, withRouter} from 'react-router';

function updateRouteActiveState() {
    if(this.props.to) {
        let active = this.props.router.isActive(this.props.to, true);
        this.setState({
            active: active
        });
    }
}

class SidebarItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subItems: props.subItems || [],
            active: false,
            open: false
        };
        this.componentDidMount = this.componentWillReceiveProps = updateRouteActiveState.bind(this);
    }

    handleClick(e) {
        if(!this.props.to) {
            e.preventDefault();
        }
        if(this.state.subItems.length > 0) {
            this.setState({
                open: !this.state.open
            });
        }
    }

    render() {
        return (
            <li className={classNames({'active': this.state.active, 'open': this.state.open})}>
                <Link to={this.props.to || ''} onClick={this.handleClick.bind(this)}>
                    {(() => {
                        if(this.props.iconClass) {
                            return <i className={classNames('menu-icon', 'fa', this.props.iconClass)} />;
                        }
                    })()}
                    <span className="menu-text">
                        {this.props.children}
                    </span>
                    {(() => {
                        if(this.state.subItems.length > 0) {
                            return <b className="arrow fa fa-angle-down" />;
                        }
                    })()}
                </Link>
                {(() => {
                    if(this.state.subItems.length > 0) {
                        const SidebarItemWithRouter = withRouter(SidebarItem);
                        return (
                            <ul className={classNames({'submenu': true, 'hidden': !this.state.open})}>
                                {
                                    this.state.subItems.map(menu => (
                                        <SidebarItemWithRouter key={menu.name} to={menu.top}>
                                            {menu.name}
                                        </SidebarItemWithRouter>
                                    ))
                                }
                            </ul>
                        );
                    }
                })()}
            </li>
        );
    }

}

SidebarItem.propTypes = {
    to: React.PropTypes.string,
    iconClass: React.PropTypes.string,
    subItems: React.PropTypes.array
};

export default withRouter(SidebarItem);