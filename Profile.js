import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

const Profile = ({item, route}) => (
<ScrollView style={styles.profile} showsVerticalScrollIndicator={false}>
<Image
    style={styles.artist_pic}
    source={{uri: route.params.itemObj.artist_pic}}
    />
<Text style={styles.artist_bio}>{route.params.itemObj.artist_bio}</Text>
<Text style={styles.artist_age}>{route.params.itemObj.artist_age}</Text>
</ScrollView>
)

export default Profile;

const styles = StyleSheet.create({
    "artist_pic": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "artist_bio": {
        "fontSize": 12,
        "fontWeight": "250",
        "paddingHorizontal": 10,
        "paddingTop": 5
    },
    "artist_age": {
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 10,
        "paddingTop": 5
    }
});