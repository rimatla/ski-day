import ShowErrors from '../ui/ShowErrors'
import { clearError } from '../../actions'
import { connect } from 'react-redux'


/**Take this component and map the state of the errors to the error property, also dispatch a clear error event when the user clicks the X (in the actual app page)*/

//map the state
const mapStateToProps = state => {
    //when this component loads, if there are any errors, it will be passed to it via the error property
    return {
        errors: state.errors
    }
};

//dispatch function to this component properties
const mapDispatchToProps = dispatch => { //pass store's dispatch function as an argument.
    return {
        onClearError(index) {
            dispatch(
                clearError(index)
            )
        }
    }
};

/**On SkiDayCount we physically created a container component using the Connect function.
 * Here we don't need to create a container component to do that
 * Just export the results of the connect function directly.*/

//The first argument that it expects is the function to mapStateToProps. And the second argument maps the dispatch to the UI components properties.
export default connect(mapStateToProps,mapDispatchToProps)(ShowErrors)


//
// export default () =>
// 	<ShowErrors errors={['sample error']}
// 						  onClearError={index => console.log('todo: clear error at', index)} />
