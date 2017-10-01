import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Import Style
import styles from './CreateAssignment.css';

import GridTile from 'material-ui/GridList';
import {Card, CardText, CardHeader, CardActions, CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import TimePicker from 'material-ui/TimePicker';

export class CreateAssignment extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <div>
       <Card>
    <CardHeader
      title="Baisc Settings"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
    </CardActions>
    <CardText expandable={true}>
    <TextField hintText="Display Name" className={styles.dividerUnder} floatingLabelText="Display Name"/>
      <Divider />
      <DatePicker style={{display: 'inline-block'}} floatingLabelText= "Start Date" hintText="Start Date" autoOk={true}/>
      <TimePicker className = {styles.adjust} style={{display: 'inline-block'}} floatingLabelText="Start Time" hintText="Start Time" autoOk={true}/>
      <br />
      <DatePicker style={{display: 'inline-block'}} floatingLabelText= "Due Date" hintText="Due Date" />
      <TimePicker className = {styles.adjust} style={{display: 'inline-block'}} floatingLabelText="Due Time" hintText="Due Time" autoOk={true}/>
      <br />
      <DatePicker style={{display: 'inline-block'}} floatingLabelText= "End Date" hintText="End Date" />
      <TimePicker className = {styles.adjust} style={{display: 'inline-block'}} floatingLabelText="End Time" hintText="End Time" autoOk={true}/>
      <br />
    </CardText>
  </Card>
 <br/>
  <Card>
    <CardHeader
      title="Section Settings"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
    </CardActions>
    <CardText expandable={true}>
    sample data here
    </CardText>
  </Card>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAssignment);
