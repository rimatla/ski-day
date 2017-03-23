/**wire up GoalProgress component to receive data from state.*/

import GoalProgress from '../ui/GoalProgress'
import { connect } from 'react-redux'
import { setGoal } from '../../actions'

const mapStateToProps = state =>
    ({
        //current length of skiDays in state
        current: state.allSkiDays.length,
        //goal value from state
        goal: state.goal
    });

const mapDispatchToProps = dispatch =>
    ({
        //handle the event bellow
        onNewGoal(goal) {
            //take goal and dispatch a setGoal action creatorwire
            dispatch(
                setGoal(goal)
            )
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(GoalProgress)


/*****************************************************************************************************************************************
 * export default () =>
 <GoalProgress current={10}
 goal={20}
 onNewGoal={goal => console.log('todoLater: change goal', goal)} />
 */

