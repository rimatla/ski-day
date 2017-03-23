import AddDayForm from '../ui/AddDayForm'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
//action creators
import { addDay, suggestResortNames, clearSuggestions } from '../../actions'

/**take care of suggestions, fetching, and router, the first three lines in addDayForm*/
//wrap a component, and add the router to its properties
const mapStateToProps = (state, props) =>
    ({
        suggestions: state.resortNames.suggestions,
        fetching: state.resortNames.fetching,
        //add the router to its properties
        router: props.router
    });

/**dispatch action creators for newDay, onChange, onClear*/
const mapDispatchToProps = dispatch =>
    ({
        /**map these three properties ie: onNewDay, onChange, onClear*/
        //destructure values
        onNewDay({resort,date,powder,backcountry}) {
            dispatch(
                /**addDay(day.resort, day.date, day.powder, day.backcountry)*/
                //action creator
                addDay(resort, date, powder, backcountry)
            )
        },
        //get suggestions from the server when there's a value,
        //if value's an empty string, or there's not a value there, clear the suggestions.
        onChange(value) {
            if (value) {
                dispatch(
                    suggestResortNames(value)
                )
            } else {
                //clear the suggestions
                dispatch(
                    clearSuggestions()
                )
            }
        },
        onClear() {
            //clear suggestions action creator
            dispatch(
                clearSuggestions()
            )
        }
    });

const Container = connect(mapStateToProps, mapDispatchToProps)(AddDayForm); //target AddDayForm from ui dir

//The withRouter() will wrap a component, and add the router to its properties. addDayForm (now contained inside of const Container) needs the router so that it can navigate the user back to the homepage.
export default withRouter(Container);


/**********************************************************************************************************************************************************************
 * The withRouter() will wrap a component, and add the router to its properties. addDayForm needs the router so that it can navigate the user back to the homepage.
 *export default withRouter(
 //component being wrapped ie: line 64 passes the router to the addDayForm
 (props) =>
 <AddDayForm suggestions={[]}
 fetching={false}
 router={props.router}
 onNewDay={day => console.log('todoLater: add day', day)}
 onChange={value => console.log('todoLater: suggest', value)}
 onClear={() => console.log('todoLater: clear suggestions')} />
 )
 */


/*
TodoInThisApp:
- As soon as we add the day, add this data to our state.
- When user sees add another? If we select Okay, we stay in the form and we can add another date.
- If we select cancel, the router itself is being passed to the component as a property,
- That should automatically navigate the user back to the homepage
 */