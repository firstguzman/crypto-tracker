import AsyncStorage from "@react-native-async-storage/async-storage"

class Storage {
  static instance = new Storage()

  store = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (error) {
      throw error
    }
  }

  get = async key => {
    try {
      return await AsyncStorage.getItem(key)
    } catch (error) {
      throw error
    }
  }

  getAll = async keys => {
    try {
      return await AsyncStorage.multiGet(keys)
    } catch (error) {
      throw error
    }
  }

  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys()
    } catch (error) {
      throw error
    }
  }

  remove = async key => {
    try {
      await AsyncStorage.removeItem(key)
      return true
    } catch (error) {
      return false
    }
  }
}

export default Storage

