import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import AppColors from '../constants/color';
import Icon from 'react-native-vector-icons/FontAwesome'

function ListItem({ item, onDelete }) {
    return <TouchableOpacity style={styles.listItem}><View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon name="remove" size={20} color="firebrick" style={{margin: 8}}
            onPress={() => onDelete(item.id)} />
    </View></TouchableOpacity>
}

const styles = StyleSheet.create({
    listItem: {
        padding: 16,
        backgroundColor: AppColors.colorSecondary,
        borderBottomWidth: 1,
        borderColor: AppColors.colorSecondaryDark,
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    },
})

export default ListItem;