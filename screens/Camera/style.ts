import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    flexDirection: 'column'
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  closeButton: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 30,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  mainButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1
  }
});