import Dialog from 'react-native-dialog';
import { StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';

export function Alert(props) {
    return (
        <Dialog.Container
            visible={props.show}
            contentStyle={{width: props.width, alignItems:'center', justifyContent: 'center'}}
            onBackdropPress={()=>{console.log("back press!")}}
        >
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                    Style={{fontSize: 17, color: '#233152', lineHeight: 22,}}
                >
                    {props.message}
                </Text>
            </View>
            <View style={{flexDirection: 'row',padding:20}}>
                <TouchableOpacity
                    style={{flex: 1, width: '100%',borderWidth:1,borderColor:'#0070e0', marginTop: 10,marginRight:20}}
                    onPress={()=> console.log("open")}
                >
                    <Text style={{fontSize: 16, lineHeight: 18, color: '#0070e0',textAlign:'center'}}>
                        {props.openText}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{flex: 1, width: '100%',borderWidth:1,borderColor:'#D20D4F', marginTop: 10}}
                    onPress={()=> console.log("close")}
                >
                    <Text style={{fontSize: 16, lineHeight: 18, color: '#D20D4F',textAlign:'center'}}>
                        {props.closeText}
                    </Text>
                </TouchableOpacity>
            </View>
        </Dialog.Container>
    )
}