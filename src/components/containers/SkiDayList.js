/**map SkiDayList to the actual state data.*/

import SkiDayList from '../ui/SkiDayList'
import { connect } from 'react-redux'
import { removeDay } from '../../actions'

/**create a container for the SkiDayList UI component*/

const mapStateToProps = (state, props) => ({  //receives state as an argument, secondly receives any properties past to this container
    //return object
    days: state.allSkiDays,
    /**
     * filter property is either going to equal powder or backcountry.
     * The router sets the filter property up for us, and passes it from the parent to the Container component
     * Then we pass it to the UI component.*/
    filter: props.params.filter,
    });

const mapDispatchToProps = disptach =>
    ({
        onRemoveDay(date) {
            disptach(
                //action creator
                //when user double clicks on a day to remove it, the on remove day property is invoked.
                removeDay(date)
            )
        }
    });


/**higher order function*/
//1st function ie: connect(), expects:
//First argument to be our mapStateToProps function.
//Second argument to be mapDispatchToProps.
export default connect(mapStateToProps, mapDispatchToProps)(SkiDayList) //second argument expects the UI component that we wish to connect ie: SkiDayList


/***************************************************************************************************************************************************************************
 * export default (props) =>
 <SkiDayList days={sample}
 filter={props.params.filter}
 onRemoveDay={date => console.log('remove day on', date)} />
 */

/**old sample data
 *
 * const sample = [
 {
 "resort": "Stowe",
 "date": "2017-1-28",
 "powder": false,
 "backcountry": false
},
 {
   "resort": "Tuckerman's Ravine",
   "date": "2017-1-31",
   "powder": false,
   "backcountry": true
 },
 {
   "resort": "Mad River Glen",
   "date": "2017-2-12",
   "powder": true,
   "backcountry": false
 }
 ];
 */

