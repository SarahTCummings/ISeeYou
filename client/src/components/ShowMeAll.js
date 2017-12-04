import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowMeAll extends Component {
  render() {
    return (
      <div className="ShowMeAll">
        <div className="Summary">
          {/* Line11: checks if the array photos exists, if it does get the url of the first photo, otherwise do nothing. Same is for the alt but with name instead of url. */}
          <img className="ShowMePhoto" src={this.props.photos ? this.props.photos[0].url : null} alt={this.props.photos ? this.props.photos[0].typeName : null}/>
          <div className="ShowMeName">
            {this.props.contactInfo ? <p>Name: {this.props.contactInfo.fullName}</p>: null}
          </div>
          <div className="ShowMeDemographics">
            {this.props.demographics ? [
              <p key="showMeGender">Gender: {this.props.demographics.gender || null}</p>,
              <p key="showMeAge">Age: {this.props.demographics.age || "Unknown"}</p>,
              <p key="showMeLocation">Location: {this.props.demographics.locationGeneral || null}</p>] : null}
          </div>
        </div>

{/* Below is for the organiziaitons. If Orgos exists, it loops through them and diplays them all. */}
        <div className="ShowMeOrgo">
          <h2>Organizations:</h2>
            {this.props.organizations ? this.props.organizations.map((org) => (
          <div className="ShowMeOrganizations" key={org.name}>
              <p>{org.name || null}: {org.title || null}</p>
              <p>Start Date: {org.startDate || "Unknown"}</p>
              <p>End Date: {org.endDate || "Unknown"}</p>
              <p>{org.current || null}</p>
          </div>
        )) : null}
        </div>


{/* Below is for the social profiles(sp). If SP exists, it will show all the parts*/}
      <div className="ShowMeSocialProfiles">
        <h2>Social Profiles</h2>
        <p>Below is what we found for your social profiles.</p>
        <i class="fa fa-facebook-official" aria-hidden="true"></i>
          {
          this.props.socialProfiles ?
          this.props.socialProfiles.map((profile) => (
            profile.type !== 'klout' ?
            <div className="socialProfile" key={profile.typeId}>
              <a href={profile.url || null}>{profile.typeName || null}</a>
              {profile.username ? <p className="userName">Username: {profile.username}</p> : null}
              {profile.bio ? <p className="socialBio">{profile.bio}</p> : null}
              {profile.followers ? <p className="socialFollowers">Followers: {profile.followers}</p> : null}
              {profile.following ? <p className="socialFollowing">Following: {profile.following} </p> : null}
            </div> : null
          ))
          : null
        }
      </div>

{/* Below is for contact info. If CI exists, then it will show all the parts */}
        {
          this.props.contactInfo ?
          <div className="contactInfo">
            <h2>Websites</h2>
            <p>Below are the websites that you're affilated with.</p>
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
        <div className="ShowMePhotos">
          <h2>Photos</h2>
          <p>Below are your photos on the internet.</p>
          {
          this.props.photos ?
          this.props.photos.map((photo) => (
          <div key={photo.typeId}>
            <img className="photos" src={photo.url} alt={photo.typeName}/>
          </div>
          ))
          : null
          }
        </div>
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
