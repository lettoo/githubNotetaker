var React = require('react-native');

var Profile = require('./Profile');

var api = require('../utils/api');

var Repositories = require('./Repositories');

var {View, Text, StyleSheet, Image, TouchableHighlight} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
  },

  user_avatar: {
    height: 350,
  },

  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1
  },

  profile_button: {
    backgroundColor: '#48BBEC'
  },

  repo_button: {
    backgroundColor: '#E77AAE'
  },

  note_button: {
    backgroundColor: '#758BF4'
  },

  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  
});

class Dashboard extends React . Component {
  gotoProfile() {
    this.props.navigator.push({
          title: this.props.userinfo.name,
          component: Profile,
          passProps: {userinfo: this.props.userinfo}
        });
  }

  gotoRepos() {
    api.getRepos(this.props.userinfo.login)
    .then((res) => {
      this.props.navigator.push({
          title: 'Repos',
          component: Repositories,
          passProps: {userinfo: this.props.userinfo, repos: res}
        });
    });
    
  }

  gotoNotos() {
    console.log('goto profile')
  }

  
  render() {
    return (
      <View style={styles.container}>
				<Image
          style={styles.user_avatar}
          source={{uri: this.props.userinfo.avatar_url}} />

        <TouchableHighlight
          style={[styles.button, styles.profile_button]}
          onPress={this.gotoProfile.bind(this)}
          underlayColor='#88D4F5' >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.repo_button]}
          onPress={this.gotoRepos.bind(this)}
          underlayColor='#E39EBF' >
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.note_button]}
          onPress={this.gotoNotos.bind(this)}
          underlayColor='#9BAAF3' >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
				
			</View>
      )
  }
}

module.exports = Dashboard;