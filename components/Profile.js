var React = require('react-native');
var Badge = require('./Badge');
var Separator = require('./helpers/Separator');

var {
	View,
	Text,
	StyleSheet,
	ScrollView,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

class Profile extends React.Component{
	render() {
		var userinfo = this.props.userinfo;
		var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
		var list = topicArr.map((item, index) => {
			if (!userinfo[item]) {
				return <View key={index} />
			} else {
				return (
					<View key={index}>
						<View style={styles.rowContainer}>
							<Text style={styles.rowTitle}>{item}</Text>
							<Text style={styles.rowContent}>{userinfo[item]}</Text>
						</View>
						<Separator />
					</View>
				)
			}
		})
		return (
			<ScrollView
			  style={styles.container}>
			  <Badge userinfo={this.props.userinfo} />
			  {list}
			</ScrollView>
		)
	}
}


module.exports = Profile;