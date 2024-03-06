import React, {useReducer, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
type ProducerProps = {
  name: string;
  image: string;
  distance: string;
  stars: number;
};
export default function Producer({
  name,
  image,
  distance,
  stars,
}: ProducerProps) {
  const [cardState, toggleCardState] = useReducer(
    (state: boolean) => !state,
    false,
  );
  const [starRange, setStarRange] = useState(stars);

  return (
    <TouchableOpacity onPress={toggleCardState} style={styles.card}>
      <Image style={styles.image} source={image} accessibilityLabel={name} />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.stars}>
            {Array.from({length: 5}).map((star, key) => (
              <TouchableOpacity
                onPressOut={() => setStarRange(key + 1)}
                disabled={!cardState}
                key={key}>
                <Text
                  style={[
                    key + 1 > starRange ? styles.starOff : styles.starOn,
                    cardState ? styles.starEditable : null,
                  ]}>
                  &#x02605;
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
}
