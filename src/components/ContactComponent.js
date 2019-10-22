import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

const required = (value) => value && value.length;
const maxLength = (length) => (value) => !(value) || (value.length <= length);
const minLength = (length) => (value) => (value) && (value.length >= length);
const isNumber = (value) => !isNaN(Number(value));
const validEmail = (value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(value);

class Contact extends Component {
    
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postFeedback(this.props.dishId, values.firstname, values.lastname, values.email, values.agree, values.contactType, values.message);
        alert("See the values of your feedback: " + JSON.stringify(values));
        this.props.resetFeedbackForm();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            Hong Kong<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:contact@restaurant.com">contact@restaurant.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678">
                                <i className="fa fa-phone"></i> Call
                            </a>
                            <a role="button" className="btn btn-success" href="mailto:contact@restaurant.com">
                                <i className="fa fa-envelope-o"></i> Email
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9 mt-4">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={3}>First name</Label>
                                <Col md={9}>
                                    <Control.text model=".firstname" className="form-control" id="firstname" name="firstname" placeholder="First name" 
                                        validators={{ required, minLength: minLength(3), maxLength: maxLength(16) }} />
                                    <Errors className="text-danger" model=".firstname" show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters ',
                                            maxLength: 'Must be 16 characters or less '
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={3}>Last name</Label>
                                <Col md={9}>
                                    <Control.text model=".lastname" className="form-control" id="lastname" name="lastname" placeholder="Last name"
                                        validators={{ required, minLength: minLength(3), maxLength: maxLength(32) }} />
                                    <Errors className="text-danger" model=".lastname" show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters ',
                                            maxLength: 'Must be 32 characters or less '
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="phone" md={3}>Phone</Label>
                                <Col md={9}>
                                    <Control.text model=".phone" className="form-control" id="phone" name="phone" placeholder="Phone number"
                                        validators={{ required, minLength: minLength(3), maxLength: maxLength(16), isNumber }} />
                                    <Errors className="text-danger" model=".phone" show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 numbers ',
                                            maxLength: 'Must be 16 numbers or less ',
                                            isNumber: 'Must be numbers '
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={3}>Email</Label>
                                <Col md={9}>
                                    <Control.text model=".email" className="form-control" id="email" name="email" placeholder="Email address"
                                        validators={{ required, validEmail }} />
                                    <Errors className="text-danger" model=".email" show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validEmail: 'Invalid email address '
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 4, offset: 3}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" className="form-check-input" name="agree" /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={5}>
                                    <Control.select model=".contactType" className="form-control" name="contactType">
                                        <option>Phone</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={3}>Your feedback</Label>
                                <Col md={9}>
                                    <Control.text model=".message" className="form-control" rows="6" id="message" name="message" placeholder="Your feedback"
                                        validators={{ required }} />
                                    <Errors className="text-danger" model=".message" show="touched"
                                        messages={{
                                            required: 'Required '
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 9, offset: 3}}>
                                    <Button type="submit" color="primary">Send feedback</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;