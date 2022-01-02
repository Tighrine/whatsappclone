import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: "100%",
    padding: 10,
    marginRight: -2,
    marginLeft:2
  },
  lefContainer: {
    flexDirection: 'row',
  },
  midContainer: {
    justifyContent: 'space-between'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
  },
  time: {
    fontSize: 14,
    color: 'grey'
  },
  timeVIew: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 'auto'
  }
});

export default styles;