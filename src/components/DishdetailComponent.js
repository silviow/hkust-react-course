import React, { Component } from 'react';
import { CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {
    
    render() {
        const comments = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id}>
                    <CardText>- {dish.comments[dish.id].author}</CardText>
                    <CardText>"{dish.comments[dish.id].comment}"</CardText>
                </div>
            );
        });

        return (
            <CardBody>
                <CardTitle>Comments</CardTitle>
                {comments}
            </CardBody>
        );
    }

}

export default DishDetail;