import {loadProducers} from '@services/loadData';
import React, {ReactNode, useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {styles} from './styles';
import Producer from '../Producer';

export default function Producers({top: Top}) {
  const [title, setTitle] = useState('');
  const [producers, setProducers] = useState([]);
  const topList = () => (
    <>
      <Top />
      <Text style={styles.title}>{title}</Text>
    </>
  );
  useEffect(() => {
    const response = loadProducers();
    setTitle(response.title);
    setProducers(response.list);
  }, []);
  return (
    <FlatList
      data={producers.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })}
      renderItem={({item}) => <Producer {...item} />}
      keyExtractor={({name}) => name}
      ListHeaderComponent={topList}
    />
  );
}
