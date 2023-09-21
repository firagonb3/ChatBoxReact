import React from "react";
import { FlatList, View, Text } from "react-native";
import repositories from "../data/repositories.js";

const RepositoryList = () => {
    return (
        <View>
            <FlatList
                data={repositories}
                renderItem={({ item: repo }) => (
                    <View key={repo.id}>
                        <Text>{repo.id}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default RepositoryList;