import React, { FunctionComponent } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import Categories from './components/Categories/Categories';

import { Title, SearchScreenContainer, Border, HeadContainer } from './styles';

import { SearchProps } from './types';
import { SafeAreaView } from 'globalStyles/index';

const categories = [
  {
    title: 'Poisson',
    uri:
      'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F7e4729c6-efbc-475c-a8e8-e57fa8757b0e.2Ejpeg/748x372/quality/90/crop-from/center/poisson-a-la-bordelaise.jpeg',
  },
  {
    title: 'Poisson',
    uri:
      'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F7e4729c6-efbc-475c-a8e8-e57fa8757b0e.2Ejpeg/748x372/quality/90/crop-from/center/poisson-a-la-bordelaise.jpeg',
  },
  {
    title: 'Poisson',
    uri:
      'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F7e4729c6-efbc-475c-a8e8-e57fa8757b0e.2Ejpeg/748x372/quality/90/crop-from/center/poisson-a-la-bordelaise.jpeg',
  },
  {
    title: 'Poisson',
    uri:
      'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F7e4729c6-efbc-475c-a8e8-e57fa8757b0e.2Ejpeg/748x372/quality/90/crop-from/center/poisson-a-la-bordelaise.jpeg',
  },
  {
    title: 'Poisson',
    uri:
      'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F7e4729c6-efbc-475c-a8e8-e57fa8757b0e.2Ejpeg/748x372/quality/90/crop-from/center/poisson-a-la-bordelaise.jpeg',
  },
];

const poissonCategories = [
  {
    title: 'Cake au saumon fumé et citron',
    desc: 'Poisson',
    uri: 'https://kiwings-images-prod.s3-eu-west-1.amazonaws.com/recipes/521f11245c8ae.jpeg',
    isLiked: false,
  },
  {
    title: 'Cake au saumon fumé et citron',
    desc: 'Poisson',
    uri: 'https://kiwings-images-prod.s3-eu-west-1.amazonaws.com/recipes/521f11245c8ae.jpeg',
    isLiked: false,
  },
  {
    title: 'Cake au saumon fumé et citron',
    desc: 'Poisson',
    uri: 'https://kiwings-images-prod.s3-eu-west-1.amazonaws.com/recipes/521f11245c8ae.jpeg',
    isLiked: false,
  },
  {
    title: 'Cake au saumon fumé et citron',
    desc: 'Poisson',
    uri: 'https://kiwings-images-prod.s3-eu-west-1.amazonaws.com/recipes/521f11245c8ae.jpeg',
    isLiked: false,
  },
  {
    title: 'Cake au saumon fumé et citron',
    desc: 'Poisson',
    uri: 'https://kiwings-images-prod.s3-eu-west-1.amazonaws.com/recipes/521f11245c8ae.jpeg',
    isLiked: false,
  },
  {
    title: 'Cake au saumon fumé et citron',
    desc: 'Poisson',
    uri: 'https://kiwings-images-prod.s3-eu-west-1.amazonaws.com/recipes/521f11245c8ae.jpeg',
    isLiked: false,
  },
];

const SearchScreen: FunctionComponent<SearchProps> = ({ navigation }) => {
  const search = (searchText: string) => {
    console.log(searchText);
  };

  const navigate = (data: object) => {
    console.log(data);
    navigation.navigate('resultList', { data: poissonCategories });
  };

  return (
    <SafeAreaView>
      <SearchScreenContainer>
        <HeadContainer>
          <Title>Rechercher</Title>
          <Border />
          <SearchBar onSearch={search} />
        </HeadContainer>
        <Categories categories={categories} navigate={navigate} />
      </SearchScreenContainer>
    </SafeAreaView>
  );
};

export default SearchScreen;
