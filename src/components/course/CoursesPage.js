import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursePage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        const { courses } = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input 
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage} />

                <CourseList courses={courses} />
            </div>
        );
    }
}

CoursePage.propTypes = {
    //dispatch: PropTypes.func.isRequired, if there is no function mapDispatchToProps()
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
    //createCourse: PropTypes.func.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses //comes from rootReducer in reducers/index.js
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //createCourse: (course) => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);

/* alternative
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateToPops(CoursesPage);
*/