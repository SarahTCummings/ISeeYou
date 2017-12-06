import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowMeAll extends Component {
  render() {
    // the function (loop) below matches the photo type id with the profile type id. If they match then show the photo.
    function getPhotoIndex(photos, profile) {
      for(var i = 0; i < photos.length; i ++) {
        if(photos[i].typeId === profile.typeId) {
          return photos[i].url;
        }
      }
    }

    return (
      <div className="ShowMeAll">
        <div className="Summary">
          {/* The line below checks if the array photos exists, if it does get the url of the first photo, otherwise do nothing. Same is for the alt but with name instead of url. */}
          <img className="ShowMePhoto" src={this.props.photos ? this.props.photos[0].url : null} alt={this.props.photos ? this.props.photos[0].typeName : null}/>
          <div>
            <div>
              {this.props.contactInfo ? <p className="ShowMeName">Name: {this.props.contactInfo.fullName}</p>: null}
            </div>
            <div className="ShowMeDemographics">
              {this.props.demographics ? [
                <p key="showMeGender">Gender: {this.props.demographics.gender || "Unknown"}</p>,
                <p key="showMeAge">Age: {this.props.demographics.age || "Unknown"}</p>,
                <p key="showMeLocation">Location: {this.props.demographics.locationGeneral || "Unknown"}</p>] : null}
            </div>
          </div>
        </div>

{/* Below is for the organiziaitons. If Orgos exists, it loops through them and diplays them all. */}
        <div>
          <h1>Organizations</h1>
            {this.props.organizations ? this.props.organizations.map((org) => (
          <div className="ShowMeOrganizations" key={org.name}>
            <div className="ShowMeOrgo">
              <p>{org.name || null}: {org.title || null}</p>
              <p>Start Date: {org.startDate || "Unknown"}</p>
              <p>End Date: {org.endDate || "Unknown"}</p>
              <p>{org.current || null}</p>
            </div>
          </div>
        )) : null}
        </div>


{/* Below is for the social profiles(sp). If SP exists, it will show all the parts*/}
      <div className="ShowMeSocialProfiles">
        <h1>Social Profiles</h1>
        <p>Below is what we found for your social profiles.</p>
{
          this.props.socialProfiles ?
          this.props.socialProfiles.map((profile) => (
            profile.type !== 'klout' ?
            <div className="socialProfile" key={profile.typeId}>
              <img className="photos" src={getPhotoIndex(this.props.photos, profile)}/>
              <a href={profile.url || null} target="_Blank">{profile.typeName || null}</a>
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
            <h1>Websites & Chat handles</h1>
            <h3>Below are the websites & chat handles you are assoicated with.</h3>
          {this.props.contactInfo.websites ? this.props.contactInfo.websites.map((website) => (
            <a href={website.url} target="_Blank" key={website.url}>{website.url}</a>
          )) : null}
          {this.props.contactInfo.chats ? this.props.contactInfo.chats.map((chat) => (
            [<p key={chat.handle}>{chat.hanndle}</p>,
            <p key={chat.client}>{chat.client}</p>]
          )) : null}
          </div>
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
