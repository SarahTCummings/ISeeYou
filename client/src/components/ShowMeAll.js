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

{/* Below is for the organiziaitons. If Orgos exists, it loops through them and diplays them all. */}
            {this.props.organizations ? this.props.organizations.map((org) => (
          <div className="ShowMeOrganizations" key={org.name}>
              <p>{org.title || null}</p>
              <p>{org.name || null}</p>
              <p>{org.startDate || null}</p>
              <p>{org.endDate || null}</p>
              <p>{org.current || null}</p>
        </div>
        )) : null}
        </div>


{/* Below is for the social profiles(sp). If SP exists, it will show all the parts*/}
          {
          this.props.socialProfiles ?
          this.props.socialProfiles.map((profile) => (
            profile.type !== 'klout' ?
            <div className="socialProfile" key={profile.typeId}>
              <p className="socialType">{profile.typeName || null}</p>
              <p className="socialBio">{profile.bio || null}</p>
              <p className="socialFollowers">{profile.followers ? "Followers: " + profile.followers : null}</p>
              <p className="socialFollowing">{profile.following || null}</p>
            </div> : null
          ))
          : null
        }

{/* Below is for contact info. If CI exists, then it will show all the parts */}
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

{/* Below is for photos. If photos exists, then it will show all the photos */}
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

function mapStateToProps(state) {
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
