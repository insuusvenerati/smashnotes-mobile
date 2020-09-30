import { Block, Text, theme } from 'galio-framework';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card } from '../components/';
import { articles, nowTheme } from '../constants/';

const Articles = () => {
  return (
    <Block flex>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block style={styles.container}>
          <Text size={16} style={styles.title}>
            Notes
          </Text>
          {/* Notes */}
          <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]} />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.SIZES.BASE,
  },
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER,
  },
});

export default Articles;
