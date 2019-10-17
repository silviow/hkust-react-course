import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {

        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }

    date(data) {

        let date = new Date(data);
        let dateStr = date.toDateString();

        return dateStr.slice(4, 10) + ', ' + dateStr.slice(11, 15);

    }

    renderComments(comments) {
        
        const comment = comments.map((cmnt) => {
            return (
                <li>
                    <p>"{cmnt.comment}"</p>
                    <p>~ {cmnt.author}, {this.date(cmnt.date)}</p>
                </li>
            );
        });

        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">{comment}</ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }

    render() {

        let dish = this.props.dish;

        if (dish != null) {
            return (
                <div className="row">
                    { this.renderDish(dish) }
                    { this.renderComments(dish.comments) }
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }

}

export default DishDetail;