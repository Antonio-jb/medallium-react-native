import AsyncStorage from "@react-native-async-storage/async-storage";


export const LocalStorage = () => {
    const save = async (key: string, value: string) => {
        try{
            await AsyncStorage.setItem(key, value)
        }catch (error){
            console.log("Error saving data to local storage: " + error)
        }
    }
    const getItem = async (key: string) => {
        try{
            return await AsyncStorage.getItem(key)
        } catch (error){
            console.log("Error retrieving data from local storage: " + error);
        }
    }

    return{
        save,
        getItem,
    }
}