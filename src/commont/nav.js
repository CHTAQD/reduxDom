import React , { Component } from 'react';
import { connect } from 'react-redux';

class nav extends Component {
	constructor (props) {
		super(props)
		console.log(this.props)
	}
	
	render(){
		return (
			<div>
				my nav
			</div>
		)
	}
		
}

	const mapStateProps = ( state )=>{
		return {
			value : state.nav.value
		}
	} 
	const mapDispatchProps = ( dispatch )=>{
		return {
			// add = ()=>{
      //   const action = {
      //     type :' ',
      //     value:''
      //   }
        // dispatch(action)
      }
		}
	
	
		


export default connect(mapStateProps, mapDispatchProps)(nav) ;