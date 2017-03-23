//stateless functional component that wraps around the SkiDayCount component in ui dir
import SkiDayCount from '../ui/SkiDayCount'
import { connect } from 'react-redux'

/**create a container that will actually map data from our store to properties from the SkiDayCount ui component.*/

//map the state from the store to properties in SkiDayCount component
const mapStoreToProps = (state) => {
    //return an object with the names of the properties to map as KEY, and the data that we should include in those properties as VALUE.
    return {
        total : state.allSkiDays.length,
        //filter the days to get a new array of just the days that I'm looking for.
        powder: state.allSkiDays.filter(day => day.powder).length, //If true, add this day to the new array
        backcountry: state.allSkiDays.filter(day => day.backcountry).length
    }
};

//Connect creates a component that grabs the store out of state and can map state from the store to properties in a child component.
const Container = connect(mapStoreToProps)(SkiDayCount); //UI component that we wish to wrap

export default Container;

/******************************************************************************************************************************************
 * Previously hard coded
 * export default () =>
 * <SkiDayCount total={100} powder={25} backcountry={10} />
 * */



