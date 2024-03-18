import { useRef, useState } from "react";
import { FlatList, View, ViewToken } from "react-native";

interface ChangeImageProps {
  viewableItems: Array<ViewToken>;
  changed: Array<ViewToken>;
}
import { CARD_SPACING, CARD_WIDTH, styles } from "./styles";

export function Home() {
  const [cardIndex, setCardIndex] = useState(0);

  const items = Array.apply(null, Array(4)).map((_, index) => {
    return index;
  });

  const indexChanged = useRef((info: ChangeImageProps) => {
    console.log(info.viewableItems[0]);
    const index = info.viewableItems[0].index!;
    setCardIndex(index);
  });

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentFlatList}
        style={styles.flatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + CARD_SPACING}
        scrollEventThrottle={16}
        disableIntervalMomentum
        decelerationRate={"fast"}
        data={items}
        renderItem={() => <View style={styles.card} />}
        keyExtractor={(item) => item.toString()}
        onViewableItemsChanged={indexChanged.current}
        viewabilityConfig={{
          waitForInteraction: true,
          viewAreaCoveragePercentThreshold: 20,
        }}
      />

      <View style={styles.indexes}>
        {items.map((item) => (
          <View
            key={item}
            style={[
              styles.bullet,
              item === cardIndex ? styles.bulletActive : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
}
