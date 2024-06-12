import{Text,View,Image, TouchableOpacity} from 'react-native'
import estilo from './style'
import { useNavigation } from '@react-navigation/native'

export default function Card({nome, imgUrl, precoNormal, precoPromocao, metodoPagamento}){
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={estilo.cardTarefa}
        onPress={() => navigation.navigate('Details',{nome:nome, imgUrl:imgUrl, precoNormal:precoNormal, precoPromocao:precoPromocao, metodoPagamento:metodoPagamento})}
        >
        <View style={estilo.card}>
            <View style={estilo.imageCardContent}>
                <Image style={estilo.img} source={{uri: imgUrl }}/>
            </View>
            <View style={estilo.textCardContent}>
                <View style={estilo.deliveryCardContent}>
                    <Image style={estilo.icon} source={require('../../assets/truck.png')}/>
                    <Text style={estilo.deliveryText}>
                        Frete Grátis
                    </Text>
                </View>
                <View style={estilo.assessmentCardContent}>
                    <Image style={estilo.icon} source={require('../../assets/star-solid.png')}/>
                    <Image style={estilo.icon} source={require('../../assets/star-solid.png')}/>
                    <Image style={estilo.icon} source={require('../../assets/star-solid.png')}/>
                    <Image style={estilo.icon} source={require('../../assets/star-half-solid.png')}/>
                    <Image style={estilo.icon} source={require('../../assets/star-regular.png')}/>
                    <Text style={estilo.assessmentText}>
                        (152 Avaliações)
                    </Text>
                </View>
                <Text style={estilo.productNameText}>{nome}</Text>
                <View style={estilo.priceCardContent}>
                    <Text style={estilo.oldPriceText}>{precoNormal}</Text>
                    <Text style={estilo.newPriceText}>{precoPromocao}</Text>
                    <Text style={estilo.paymentMethod}>{metodoPagamento}</Text>
                </View>
            </View>
        </View>

        </TouchableOpacity>
    )
}

/* 

        <Image style={estilo.img} source={{ uri: imgUrl }} />
            <View>
                <Text style={estilo.tituloCard}>{nome}</Text>
                <Text style={estilo.precoNormal}>{precoNormal}</Text>
                <Text style={estilo.precoPromocao}>{precoPromocao}</Text>
                <Text style={estilo.metodoPagamento}>{metodoPagamento}</Text>
            </View>
*/

