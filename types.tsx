/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
  Premium: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  Search: undefined;
};

export type TabThreeParamList = {
  YourLibrary: undefined;
};

export type TabFourParamList = {
  Premium: undefined;
};

export type Album = {
  id: string;
  imageUri: string;
  artistHeadline: string;
};


export type Song = {
  id: string,
  imageUri: string,
  title: string,
  artist: string,

};