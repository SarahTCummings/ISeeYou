import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowMeAll extends Component {
  render() {
    return (
      <div className="ShowMeAll">
        <p>show</p>
        <div className="Summary">
          {/* Line11: checks if the array photos exists, if it does get the url of the first photo, otherwise do nothing. Same is for the alt but with name instead of url. */}
          <img className="Photo0" src={this.props.photos ? this.props.photos[0].url : null} alt={this.props.photos ? this.props.photos[0].typeName : null}/>
          <div className="ShowMeName">{this.props.contactInfo ? <p>{this.props.contactInfo.fullName}</p> : null}</div>
          <div className="ShowMeDemographics">{this.props.demographics ? [
              <p key="showMeGender">{this.props.demographics.gender || null}</p>,
              <p key="showMeAge">{this.props.demographics.age || null}</p>,
              <p key="showMeLocation">{this.props.demographics.locationGeneral || null}</p>] : null}
            </div>


            {this.props.organizations ? this.props.organizations.map((org) => (
          <div key={org.name}>
              <p>{org.title || null}</p>
              <p>{org.name || null}</p>
              <p>{org.startDate || null}</p>
              <p>{org.endDate || null}</p>
              <p>{org.current || null}</p>
        </div>
        )) : null}
        </div>

          {
          this.props.socialProfiles ?
          this.props.socialProfiles.map((profile) => (
            profile.type !== 'klout' ?
            <div key={profile.typeId}>
              <p>{profile.typeName || null}</p>
              <p>{profile.bio || null}</p>
              <p>{profile.followers ? "Followers: " + profile.followers : null}</p>
              <p>{profile.following || null}</p>
            </div> : null
          ))
          : null
        }

        {
          this.props.contactInfo ?
          <div className="contactInfo">
            <p>{this.props.contactInfo.givenName || null}</p>
          {this.props.contactInfo.middleNames ? this.props.contactInfo.middleNames.map((name) => (
            <p key={name}>{name}</p>
          )) : null}
            <p>{this.props.contactInfo.familyName || null}</p>
          {this.props.contactInfo.websites ? this.props.contactInfo.websites.map((website) => (
            <p key={website.url}>{website.url}</p>
          )) : null}
          {this.props.contactInfo.chats ? this.props.contactInfo.chats.map((chat) => (
            [<p key={chat.handle}>{chat.hanndle}</p>,
            <p key={chat.client}>{chat.client}</p>]
          )) : null}
          </div>
          : null
        }

        {
        this.props.photos ?
        this.props.photos.map((photo) => (
        <div key={photo.typeId}>
          <img src={photo.url} alt={photo.typeName}/>
        </div>
        ))
        : null
        }

      </div>
    );
  }
}
// TODO: KEYS

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
