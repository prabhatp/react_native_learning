import { StyleSheet, ScrollView, View, SafeAreaView, Text, StatusBar, FlatList, SectionList } from 'react-native';
import pokemonList from './data.json';
import groupedData from './grouped-data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => {
          return (
            <View key={pokemon.id} style={styles.card}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
      <View style={styles.flastListWrapper}>
        {/* <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            console.log('pokemon', item.id);
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            )
          }}
          // horizontal
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={<View style={{height: 16}} />}
          ListEmptyComponent={<Text>No items found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
          ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
        /> */}

        <SectionList 
          sections={groupedData} 
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            )
          }}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )}
          ItemSeparatorComponent={() => <View style={{height: 16}} />}
          SectionSeparatorComponent={() => <View style={{height: 16}} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight + 20
  },
  scrollView: {
    paddingHorizontal: 20
  },
  flastListWrapper: {
    paddingHorizontal: 20
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    // marginBottom: 16
  },
  cardText: {
    fontSize: 30
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold'
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center'
  },
  sectionHeaderText: {
    backgroundColor: "white",
    fontSize: 23,
    fontWeight: 'bold'
  }
});
