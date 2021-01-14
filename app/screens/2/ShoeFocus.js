import React from "react"
import { View, Image, StyleSheet } from "react-native"

import colors from "../../config/colors"
import UserSnip from "../../components/UserSnip"
import AppText from "../../components/AppText"
import AppButton from "../../components/AppButton"

function ShoeFocus(props) {

  const listing = props.route.params

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <View style={styles.userContainer}>
          <UserSnip
            image={require("../../assets/user1.png")}
            title="Lara Simmons"
            subTitle="2 Pair"
          />
        </View>

        <AppButton title="Contact Owner"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
})

export default ShoeFocus