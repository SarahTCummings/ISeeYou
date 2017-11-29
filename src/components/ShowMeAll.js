import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowMeAll extends Component {
  render() {
    return (
      <div className="ShowMeAll">
        <p>show</p>
        <div className="Summary">
          <img className="Photo0" src={this.props.photos ? this.props.photos[0].url : null}/>
          <div className="ShowMeName">{this.props.contactInfo ? <p>{this.props.contactInfo.fullName}</p> : null}</div>
          <div className="ShowMeDemographics">{this.props.demographics ? [
              <p>{this.props.demographics.gender || null}</p>,
              <p>{this.props.demographics.age || null}</p>,
              <p>{this.props.demographics.locationGeneral || null}</p>] : null}
            </div>
          <div className="ShowMeOrganizations">{this.props.organizations ? [
              <p>{this.props.organizations.title || null}</p>,
              <p>{this.props.organizations.name || null}</p>,
              <p>{this.props.organizations.startDate || null}</p>,
              <p>{this.props.organizations.endDate || null}</p>,
              <p>{this.props.organizations.current || null}</p>] : null}
        </div>
        </div>

          {
          this.props.socialProfiles ?
          this.props.socialProfiles.map((profile) => (
            profile.type !== 'klout' ?
            <div key={profile.typeId}>
              <p>{profile.typeName || ""}</p>
              <p>{profile.bio || ""}</p>
              <p>{profile.followers ? "Followers: " + profile.followers : ""}</p>
              <p>{profile.following || ""}</p>
            </div> : null
          ))
          : null
        }
        {
          this.props.contactInfo ?
          <div className="contactInfo">
            <p>{this.props.contactInfo.givenName || ""}</p>
          {this.props.contactInfo.middleNames ? this.props.contactInfo.middleNames.map((name) => (
            <p key={name}>{name}</p>
          )) : null}
            <p>{this.props.contactInfo.familyName || ""}</p>
          </div>
          : null
        }
        {
        this.props.photos ?
        this.props.photos.map((photo) => (
        <div key={photo.typeId}>
          <img src={photo.url}/>
        </div>
        ))
        : null
        }

      </div>
    );
  }
}
// TODO: ORGS, KLOUT, websites, KEYS

function mapStateToProps(state) {
  console.log(state.data.contactInfo);
  return {
    data: state.data,
    socialProfiles: state.data.socialProfiles,
    photos: state.data.photos,
    contactInfo: state.data.contactInfo,
    demographics: state.data.demographics,
    organizations: state.data.organizations
  };
}

export default connect(mapStateToProps)(ShowMeAll);
