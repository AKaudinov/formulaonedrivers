import React from 'react';
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import * as filterActions from '../actions/filters';

export class DriverListFilters extends React.Component{
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    render(){
        return (
            <form className="driver-list-filters-form" noValidate autoComplete="off">
                <Tooltip color="primary" title="Search by name or nationality" aria-label="Search by nam or nationality">
                    <TextField id="Search" label="Search" variant="outlined" onChange={this.onTextChange} value={this.props.filters.text}/>
                </Tooltip>
            </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};


const mapDispatchToProps = dispatch => ({
    setTextFilter: text => dispatch(filterActions.setTextFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(DriverListFilters);
