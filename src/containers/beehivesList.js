import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteBeehive, getAllBeehives} from "../actions/beehive_action";
import BeehiveItem from "../components/beehiveItem";
import {Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle} from "react-modal-bootstrap";


class BeehivesList extends Component {

    componentDidMount = () => {
        this.props.getAllBeehives();
    };

    onDeleteHandler = (id) => {
        this.props.deleteBeehive(id);
    };


    render = () => {

        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                    <div className="justify-content-center overflow-box">
                        {
                            this.props.beehives.map((beehive, index) => {
                                    return (
                                        <BeehiveItem
                                            index={index}
                                            key={beehive.id}
                                            beehive={beehive}
                                            onDeleteHandler={() => {
                                                return this.onDeleteHandler(beehive.id)
                                            }}
                                        />
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        beehives: state.beehiveReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllBeehives: () => dispatch(getAllBeehives()),
        deleteBeehive: id => dispatch(deleteBeehive(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BeehivesList);
