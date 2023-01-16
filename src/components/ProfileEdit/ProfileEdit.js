import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import DatePicker from "react-datepicker";
import "./ProfileEdit.scss";
import AvatarEditor from 'react-avatar-editor'
import "react-datepicker/dist/react-datepicker.css";
import SimpleReactValidator from 'simple-react-validator';
import {format} from 'date-fns'
import Dropzone from 'react-dropzone'

class ProfileEdit extends Component {
    state = {
        profile: {
            image: "",
            id: "",
            name: "",
            lastname: "",
            phone: "",
            email: "",
            date: "",
            about: "",
        }
    }

    componentWillMount = () => {
        this.validator = new SimpleReactValidator();
    }

    componentDidMount = () => {
        this.setState({profile: this.props.profile[0]});
    }

    changeAccount = (event) => {
        const stateProfile = {...this.state.profile};
        stateProfile[event.target.id] = event.target.value;
        this.setState({profile: stateProfile});
    }

    changeDate = (date) => {
        const stateProfile = {...this.state.profile};
        stateProfile.dateObject = date;
        stateProfile.date = format(date, 'yyyy-MM-dd');
        this.setState({profile: stateProfile});
    }

    editAccount = () => {
        if (this.validator.allValid()) {
            console.log('sending state', this.state.profile)
            this.props.editAccount(this.state.profile);
            this.props.history.push("/");
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    handleDrop = (dropped) => {
        const stateProfile = {...this.state.profile};
        stateProfile.image = dropped[0];
        this.setState({profile: stateProfile});
    }

    render() {
        const dateArray = this.state.profile.date.split('-');
        let year = Number(dateArray[0]);
        let month = Number(dateArray[1]);
        let day = Number(dateArray[2]);
        const startDate = dateArray.length > 1 ? new Date(year, month - 1, day) : new Date();

        return (
            <div className="container">
                <div className="row ProfileEdit">
                    <div className="col col-lg-4 col-md-12 col-sm-12">
                        <div className="ProfileEdit__avatar">
                            <div className="form-group">
                                <Dropzone
                                    onDrop={this.handleDrop}
                                    noClick
                                    noKeyboard
                                    style={{width: '250px', height: '250px'}}
                                    accept={{'image/*': ['.jpeg', '.png']}}
                                >
                                    {({getRootProps, getInputProps}) => (
                                        <div {...getRootProps()}>
                                            <AvatarEditor width={250} height={250} scale={1.5}
                                                          image={this.state.profile.image}/>
                                            <input {...getInputProps()} />
                                        </div>
                                    )}
                                </Dropzone>
                                <p className="ProfileEdit__avatar--info">*Simply drag and drop new image from your computer</p>
                            </div>
                        </div>
                    </div>

                    <div className="col col-lg-8 col-md-12 col-sm-12">
                        <div className="ProfileEdit__details">
                            <div className="form-group">
                                <label className="ProfileEdit__details--label">Name</label>
                                <input onChange={this.changeAccount} type="text" id="name" className="form-control"
                                       value={this.state.profile.name}/>
                                {this.validator.message('name', this.state.profile.name, 'required')}
                            </div>
                            <div className="form-group">
                                <label className="ProfileEdit__details--label">Lastname</label>
                                <input onChange={this.changeAccount} type="text" id="lastname"
                                       className="form-control"
                                       value={this.state.profile.lastname}/>
                                {this.validator.message('lastname', this.state.profile.lastname, 'required')}
                            </div>
                            <div className="form-group">
                                <label className="ProfileEdit__details--label">Phone</label>
                                <input onChange={this.changeAccount} type="text" id="phone" className="form-control"
                                       value={this.state.profile.phone}/>
                                {this.validator.message('phone', this.state.profile.phone, 'required|phone')}
                            </div>
                            <div className="form-group">
                                <label className="ProfileEdit__details--label">Email</label>
                                <input onChange={this.changeAccount} type="text" id="email" className="form-control"
                                       value={this.state.profile.email}/>
                                {this.validator.message('email', this.state.profile.email, 'required|email')}
                            </div>
                            <div className="form-group">
                                <label className="ProfileEdit__details--label">Birthday</label>
                                <DatePicker id="date" className="form-control" selected={startDate}
                                            onChange={(date) => this.changeDate(date)}/>
                                {this.validator.message('date', this.state.profile.date, 'required')}
                            </div>

                            <div className="form-group">
                                <label className="ProfileEdit__details--label">About</label>
                                <textarea rows="10" value={this.state.profile.about} id="about"
                                          onChange={this.changeAccount} className="form-control"/>
                                {this.validator.message('about', this.state.profile.about, 'required')}
                            </div>
                        </div>

                        <button onClick={this.editAccount} className="ProfileEdit__details--save-button">SAVE
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(ProfileEdit);