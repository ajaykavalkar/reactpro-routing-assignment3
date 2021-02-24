import React, { Component } from 'react';
import './Course.css'
class Course extends Component {
    state = { loadedCourse: null, title: null }

    componentDidUpdate() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            if (this.state.title != param[1]) {
                console.log(param)
                this.setState({ title: param[1] })
            }
        }
    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            console.log(param)
            this.setState({ title: param[1] })
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="Course">
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;