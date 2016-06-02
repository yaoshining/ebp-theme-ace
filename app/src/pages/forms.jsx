import React from 'react';
import Sidemenu from '../components/sidebar/sidemenu';

class Forms extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <h3 className="header smaller lighter blue">
                        Form ELements
                    </h3>
                    <form className="form-horizontal" role="form">
                        <div className="form-group">
                            <label htmlFor="form-field-1" className="col-sm-3 control-label no-padding-right">
                                Text Field
                            </label>
                            <div className="col-sm-9">
                                <input type="text" id="form-field-1" className="col-xs-10 col-sm-5"
                                       placeholder="Username"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="form-field-1-1" className="col-sm-3 control-label no-padding-right">
                                Full Length
                            </label>
                            <div className="col-sm-9">
                                <input type="text" id="form-field-1-1" placeholder="Text Field" autoComplete="off" className="form-control"/>
                            </div>
                        </div>
                        <div className="space-4"></div>
                        <div className="form-group">
                            <label htmlFor="form-field-2" className="col-sm-3 control-label no-padding-right">
                                Password Field
                            </label>
                            <div className="col-sm-9">
                                <input type="password" id="form-field-2" autoComplete="off" className="col-xs-10 col-sm-5"/>
                                <span className="help-inline col-xs-12 col-sm-7">
                                    <span className="middle">Inline help text</span>
                                </span>
                            </div>
                        </div>
                        <div classname="space-4"></div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label no-padding-right" htmlFor="form-input-readonly"> Readonly field </label>
                            <div className="col-sm-9">
                                <input readOnly="readonly" type="text" className="col-xs-10 col-sm-5" id="form-input-readonly" value="This text field is readonly!" />
                                <span className="help-inline col-xs-12 col-sm-7">
                                    <label className="middle">
                                        <input className="ebp" type="checkbox" id="id-disable-check" />
                                        <span className="lbl"> Disable it!</span>
                                    </label>
                                </span>
                            </div>
                        </div>
                        <div className="space-4"></div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label no-padding-right" for="form-field-4">Relative Sizing</label>

                            <div className="col-sm-9">
                                <input className="input-sm" type="text" id="form-field-4" placeholder=".input-sm" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="form-field-5" className="col-sm-3 control-label no-padding-right">
                                Grid Sizing
                            </label>
                            <div className="col-sm-9">
                                <input type="text" className="col-xs-1" id="form-field-5" placeholder=".col-xs-1"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label no-padding-right">
                                Input with Icon
                            </label>
                            <div className="col-sm-9">
                                <span className="input-icon">
                                    <input type="text" id="form-field-icon-1"/>
                                    <i className="ebp-icon fa fa-leaf blue" />
                                </span>
                                <span className="input-icon input-icon-right">
                                    <input type="text" id="form-field-icon-2"/>
                                    <i className="ebp-icon fa fa-leaf green" />
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export {Forms, Sidemenu as FormsMenu};