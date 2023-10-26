import { useSearchParams } from 'react-router-dom';

// 示例电影数据
const movies = [
  { id: 1, title: '玩具總動員', genre: '動畫' },
  { id: 2, title: '靈魂急轉彎', genre: '動畫' },
  { id: 3, title: '星際效應', genre: '科幻' },
];

function MovieList() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 从查询参数中获取过滤条件
  const genreFilter = searchParams.get('genre');

  // 根据过滤条件筛选电影
  const filteredMovies = genreFilter
    ? movies.filter((movie) => movie.genre === genreFilter)
    : movies;

  return (
    <div>
      <h1>电影列表</h1>
      <select
        value={genreFilter || ''}
        onChange={(e) => {
          // 更新查询参数
          setSearchParams({ genre: e.target.value });
        }}
      >
        <option value="">所有类型</option>
        <option value="動畫">動畫</option>
        <option value="科幻">科幻</option>
      </select>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <hr/>
      <ul>
        {movies.map((mo)=>(
          <li key={mo.id}>{mo.id} | {mo.title} | {mo.genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
