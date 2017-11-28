import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowMeAll extends Component {
  render() {
    return (
      <div className="ShowMeAll">
        <p>show</p>
        <div className="Summary">
          <img className="Photo0"/>
          <div className="ShowMeName"></div>
          <div className="ShowMeDemographics"></div>
          <div className="ShowMeOrganizations"></div>
        </div>

          {
          this.props.socialProfiles ?
          this.props.socialProfiles.map((profile) => (
            <div className={profile.typeId}>
              <p>{profile.typeName || ""}</p>
              <p>{profile.bio || ""}</p>
              <p>{profile.followers ? "Followers: " + profile.followers : ""}</p>
              <p>{profile.following || ""}</p>
            </div>
          ))
          : null
        }
        {/* {
        this.props.contactInfo ?
        this.props.contactInfo.map((contact) => (
          <div className={contact.typeId}>
            <p>{profile.typeName || ""}</p>
            <p>{profile.bio || ""}</p>
            <p>{profile.followers ? "Followers: " + profile.followers : ""}</p>
            <p>{profile.following || ""}</p>
          </div>
        ))
        : null
        } */}
        {
        this.props.photos ?
        this.props.photos.map((photo) => (
        <div className={photo.typeId}>
          <img src={photo.url}/>
        </div>
        ))
        : null
        }

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    socialProfiles: state.data.socialProfiles,
    photos: state.data.photos
  };
}

export default connect(mapStateToProps)(ShowMeAll);
