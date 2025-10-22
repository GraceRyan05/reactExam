import React from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';

const trendingTodayPage = (props) => {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['discover'],
    queryFn: getTrendingMovies,
  })

  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results;


  return (
    <PageTemplate
      title="Trending Today"
      movies={movies}
      action={(movie) => {
         
      }}
    />
  );

};

export default trendingTodayPage;
